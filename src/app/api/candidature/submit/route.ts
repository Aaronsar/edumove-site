import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";

export const runtime = "nodejs";
export const maxDuration = 60;

const BREVO_API_KEY = process.env.BREVO_API_KEY_EDUMOVE;

const TO_EMAIL = "admissions@diploma-sante.fr";
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
  const { width, height } = page.getSize();

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const draw = (text: string, x: number, y: number, opts?: { size?: number; font?: PDFFont; color?: { r: number; g: number; b: number } }) => {
    const size = opts?.size ?? 9;
    const font = opts?.font ?? helvetica;
    const color = opts?.color ?? { r: 0.106, g: 0.114, b: 0.227 }; // #1B1D3A
    page.drawText(text || "", {
      x,
      y,
      size,
      font,
      color: rgb(color.r, color.g, color.b),
    });
  };

  // PDF coordinates start from bottom-left
  // A4 = 595 x 842 pt
  // Y coordinates are estimated based on the PDF layout

  // ────── Année scolaire (checkbox row) ──────
  // 3 cases: 2025/2026 ~x=185, 2026/2027 ~x=320, 2027/2028 ~x=475
  const anneesX: Record<string, number> = {
    "2025/2026": 178,
    "2026/2027": 320,
    "2027/2028": 472,
  };
  const anneeY = height - 110;
  const xMark = anneesX[payload.anneeScolaire];
  if (xMark !== undefined) {
    draw("X", xMark, anneeY, { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  }

  // ────── Programme (radio) ──────
  // 2 colonnes : licence (gauche) et maîtrise (droite)
  // Y baselines approximatives pour chaque programme
  const programmeCoords: Record<string, [number, number]> = {
    infirmier: [70, height - 195],
    physiotherapie: [70, height - 225],
    osteopathie: [70, height - 255],
    autre_licence: [70, height - 285],
    pharmacie: [330, height - 195],
    medecine: [330, height - 225],
    odontologie: [330, height - 255],
    autre_maitrise: [330, height - 285],
  };
  const progXY = programmeCoords[payload.programme];
  if (progXY) {
    draw("X", progXY[0], progXY[1], { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  }

  // ────── Identité ──────
  // NOM COMPLET (3 sub-cells: premier, milieu, dernier)
  const yIdent = height - 360;
  draw(payload.firstname, 60, yIdent);
  draw(payload.middlename, 220, yIdent);
  draw(payload.lastname, 360, yIdent);

  // Sexe (Mâle / Femme)
  if (payload.sexe === "M") draw("X", 462, height - 343, { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  if (payload.sexe === "F") draw("X", 515, height - 343, { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });

  // Date de naissance / Âge / Ville
  const yLine2 = height - 410;
  draw(formatDateFR(payload.dateNaissance), 60, yLine2);
  draw(payload.age, 230, yLine2);
  draw(payload.villeNaissance, 320, yLine2);

  // Nationalité / Passeport
  const yLine3 = height - 460;
  draw(payload.nationalite, 60, yLine3);
  draw(payload.passeport, 320, yLine3);

  // Adresse permanente
  const yAdresse = height - 510;
  draw(`${payload.adresseRue}${payload.appartement ? `, apt ${payload.appartement}` : ""}`, 60, yAdresse);
  // Ville / État / Pays / Zip on same row
  draw(payload.ville, 200, yAdresse);
  draw(payload.etat, 290, yAdresse);
  draw(payload.pays, 365, yAdresse);
  draw(payload.zip, 470, yAdresse);

  // Téléphone / Email
  const yContact = height - 560;
  draw(payload.telephone, 110, yContact);
  draw(payload.email, 360, yContact);

  // ────── Diplôme (cases) ──────
  if (payload.diplomeSecondaire) {
    draw("X", 67, height - 625, { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  }
  if (payload.diplomeLicence) {
    draw("X", 67, height - 650, { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  }
  if (payload.diplomeEnCours) {
    draw("X", 67, height - 678, { size: 11, font: helveticaBold, color: { r: 0.92, g: 0.4, b: 0.04 } });
  }

  // ────── Signature (image) ──────
  if (signatureDataUrl) {
    try {
      const sigBase64 = signatureDataUrl.replace(/^data:image\/\w+;base64,/, "");
      const sigBytes = Buffer.from(sigBase64, "base64");
      const sigImage = await pdfDoc.embedPng(sigBytes);
      const sigDims = sigImage.scaleToFit(160, 50);
      page.drawImage(sigImage, {
        x: 60,
        y: height - 805,
        width: sigDims.width,
        height: sigDims.height,
      });
    } catch (e) {
      console.error("Failed to embed signature:", e);
    }
  }

  // ────── Date (en bas) ──────
  draw(formatDateFR(new Date().toISOString()), 450, height - 795);

  // Marque "Soumis en ligne via edumove.fr" — discret en bas
  page.drawText(`Soumis en ligne via edumove.fr le ${formatDateFR(new Date().toISOString())}`, {
    x: 60,
    y: 30,
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
