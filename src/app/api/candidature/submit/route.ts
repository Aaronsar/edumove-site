import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";

export const runtime = "nodejs";
export const maxDuration = 60;

const BREVO_API_KEY = process.env.BREVO_API_KEY_EDUMOVE;

const TO_EMAIL = "admissions@edumove.fr";
const FROM_NAME = "Edumove — Candidature en ligne";
const FROM_EMAIL = "admissions@edumove.fr";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB par fichier

interface Payload {
  anneeScolaire: string;
  programme: string;
  firstname: string;
  middlename: string;
  lastname: string;
  sexe: string;
  dateNaissance: string;
  age: string;
  villeNaissance: string;
  nationalite: string;
  passeport: string;
  adresseRue: string;
  appartement: string;
  ville: string;
  etat: string;
  pays: string;
  zip: string;
  telephone: string;
  email: string;
  diplomeSecondaire: boolean;
  diplomeLicence: boolean;
  diplomeEnCours: boolean;
}

const PROGRAMME_LABELS: Record<string, string> = {
  infirmier: "Soins infirmiers (L/SNT1)",
  physiotherapie: "Physiothérapie (L/SNT2)",
  osteopathie: "Ostéopathie (L/SNT4)",
  autre_licence: "Autre programme licence",
  pharmacie: "Pharmacie (LM-13)",
  medecine: "Médecine et chirurgie (LM-41)",
  odontologie: "Odontologie (LM-46)",
  autre_maitrise: "Autre programme maîtrise",
};

function formatDateFR(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

/** Génère un PDF de pré-candidature rempli (overlay sur le PDF original) */
async function generateFilledPdf(payload: Payload, signatureDataUrl: string | null): Promise<Uint8Array> {
  const pdfPath = path.join(process.cwd(), "public", "files", "formulaire-pre-candidature-link-campus.pdf");
  const existingPdfBytes = await fs.readFile(pdfPath);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPage(0);
  const { height: PAGE_HEIGHT } = page.getSize();

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Helper: convert Y from pdftotext bbox (top-down) to pdf-lib baseline (bottom-up).
  // bboxYTop = yMin of text bbox dans pdftotext.
  // Pour overlay du texte SUR une ligne d'écriture située sous un label,
  // utiliser bboxYTop = yMin_label + ~12 pour passer sous le label.
  const fromTop = (yTopBaseline: number) => PAGE_HEIGHT - yTopBaseline;

  const drawText = (text: string, x: number, y: number, opts?: { size?: number; font?: PDFFont; color?: { r: number; g: number; b: number } }) => {
    const size = opts?.size ?? 9;
    const font = opts?.font ?? helvetica;
    const color = opts?.color ?? { r: 0.106, g: 0.114, b: 0.227 }; // #1B1D3A
    page.drawText(text || "", { x, y, size, font, color: rgb(color.r, color.g, color.b) });
  };

  const drawCheck = (x: number, y: number) => {
    // X mark in orange, slightly bigger than text
    drawText("X", x, y, { size: 12, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  };

  // ────── ANNÉE SCOLAIRE (3 cases) ──────
  // Texte des années à yMin≈182, yMax≈195 → centre ≈ 188.6
  // Cases situées à x = textX - 18 environ
  // baseline pdf-lib pour centrer "X" : fromTop(192)
  {
    const yMark = fromTop(192);
    const xByYear: Record<string, number> = {
      "2025/2026": 197,
      "2026/2027": 333,
      "2027/2028": 472,
    };
    const x = xByYear[payload.anneeScolaire];
    if (x !== undefined) drawCheck(x, yMark);
  }

  // ────── PROGRAMME (radio buttons) ──────
  // Licence (col gauche, ronds à x ≈ 53)
  // Maîtrise (col droite, ronds à x ≈ 326)
  // Y selon le programme (yMin du texte de chaque ligne)
  const programmeCoords: Record<string, { x: number; yTop: number }> = {
    infirmier: { x: 53, yTop: 282 },           // Soins infirmiers (L/SNT1) yMin=274.6
    physiotherapie: { x: 53, yTop: 313 },      // Physiothérapie (L/SNT2) yMin=305.7
    osteopathie: { x: 53, yTop: 342 },         // Ostéopathie (L/SNT4) yMin=335
    autre_licence: { x: 53, yTop: 370 },       // Autre yMin=362.6
    pharmacie: { x: 326, yTop: 282 },          // Pharmacie (LM-13) yMin=274.6
    medecine: { x: 326, yTop: 313 },           // Médicine et chirurgie (LM-41) yMin=305.7
    odontologie: { x: 326, yTop: 342 },        // Odontologie (LM-46) yMin=335
    autre_maitrise: { x: 326, yTop: 370 },     // Autre yMin=362.6
  };
  const prog = programmeCoords[payload.programme];
  if (prog) drawCheck(prog.x, fromTop(prog.yTop));

  // ────── NOM COMPLET ──────
  // Label "NOM COMPLETE" à yMin=399.75, yMax=411.49 — underscore line ≈ 411
  // On colle tous les noms ensemble pour un rendu compact "Prénom Second Nom"
  {
    const yWrite = fromTop(408);
    const fullName = [payload.firstname, payload.middlename, payload.lastname]
      .filter(Boolean)
      .join(" ");
    drawText(fullName, 135, yWrite, { size: 9 });
  }

  // ────── SEXE (cases Mâle / Femme) ──────
  // "SEXE:" yMin=399.75 xMax=437.20, "Mâle" yMin=399.75 x=459.81, "Femme" x=512.42
  // Cases vides juste avant chaque texte
  {
    const yMark = fromTop(409);
    if (payload.sexe === "M") drawCheck(449, yMark);
    if (payload.sexe === "F") drawCheck(502, yMark);
  }

  // ────── DATE NAISSANCE / ÂGE / VILLE NAISSANCE ──────
  // Labels à yMin=433.25 yMax≈445
  // "DATE DE NAISSANCE" se termine xMax=185 / "ÂGE" se termine xMax=255 / "VILLE DE NAISSANCE" xMax=405
  // Underscore line à top-down y ≈ 446
  {
    const yWrite = fromTop(441);
    drawText(formatDateFR(payload.dateNaissance), 190, yWrite, { size: 9 });  // après "DATE DE NAISSANCE"
    drawText(payload.age, 265, yWrite, { size: 9 });                          // après "ÂGE"
    drawText(payload.villeNaissance, 410, yWrite, { size: 9 });               // après "VILLE DE NAISSANCE"
  }

  // ────── NATIONALITÉ / PASSEPORT ──────
  // Labels à yMin=466.75 yMax≈478
  // "NATIONALITÉ" se termine xMax=126 / "NUMÉRO DE PASSEPORT" se termine xMax=405
  {
    const yWrite = fromTop(475);
    drawText(payload.nationalite, 130, yWrite, { size: 9 });    // après "NATIONALITÉ"
    drawText(payload.passeport, 410, yWrite, { size: 9 });      // après "NUMÉRO DE PASSEPORT"
  }

  // ────── ADRESSE PERMANENTE ──────
  // Label "ADRESSE PERMANENTE" yMax≈511, xMax=146
  // On concatène TOUT en une seule chaîne pour éviter les gros gaps
  // entre colonnes. Format : "rue, appt, ville, état, pays, zip"
  {
    const yWrite = fromTop(508);
    const parts = [
      payload.adresseRue + (payload.appartement ? `, apt ${payload.appartement}` : ""),
      payload.ville,
      payload.etat,
      payload.pays,
      payload.zip,
    ].filter(Boolean);
    drawText(parts.join(", "), 170, yWrite, { size: 7 });
  }

  // ────── TÉLÉPHONE / COURRIEL ──────
  // Labels à yMin=533.75 yMax≈545
  // "TÉLÉPHONE ( )" se termine xMax=128 / "COURRIEL" se termine xMax=325
  // Décaler email à 345 pour ne pas chevaucher "COURRIEL"
  {
    const yWrite = fromTop(541);
    drawText(payload.telephone, 145, yWrite, { size: 8 });    // après "TÉLÉPHONE ( )"
    drawText(payload.email, 345, yWrite, { size: 8 });        // bien après "COURRIEL"
  }

  // ────── DIPLÔME (3 cases à cocher) ──────
  // Lignes à yMin=599.4, 620.7, 642.1
  // Cases à x ≈ 54 (avant les puces "Je suis...")
  {
    if (payload.diplomeSecondaire) drawCheck(54, fromTop(606));
    if (payload.diplomeLicence) drawCheck(54, fromTop(627));
    if (payload.diplomeEnCours) drawCheck(54, fromTop(648));
  }

  // ────── SIGNATURE (image PNG) ──────
  // Label "Signature" à yMin=748.89 (et "Date" à droite)
  // La ligne d'écriture est juste après le label
  if (signatureDataUrl) {
    try {
      const sigBase64 = signatureDataUrl.replace(/^data:image\/\w+;base64,/, "");
      const sigBytes = Buffer.from(sigBase64, "base64");
      const sigImage = await pdfDoc.embedPng(sigBytes);
      // Dim signature: max 150x35 pour rentrer dans la ligne
      const sigDims = sigImage.scaleToFit(150, 35);
      // Position : juste après le label "Signature" qui se termine vers x=90
      page.drawImage(sigImage, {
        x: 100,
        y: fromTop(760) - sigDims.height / 2,
        width: sigDims.width,
        height: sigDims.height,
      });
    } catch (e) {
      console.error("Failed to embed signature:", e);
    }
  }

  // ────── DATE (à droite, après label "Date") ──────
  // Label "Date" yMin=748.89 x=391.8 xMax≈410
  drawText(formatDateFR(new Date().toISOString()), 418, fromTop(755), { size: 9 });

  // ────── Marque discrète "Soumis en ligne via edumove.fr" ──────
  page.drawText(`Soumis en ligne via edumove.fr le ${formatDateFR(new Date().toISOString())}`, {
    x: 50,
    y: 25,
    size: 7,
    font: helvetica,
    color: rgb(0.58, 0.6, 0.65),
  });

  return await pdfDoc.save();
}

/** Envoie l'email via Brevo avec les pièces jointes */
async function sendEmail(payload: Payload, attachments: Array<{ content: string; name: string }>) {
  if (!BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY_EDUMOVE n'est pas configurée côté serveur.");
  }

  const fullName = `${payload.firstname} ${payload.lastname}`.trim().toUpperCase();
  const subject = `Candidature Edumove — ${payload.lastname.toUpperCase()} ${payload.firstname}`;

  const html = `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif;background:#f4f5f7;margin:0;padding:32px;">
  <table cellpadding="0" cellspacing="0" width="600" align="center" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(27,29,58,0.06);margin:0 auto;">
    <tr><td style="background:#1B1D3A;padding:24px 32px;text-align:center;">
      <img src="https://www.edumove.fr/edumove-logo.svg" alt="Edumove" width="120" style="filter:brightness(0) invert(1);">
    </td></tr>
    <tr><td style="padding:32px;">
      <h1 style="margin:0 0 16px;font-size:22px;color:#1B1D3A;">Nouvelle candidature en ligne</h1>
      <p style="margin:0 0 20px;font-size:14px;color:#334155;line-height:1.6;">
        Un candidat vient de soumettre son dossier via le formulaire en ligne <strong>edumove.fr/candidature-test-link/remplir</strong>.
      </p>

      <table cellpadding="0" cellspacing="0" width="100%" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:20px 0;">
        <tr><td style="padding:16px 20px;">
          <p style="margin:0 0 4px;font-size:11px;color:#EC680A;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Candidat</p>
          <p style="margin:0 0 14px;font-size:18px;color:#1B1D3A;font-weight:700;">${fullName}</p>

          <p style="margin:0 0 4px;font-size:11px;color:#64748b;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Programme</p>
          <p style="margin:0 0 12px;font-size:14px;color:#1B1D3A;">${PROGRAMME_LABELS[payload.programme] || payload.programme} — <strong>${payload.anneeScolaire}</strong></p>

          <p style="margin:0 0 4px;font-size:11px;color:#64748b;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Contact</p>
          <p style="margin:0 0 4px;font-size:14px;color:#1B1D3A;">📧 ${payload.email}</p>
          <p style="margin:0 0 12px;font-size:14px;color:#1B1D3A;">📞 ${payload.telephone}</p>

          <p style="margin:0 0 4px;font-size:11px;color:#64748b;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Naissance</p>
          <p style="margin:0 0 12px;font-size:14px;color:#1B1D3A;">${formatDateFR(payload.dateNaissance)} (${payload.age} ans) — ${payload.villeNaissance}, ${payload.nationalite}</p>

          <p style="margin:0 0 4px;font-size:11px;color:#64748b;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Adresse</p>
          <p style="margin:0;font-size:14px;color:#1B1D3A;">${payload.adresseRue}${payload.appartement ? ", apt " + payload.appartement : ""}, ${payload.zip} ${payload.ville}${payload.etat ? ", " + payload.etat : ""}, ${payload.pays}</p>
        </td></tr>
      </table>

      <p style="margin:0 0 8px;font-size:13px;color:#1B1D3A;font-weight:600;">Pièces jointes :</p>
      <ul style="margin:0 0 20px;padding-left:20px;font-size:13px;color:#334155;line-height:1.7;">
        <li>📄 Formulaire de pré-candidature rempli & signé</li>
        <li>🎓 Copie du baccalauréat</li>
        <li>🪪 Copie de la pièce d'identité</li>
      </ul>

      <div style="background:#FEF8EE;border-left:3px solid #EC680A;border-radius:0 8px 8px 0;padding:14px 18px;margin:16px 0;">
        <p style="margin:0;font-size:13px;color:#1B1D3A;line-height:1.6;">
          ➜ Ce dossier a été automatiquement transmis. Le candidat a reçu une copie en BCC.
        </p>
      </div>
    </td></tr>
    <tr><td style="background:#f8fafc;padding:18px 32px;text-align:center;border-top:1px solid #e2e8f0;">
      <p style="margin:0;font-size:11px;color:#94a3b8;">Edumove · Candidature en ligne · ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
    </td></tr>
  </table>
  </body></html>`;

  const candidateBccHtml = `<p style="font-size:14px;color:#334155;font-family:Arial,sans-serif;line-height:1.6;">
    Bonjour ${payload.firstname},<br><br>
    Nous avons bien reçu votre dossier de candidature pour le test LINK Campus du 25 juin.<br>
    Vous trouverez ci-joint votre formulaire rempli, votre copie du baccalauréat et votre pièce d'identité.<br><br>
    Un conseiller Edumove va vous recontacter sous 24h ouvrées pour la suite des démarches.<br><br>
    Bien cordialement,<br>L'équipe Edumove<br>
    📞 +33 1 89 74 42 57 · <a href="mailto:admissions@diploma-sante.fr">admissions@diploma-sante.fr</a>
  </p>`;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: TO_EMAIL, name: "Admissions Diploma Santé" }],
      bcc: [{ email: payload.email, name: fullName }],
      replyTo: { email: payload.email, name: fullName },
      subject,
      htmlContent: html.replace("</body>", candidateBccHtml + "</body>"),
      attachment: attachments,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Brevo error ${res.status}: ${errText}`);
  }

  return res.json();
}

async function fileToBase64(file: File): Promise<string> {
  const buf = Buffer.from(await file.arrayBuffer());
  return buf.toString("base64");
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const payloadJson = form.get("payload");
    const signature = form.get("signature");
    const fileBac = form.get("fileBac");
    const fileId = form.get("fileId");

    if (typeof payloadJson !== "string") {
      return NextResponse.json({ error: "Payload manquant" }, { status: 400 });
    }

    const payload: Payload = JSON.parse(payloadJson);

    // Validation basique
    if (!payload.firstname || !payload.lastname || !payload.email) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // Vérification taille fichiers
    if (!(fileBac instanceof File) || fileBac.size === 0) {
      return NextResponse.json({ error: "Copie du baccalauréat manquante" }, { status: 400 });
    }
    if (!(fileId instanceof File) || fileId.size === 0) {
      return NextResponse.json({ error: "Copie de la pièce d'identité manquante" }, { status: 400 });
    }
    if (fileBac.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Baccalauréat > 10 Mo" }, { status: 400 });
    }
    if (fileId.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Pièce d'identité > 10 Mo" }, { status: 400 });
    }

    // 1. Générer le PDF rempli
    const sigStr = typeof signature === "string" ? signature : null;
    const filledPdf = await generateFilledPdf(payload, sigStr);
    const filledPdfBase64 = Buffer.from(filledPdf).toString("base64");

    // 2. Convertir les fichiers en base64
    const [bacB64, idB64] = await Promise.all([
      fileToBase64(fileBac),
      fileToBase64(fileId),
    ]);

    const lastnameClean = payload.lastname.toUpperCase().replace(/[^A-Z]/g, "");
    const firstnameClean = payload.firstname.replace(/[^A-Za-z]/g, "");

    // Garde l'extension du fichier original
    const bacExt = (fileBac.name.split(".").pop() || "pdf").toLowerCase();
    const idExt = (fileId.name.split(".").pop() || "pdf").toLowerCase();

    const attachments = [
      {
        content: filledPdfBase64,
        name: `Pre-candidature-${lastnameClean}-${firstnameClean}.pdf`,
      },
      {
        content: bacB64,
        name: `Baccalaureat-${lastnameClean}-${firstnameClean}.${bacExt}`,
      },
      {
        content: idB64,
        name: `Piece-identite-${lastnameClean}-${firstnameClean}.${idExt}`,
      },
    ];

    // 3. Envoyer l'email
    await sendEmail(payload, attachments);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/candidature/submit] Error:", err);
    const msg = err instanceof Error ? err.message : "Erreur serveur";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
