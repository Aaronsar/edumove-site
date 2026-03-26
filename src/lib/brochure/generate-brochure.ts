import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

// ─── PATHS ───
const ROOT = path.resolve(__dirname, "../../../");
const FONTS = path.join(__dirname, "fonts");
const PHOTOS = path.join(ROOT, "public/photos");
const OUTPUT = path.join(ROOT, "public/brochure-edumove.pdf");

// ─── BRAND COLORS — UNIQUEMENT 6 chiffres hex, zéro alpha ───
const NAVY = "#1B1D3A";
const NAVY_LIGHT = "#2A2D52";
const ORANGE = "#EC680A";
const ORANGE_DARK = "#D45E09";
const VIOLET = "#615CA5";
const VIOLET_LIGHT = "#7C6FC0";
const TEXT_DARK = "#334155";
const TEXT_MED = "#64748B";
const TEXT_SOFT = "#94A3B8";
const BG_LIGHT = "#F8FAFC";
const BG_WARM = "#FFF7ED";
const BG_VIOLET = "#F0EDFA";
const BORDER = "#E2E8F0";
const WHITE = "#FFFFFF";

// ─── A4 DIMENSIONS (pt) ───
const PW = 595.28;
const PH = 841.89;
const MG = 50;
const CW = PW - MG * 2;

// ─── LOGO SVG ───
const LOGO_SVG = "M151.06,145.52v-31.23h31.59l24.11-23-24.12-23h-93.16v38.5h-31.57l-24.12,23.01,24.12,23h31.57v38.73h93.17l24.11-23-24.12-23.01h-31.58ZM96.85,75.66h82.84l16.39,15.63-16.39,15.64h-82.84v-31.28ZM60.86,145.43l-16.39-15.63,16.39-15.64h82.83v31.28H60.86ZM179.69,184.17h-82.84v-31.28h82.84l16.39,15.64-16.39,15.63Z";
const LOGO_VB = 257.94;

// ─── HELPERS ───
function fillRect(doc: InstanceType<typeof PDFDocument>, x: number, y: number, w: number, h: number, color: string) {
  doc.save().rect(x, y, w, h).fill(color).restore();
}

function fillRounded(doc: InstanceType<typeof PDFDocument>, x: number, y: number, w: number, h: number, r: number, color: string) {
  doc.save().roundedRect(x, y, w, h, r).fill(color).restore();
}

function fillCircle(doc: InstanceType<typeof PDFDocument>, cx: number, cy: number, r: number, color: string) {
  doc.save().circle(cx, cy, r).fill(color).restore();
}

function drawLogo(doc: InstanceType<typeof PDFDocument>, cx: number, cy: number, size: number, bg = ORANGE, fg = WHITE) {
  const s = size / LOGO_VB;
  doc.save();
  doc.translate(cx - size / 2, cy - size / 2);
  doc.scale(s);
  doc.circle(LOGO_VB / 2, LOGO_VB / 2, LOGO_VB / 2).fill(bg);
  doc.path(LOGO_SVG).fill(fg);
  doc.restore();
}

function textCenter(doc: InstanceType<typeof PDFDocument>, text: string, y: number, font: string, size: number, color: string, opacity = 1) {
  doc.save();
  if (opacity < 1) doc.opacity(opacity);
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(text, MG, y, { width: CW, align: "center" });
  doc.restore();
}

function textLeft(doc: InstanceType<typeof PDFDocument>, text: string, x: number, y: number, font: string, size: number, color: string, maxW = CW, opacity = 1) {
  doc.save();
  if (opacity < 1) doc.opacity(opacity);
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(text, x, y, { width: maxW });
  doc.restore();
  return doc.y;
}

function pageNumber(doc: InstanceType<typeof PDFDocument>, n: number) {
  doc.save().font("Poppins").fontSize(8).fillColor(TEXT_SOFT);
  doc.text(`${n}`, 0, PH - 30, { width: PW, align: "center" });
  doc.restore();
}

function sectionTitle(doc: InstanceType<typeof PDFDocument>, label: string, title: string, y: number): number {
  doc.font("PoppinsSB").fontSize(10).fillColor(ORANGE);
  doc.text(label.toUpperCase(), MG, y, { width: CW, characterSpacing: 3 });
  const ny = doc.y + 5;
  doc.font("PoppinsB").fontSize(26).fillColor(NAVY);
  doc.text(title, MG, ny, { width: CW });
  return doc.y + 20;
}

function addPhoto(doc: InstanceType<typeof PDFDocument>, name: string, x: number, y: number, w: number, h: number) {
  const p = path.join(PHOTOS, name);
  if (fs.existsSync(p)) {
    doc.save();
    doc.roundedRect(x, y, w, h, 10).clip();
    doc.image(p, x, y, { width: w, height: h, cover: [w, h] as any });
    doc.restore();
  }
}

function newPage(doc: InstanceType<typeof PDFDocument>, bg = WHITE) {
  doc.addPage({ size: "A4", margin: 0 });
  fillRect(doc, 0, 0, PW, PH, bg);
}

// ═══════════════════════════════════════════════
function generate() {
  const doc = new PDFDocument({ size: "A4", margin: 0, bufferPages: true });
  const stream = fs.createWriteStream(OUTPUT);
  doc.pipe(stream);

  doc.registerFont("Poppins", path.join(FONTS, "Poppins-Regular.ttf"));
  doc.registerFont("PoppinsSB", path.join(FONTS, "Poppins-SemiBold.ttf"));
  doc.registerFont("PoppinsB", path.join(FONTS, "Poppins-Bold.ttf"));

  let y = 0;

  // ══════════════════════════════════════════════════════════════
  //  PAGE 1 — COUVERTURE
  // ══════════════════════════════════════════════════════════════
  fillRect(doc, 0, 0, PW, PH, NAVY);

  // Deco circles
  fillCircle(doc, PW - 40, 90, 80, NAVY_LIGHT);
  fillCircle(doc, 60, PH - 250, 50, NAVY_LIGHT);

  // Logo
  drawLogo(doc, PW / 2, 240, 100);

  // Title
  textCenter(doc, "Vos \u00e9tudes de sant\u00e9", 340, "PoppinsB", 36, WHITE);
  textCenter(doc, "en Europe", 385, "PoppinsB", 36, ORANGE);

  // Subtitle
  textCenter(doc, "Accompagnement complet  \u2022  Financement jusqu'\u00e0 100%", 450, "Poppins", 12, WHITE, 0.8);
  textCenter(doc, "Dipl\u00f4mes reconnus dans toute l'Union europ\u00e9enne", 470, "Poppins", 12, WHITE, 0.8);

  // Divider
  doc.save().moveTo(PW / 2 - 30, 510).lineTo(PW / 2 + 30, 510).lineWidth(2).strokeColor(ORANGE).stroke().restore();

  // Specialties
  textCenter(doc, "M\u00e9decine  \u2022  Dentaire  \u2022  Kin\u00e9sith\u00e9rapie  \u2022  Pharmacie  \u2022  V\u00e9t\u00e9rinaire", 530, "PoppinsSB", 10, WHITE, 0.5);

  // Bottom banner
  fillRect(doc, 0, PH - 80, PW, 80, ORANGE);
  textCenter(doc, "N\u00b01 de l'accompagnement sant\u00e9 en Europe", PH - 62, "PoppinsB", 15, WHITE);
  textCenter(doc, "500+ \u00e9tudiants  \u2022  3 universit\u00e9s  \u2022  5 fili\u00e8res  \u2022  100% finan\u00e7able", PH - 40, "Poppins", 9, WHITE, 0.85);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 2 — QUI SOMMES-NOUS
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  y = sectionTitle(doc, "\u00c0 propos", "Qui sommes-nous ?", MG);

  y = textLeft(doc, "Edumove ouvre les portes des \u00e9tudes de sant\u00e9 \u00e0 tous les \u00e9tudiants motiv\u00e9s. En France, le syst\u00e8me PASS/LAS ne laisse passer qu'une minorit\u00e9 d'\u00e9tudiants avec un taux d'\u00e9chec d\u00e9passant 80%.", MG, y, "Poppins", 11, TEXT_DARK) + 10;

  y = textLeft(doc, "Pourtant, des universit\u00e9s europ\u00e9ennes prestigieuses offrent des formations de qualit\u00e9, avec des dipl\u00f4mes reconnus dans toute l'UE gr\u00e2ce \u00e0 la directive 2005/36/CE.", MG, y, "Poppins", 11, TEXT_DARK) + 25;

  // Mission box
  fillRounded(doc, MG, y, CW, 55, 10, BG_WARM);
  doc.save().roundedRect(MG, y, 4, 55, 2).fill(ORANGE).restore();
  textLeft(doc, "Notre mission : chaque \u00e9tudiant motiv\u00e9 m\u00e9rite sa chance d'acc\u00e9der aux \u00e9tudes de sant\u00e9.", MG + 20, y + 18, "PoppinsSB", 12, NAVY, CW - 40);
  y += 80;

  // 4 values - grid 2x2
  const vals = [
    { title: "Accessibilit\u00e9", desc: "Des \u00e9tudes de sant\u00e9 accessibles, quelle que soit votre moyenne au bac.", color: ORANGE },
    { title: "Transparence", desc: "Tarifs clairs, engagements pr\u00e9cis. On ne promet que ce qu'on peut tenir.", color: ORANGE },
    { title: "Sur-mesure", desc: "Conseils et suivi adapt\u00e9s \u00e0 votre profil et vos ambitions.", color: VIOLET },
    { title: "Proximit\u00e9", desc: "Un conseiller d\u00e9di\u00e9 du premier appel jusqu'\u00e0 votre arriv\u00e9e.", color: VIOLET },
  ];
  const cardW = (CW - 20) / 2;
  for (let i = 0; i < 4; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = MG + col * (cardW + 20);
    const by = y + row * 100;
    fillRounded(doc, bx, by, cardW, 90, 10, BG_LIGHT);
    doc.save().roundedRect(bx, by, 4, 90, 2).fill(vals[i].color).restore();
    textLeft(doc, vals[i].title, bx + 18, by + 15, "PoppinsB", 13, NAVY, cardW - 30);
    textLeft(doc, vals[i].desc, bx + 18, by + 38, "Poppins", 9, TEXT_DARK, cardW - 30);
  }
  y += 225;

  // Stats
  fillRounded(doc, MG, y, CW, 80, 12, NAVY);
  const statItems = [
    { val: "500+", label: "\u00c9tudiants" },
    { val: "3", label: "Universit\u00e9s" },
    { val: "5", label: "Fili\u00e8res" },
    { val: "100%", label: "Finan\u00e7able" },
  ];
  const sw = CW / 4;
  for (let i = 0; i < 4; i++) {
    const sx = MG + i * sw;
    doc.font("PoppinsB").fontSize(24).fillColor(ORANGE);
    doc.text(statItems[i].val, sx, y + 16, { width: sw, align: "center" });
    doc.font("Poppins").fontSize(9).fillColor(WHITE);
    doc.text(statItems[i].label, sx, y + 48, { width: sw, align: "center" });
  }
  y += 105;

  // Photo
  addPhoto(doc, "etudiants-souriants.jpg", MG, y, CW, 180);

  pageNumber(doc, 2);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 3 — NOS FORMATIONS
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  y = sectionTitle(doc, "Formations", "Nos fili\u00e8res de sant\u00e9", MG);

  const formations = [
    { name: "M\u00e9decine", dur: "6 ans", desc: "Devenez m\u00e9decin en Europe avec un dipl\u00f4me reconnu dans toute l'Union europ\u00e9enne. Formations accessibles sans concours PASS/LAS.", color: ORANGE },
    { name: "Dentaire", dur: "5-6 ans", desc: "Acc\u00e9dez aux \u00e9tudes dentaires en Espagne ou en Italie sans concours. Dipl\u00f4me reconnu UE.", color: VIOLET },
    { name: "Kin\u00e9sith\u00e9rapie", dur: "3-4 ans", desc: "Formez-vous \u00e0 la kin\u00e9sith\u00e9rapie en Europe. D\u00e8s 9 420 \u20ac/an.", color: NAVY },
    { name: "Pharmacie", dur: "5 ans", desc: "Poursuivez des \u00e9tudes de pharmacie en Italie ou Espagne. Admission sur dossier ou entretien.", color: VIOLET_LIGHT },
    { name: "V\u00e9t\u00e9rinaire", dur: "5 ans", desc: "Int\u00e9grez une formation v\u00e9t\u00e9rinaire \u00e0 Madrid avec l'Universidad Europea.", color: ORANGE_DARK },
  ];

  for (let i = 0; i < formations.length; i++) {
    const f = formations[i];
    const fy = y + i * 108;
    fillRounded(doc, MG, fy, CW, 98, 10, BG_LIGHT);
    // Accent bar
    doc.save().roundedRect(MG, fy, 5, 98, 3).fill(f.color).restore();
    // Duration badge
    fillRounded(doc, PW - MG - 80, fy + 14, 70, 26, 13, f.color);
    doc.font("PoppinsSB").fontSize(9).fillColor(WHITE);
    doc.text(f.dur, PW - MG - 80, fy + 20, { width: 70, align: "center" });
    // Text
    textLeft(doc, f.name, MG + 22, fy + 16, "PoppinsB", 17, NAVY, CW - 120);
    textLeft(doc, f.desc, MG + 22, fy + 44, "Poppins", 9.5, TEXT_DARK, CW - 40);
  }

  y += 5 * 108 + 18;

  // Prépa
  fillRounded(doc, MG, y, CW, 60, 10, BG_WARM);
  doc.save().roundedRect(MG, y, 4, 60, 2).fill(ORANGE).restore();
  textLeft(doc, "Pr\u00e9pa Dentaire \u2014 1 + 5 ans", MG + 20, y + 12, "PoppinsB", 13, NAVY, CW - 40);
  textLeft(doc, "Ann\u00e9e pr\u00e9paratoire en anglais \u00e0 Alicante avant d'int\u00e9grer le cursus dentaire. B2 anglais requis, aucun test d'entr\u00e9e.", MG + 20, y + 34, "Poppins", 9, TEXT_DARK, CW - 40);

  pageNumber(doc, 3);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 4 — UNIVERSIDAD EUROPEA (vue d'ensemble)
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  // Header navy
  fillRect(doc, 0, 0, PW, 120, NAVY);
  drawLogo(doc, MG + 30, 60, 44);
  textLeft(doc, "UNIVERSIDAD EUROPEA", MG + 62, 25, "PoppinsB", 24, WHITE, CW - 70);
  textLeft(doc, "Espagne  |  5 Campus  |  Le plus grand r\u00e9seau sant\u00e9 espagnol", MG + 62, 60, "Poppins", 10, WHITE, CW - 70, 0.75);

  y = 145;

  // Stats inline
  const ueStats = ["+300 \u00e9tudiants", "5 campus", "6 fili\u00e8res", "Depuis 2019"];
  for (let i = 0; i < 4; i++) {
    const bx = MG + i * ((CW - 24) / 4 + 8);
    const bw = (CW - 24) / 4;
    fillRounded(doc, bx, y, bw, 35, 8, BG_LIGHT);
    doc.font("PoppinsSB").fontSize(9).fillColor(NAVY);
    doc.text(ueStats[i], bx, y + 11, { width: bw, align: "center" });
  }
  y += 55;

  textLeft(doc, "L'Universidad Europea dispose de campus \u00e0 Madrid, M\u00e1laga, Valence, Alicante et aux Canaries. Elle offre la gamme la plus compl\u00e8te de formations sant\u00e9 en Espagne avec des dipl\u00f4mes reconnus dans toute l'UE.", MG, y, "Poppins", 11, TEXT_DARK);
  y = doc.y + 20;

  // Highlights
  const ueHL = [
    "Campus modernes avec \u00e9quipements de pointe",
    "Stages cliniques d\u00e8s la 1\u00e8re ann\u00e9e",
    "Cours en espagnol (kin\u00e9 Madrid : fran\u00e7ais possible)",
    "Pr\u00e9pa dentaire \u00e0 Alicante pour les profils non scientifiques",
  ];
  for (const h of ueHL) {
    textLeft(doc, `\u2022  ${h}`, MG + 10, y, "Poppins", 10, TEXT_DARK, CW - 20);
    y = doc.y + 6;
  }
  y += 10;

  // Photo
  addPhoto(doc, "campus.jpg", MG, y, CW, 190);
  y += 210;

  // PE Test box
  fillRounded(doc, MG, y, CW, 90, 10, BG_WARM);
  doc.save().roundedRect(MG, y, 4, 90, 2).fill(ORANGE).restore();
  textLeft(doc, "Le test PE (Prueba Espec\u00edfica)", MG + 20, y + 12, "PoppinsB", 14, NAVY, CW - 40);
  textLeft(doc, "4 \u00e9preuves : Biologie, Chimie, Physique/Maths et Raisonnement. Edumove vous pr\u00e9pare avec des cours illimit\u00e9s, des examens blancs et un suivi personnalis\u00e9. Note minimale requise selon la fili\u00e8re (13 \u00e0 17/20).", MG + 20, y + 36, "Poppins", 9.5, TEXT_DARK, CW - 40);

  pageNumber(doc, 4);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 5 — UNIVERSIDAD EUROPEA (programmes & admission)
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  fillRect(doc, 0, 0, PW, 50, NAVY);
  textCenter(doc, "UNIVERSIDAD EUROPEA \u2014 Programmes & Tarifs", 16, "PoppinsB", 15, WHITE);

  y = 70;

  // Table header
  fillRect(doc, MG, y, CW, 30, NAVY);
  doc.font("PoppinsSB").fontSize(8.5).fillColor(WHITE);
  doc.text("Programme", MG + 8, y + 9, { width: 105 });
  doc.text("Campus", MG + 118, y + 9, { width: 85 });
  doc.text("Dur\u00e9e", MG + 210, y + 9, { width: 50 });
  doc.text("Tarif/an", MG + 268, y + 9, { width: 72 });
  doc.text("Note min.", MG + 348, y + 9, { width: 55 });
  doc.text("Admission", MG + 408, y + 9, { width: 80 });
  y += 30;

  const ueRows = [
    ["M\u00e9decine", "Madrid, Canaries", "6 ans", "21 480 \u20ac", "16-17/20", "Test PE"],
    ["Dentaire", "Madrid", "5 ans", "20 820 \u20ac", "15-16/20", "Test PE"],
    ["Dentaire", "M\u00e1laga", "5 ans", "19 200 \u20ac", "15-16/20", "Test PE"],
    ["Dentaire", "Valence", "5 ans", "20 821 \u20ac", "15-16/20", "Test PE"],
    ["Kin\u00e9sith\u00e9rapie", "Madrid (FR)", "4 ans", "10 020 \u20ac", "13-14/20", "Test PE"],
    ["Kin\u00e9sith\u00e9rapie", "Autres", "4 ans", "10 020 \u20ac", "13-14/20", "Dossier"],
    ["Pharmacie", "Madrid", "5 ans", "12 120 \u20ac", "\u2014", "Dossier"],
    ["V\u00e9t\u00e9rinaire", "Madrid", "5 ans", "19 500 \u20ac", "14-15/20", "Test PE"],
    ["Pr\u00e9pa Dentaire", "Alicante", "1+5 ans", "17 000 \u20ac", "\u2014", "Aucun test"],
  ];

  for (let i = 0; i < ueRows.length; i++) {
    const r = ueRows[i];
    fillRect(doc, MG, y, CW, 26, i % 2 === 0 ? BG_LIGHT : WHITE);
    doc.font("PoppinsSB").fontSize(8).fillColor(NAVY).text(r[0], MG + 8, y + 7, { width: 105 });
    doc.font("Poppins").fontSize(8).fillColor(TEXT_DARK).text(r[1], MG + 118, y + 7, { width: 85 });
    doc.font("Poppins").fillColor(TEXT_DARK).text(r[2], MG + 210, y + 7, { width: 50 });
    doc.font("PoppinsSB").fillColor(ORANGE).text(r[3], MG + 268, y + 7, { width: 72 });
    doc.font("Poppins").fillColor(TEXT_MED).text(r[4], MG + 348, y + 7, { width: 55 });
    doc.font("PoppinsSB").fillColor(VIOLET).text(r[5], MG + 408, y + 7, { width: 80 });
    y += 26;
  }
  y += 30;

  // Admission steps
  textLeft(doc, "Processus d'admission", MG, y, "PoppinsB", 18, NAVY);
  y = doc.y + 18;

  const ueAdm = [
    ["1", "Candidature", "Bulletins scolaires + pi\u00e8ce d'identit\u00e9"],
    ["2", "Paiement du test", "Inscription aux \u00e9preuves du test PE"],
    ["3", "Test PE", "4 \u00e9preuves (en ligne ou en pr\u00e9sentiel)"],
    ["4", "R\u00e9sultats", "R\u00e9sultats sous 48h par email"],
    ["5", "Acompte", "2 500 \u20ac de d\u00e9p\u00f4t apr\u00e8s admission"],
  ];

  for (let i = 0; i < ueAdm.length; i++) {
    const sy = y + i * 46;
    if (i < 4) {
      doc.save().moveTo(MG + 14, sy + 28).lineTo(MG + 14, sy + 46).lineWidth(1.5).strokeColor(BORDER).stroke().restore();
    }
    fillCircle(doc, MG + 14, sy + 14, 14, ORANGE);
    doc.font("PoppinsB").fontSize(9).fillColor(WHITE).text(ueAdm[i][0], MG + 5, sy + 9, { width: 18, align: "center" });
    textLeft(doc, ueAdm[i][1], MG + 40, sy + 3, "PoppinsSB", 11, NAVY, CW - 50);
    textLeft(doc, ueAdm[i][2], MG + 40, sy + 19, "Poppins", 9, TEXT_MED, CW - 50);
  }

  pageNumber(doc, 5);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 6 — LINK CAMPUS (vue d'ensemble)
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  fillRect(doc, 0, 0, PW, 120, VIOLET);
  drawLogo(doc, MG + 30, 60, 44, VIOLET_LIGHT, WHITE);
  textLeft(doc, "LINK CAMPUS UNIVERSITY", MG + 62, 25, "PoppinsB", 24, WHITE, CW - 70);
  textLeft(doc, "Rome, Italie  |  Test 100% en fran\u00e7ais, aucun pr\u00e9requis", MG + 62, 60, "Poppins", 10, WHITE, CW - 70, 0.75);

  y = 145;

  const linkStats = ["+150 \u00e9tudiants", "1 campus", "4 fili\u00e8res", "Depuis 2020"];
  for (let i = 0; i < 4; i++) {
    const bx = MG + i * ((CW - 24) / 4 + 8);
    const bw = (CW - 24) / 4;
    fillRounded(doc, bx, y, bw, 35, 8, BG_LIGHT);
    doc.font("PoppinsSB").fontSize(9).fillColor(VIOLET);
    doc.text(linkStats[i], bx, y + 11, { width: bw, align: "center" });
  }
  y += 55;

  textLeft(doc, "LINK Campus University est situ\u00e9e en plein c\u0153ur de Rome. Son test d'admission en fran\u00e7ais (QCM de 5 mati\u00e8res) la rend particuli\u00e8rement accessible aux \u00e9tudiants francophones.", MG, y, "Poppins", 11, TEXT_DARK);
  y = doc.y + 20;

  const linkHL = [
    "Test d'admission QCM 100% en fran\u00e7ais",
    "Aucun besoin de parler italien \u2014 cours intensif en 1\u00e8re ann\u00e9e",
    "5 mati\u00e8res : Bio, Chimie, Physique, Maths, Culture g\u00e9n\u00e9rale",
    "Test organis\u00e9 \u00e0 Paris  |  Co\u00fbt du test : 200 \u20ac",
  ];
  for (const h of linkHL) {
    textLeft(doc, `\u2022  ${h}`, MG + 10, y, "Poppins", 10, TEXT_DARK, CW - 20);
    y = doc.y + 6;
  }
  y += 10;

  addPhoto(doc, "medecin.jpg", MG, y, CW, 190);
  y += 210;

  fillRounded(doc, MG, y, CW, 80, 10, BG_VIOLET);
  doc.save().roundedRect(MG, y, 4, 80, 2).fill(VIOLET).restore();
  textLeft(doc, "Pourquoi choisir LINK Campus ?", MG + 20, y + 12, "PoppinsB", 13, NAVY, CW - 40);
  textLeft(doc, "L'option id\u00e9ale pour supprimer la barri\u00e8re linguistique. Le QCM en fran\u00e7ais ouvre les portes de la m\u00e9decine en Italie sans pr\u00e9requis en langue \u00e9trang\u00e8re.", MG + 20, y + 34, "Poppins", 9.5, TEXT_DARK, CW - 40);

  pageNumber(doc, 6);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 7 — LINK CAMPUS (programmes & admission)
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  fillRect(doc, 0, 0, PW, 50, VIOLET);
  textCenter(doc, "LINK CAMPUS \u2014 Programmes & Tarifs", 16, "PoppinsB", 15, WHITE);

  y = 70;

  fillRect(doc, MG, y, CW, 30, VIOLET);
  doc.font("PoppinsSB").fontSize(9).fillColor(WHITE);
  doc.text("Programme", MG + 10, y + 9, { width: 150 });
  doc.text("Dur\u00e9e", MG + 175, y + 9, { width: 70 });
  doc.text("Tarif/an", MG + 260, y + 9, { width: 100 });
  doc.text("Co\u00fbt total", MG + 375, y + 9, { width: 100 });
  y += 30;

  const linkRows = [
    ["M\u00e9decine", "6 ans", "19 800 \u20ac", "118 800 \u20ac"],
    ["Dentaire", "6 ans", "19 800 \u20ac", "118 800 \u20ac"],
    ["Kin\u00e9sith\u00e9rapie", "3 ans", "11 900 \u20ac", "35 700 \u20ac"],
    ["Pharmacie (sur dossier)", "5 ans", "7 900 \u20ac", "39 500 \u20ac"],
  ];

  for (let i = 0; i < linkRows.length; i++) {
    const r = linkRows[i];
    fillRect(doc, MG, y, CW, 30, i % 2 === 0 ? BG_LIGHT : WHITE);
    doc.font("PoppinsSB").fontSize(10).fillColor(NAVY).text(r[0], MG + 10, y + 9, { width: 150 });
    doc.font("Poppins").fontSize(10).fillColor(TEXT_DARK).text(r[1], MG + 175, y + 9, { width: 70 });
    doc.font("PoppinsSB").fillColor(ORANGE).text(r[2], MG + 260, y + 9, { width: 100 });
    doc.font("PoppinsB").fillColor(NAVY).text(r[3], MG + 375, y + 9, { width: 100 });
    y += 30;
  }
  y += 35;

  textLeft(doc, "Processus d'admission", MG, y, "PoppinsB", 18, NAVY);
  y = doc.y + 18;

  const linkAdm = [
    ["1", "Candidature", "Formulaire en ligne + pi\u00e8ce d'identit\u00e9"],
    ["2", "Paiement du test", "200 \u20ac de frais d'inscription au QCM"],
    ["3", "Test \u00e0 Paris", "QCM en fran\u00e7ais sur 5 mati\u00e8res"],
    ["4", "R\u00e9sultats", "R\u00e9ponse sous quelques jours"],
    ["5", "Inscription", "Validation + 1er versement"],
  ];

  for (let i = 0; i < linkAdm.length; i++) {
    const sy = y + i * 46;
    if (i < 4) {
      doc.save().moveTo(MG + 14, sy + 28).lineTo(MG + 14, sy + 46).lineWidth(1.5).strokeColor(BORDER).stroke().restore();
    }
    fillCircle(doc, MG + 14, sy + 14, 14, VIOLET);
    doc.font("PoppinsB").fontSize(9).fillColor(WHITE).text(linkAdm[i][0], MG + 5, sy + 9, { width: 18, align: "center" });
    textLeft(doc, linkAdm[i][1], MG + 40, sy + 3, "PoppinsSB", 11, NAVY, CW - 50);
    textLeft(doc, linkAdm[i][2], MG + 40, sy + 19, "Poppins", 9, TEXT_MED, CW - 50);
  }
  y += 5 * 46 + 30;

  // Info box
  fillRounded(doc, MG, y, CW, 55, 10, BG_VIOLET);
  doc.save().roundedRect(MG, y, 4, 55, 2).fill(VIOLET).restore();
  textLeft(doc, "Pharmacie sur dossier uniquement (pas de test). C'est l'option la moins ch\u00e8re pour la pharmacie en Europe : 7 900 \u20ac/an.", MG + 20, y + 18, "PoppinsSB", 10, NAVY, CW - 40);
  y += 75;

  addPhoto(doc, "etudiant-laptop.jpg", MG, y, CW, 170);

  pageNumber(doc, 7);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 8 — UCJC (vue d'ensemble)
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  fillRect(doc, 0, 0, PW, 120, NAVY);
  drawLogo(doc, MG + 30, 60, 44);
  textLeft(doc, "UCJC \u2014 CAMILO JOS\u00c9 CELA", MG + 62, 25, "PoppinsB", 24, WHITE, CW - 70);
  textLeft(doc, "Madrid, Espagne  |  Admission sur entretien uniquement", MG + 62, 60, "Poppins", 10, WHITE, CW - 70, 0.75);

  y = 145;

  const ucjcStats = ["+80 \u00e9tudiants", "1 campus", "3 fili\u00e8res", "Depuis 2021"];
  for (let i = 0; i < 4; i++) {
    const bx = MG + i * ((CW - 24) / 4 + 8);
    const bw = (CW - 24) / 4;
    fillRounded(doc, bx, y, bw, 35, 8, BG_LIGHT);
    doc.font("PoppinsSB").fontSize(9).fillColor(NAVY);
    doc.text(ucjcStats[i], bx, y + 11, { width: bw, align: "center" });
  }
  y += 55;

  textLeft(doc, "L'Universidad Camilo Jos\u00e9 Cela (UCJC) est une universit\u00e9 priv\u00e9e \u00e0 Madrid. Son admission se fait uniquement sur entretien \u2014 aucun test \u00e9crit requis. C'est l'option la plus accessible.", MG, y, "Poppins", 11, TEXT_DARK);
  y = doc.y + 20;

  const ucjcHL = [
    "Admission sur entretien uniquement \u2014 pas de test \u00e9crit",
    "Entretien en visio ou sur place (motivation & projet)",
    "Campus moderne \u00e0 Madrid avec stages d\u00e8s la 1\u00e8re ann\u00e9e",
    "Option kin\u00e9 la moins ch\u00e8re d'Europe : 9 420 \u20ac/an",
    "Attestation d'espagnol appr\u00e9ci\u00e9e (e-learning accept\u00e9)",
  ];
  for (const h of ucjcHL) {
    textLeft(doc, `\u2022  ${h}`, MG + 10, y, "Poppins", 10, TEXT_DARK, CW - 20);
    y = doc.y + 6;
  }
  y += 10;

  addPhoto(doc, "etudiants-groupe.jpg", MG, y, CW, 190);
  y += 210;

  fillRounded(doc, MG, y, CW, 70, 10, BG_WARM);
  doc.save().roundedRect(MG, y, 4, 70, 2).fill(ORANGE).restore();
  textLeft(doc, "Pourquoi choisir l'UCJC ?", MG + 20, y + 10, "PoppinsB", 13, NAVY, CW - 40);
  textLeft(doc, "Aucun test d'entr\u00e9e. L'entretien est centr\u00e9 sur la motivation et les objectifs de carri\u00e8re. M\u00e9decine compl\u00e8te pour 2026-2027.", MG + 20, y + 32, "Poppins", 9.5, TEXT_DARK, CW - 40);

  pageNumber(doc, 8);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 9 — UCJC (programmes & admission)
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  fillRect(doc, 0, 0, PW, 50, NAVY);
  textCenter(doc, "UCJC \u2014 Programmes & Tarifs", 16, "PoppinsB", 15, WHITE);

  y = 70;

  fillRect(doc, MG, y, CW, 30, NAVY);
  doc.font("PoppinsSB").fontSize(9).fillColor(WHITE);
  doc.text("Programme", MG + 10, y + 9, { width: 150 });
  doc.text("Dur\u00e9e", MG + 175, y + 9, { width: 70 });
  doc.text("Tarif/an", MG + 260, y + 9, { width: 100 });
  doc.text("Co\u00fbt total", MG + 375, y + 9, { width: 100 });
  y += 30;

  const ucjcRows: [string, string, string, string, boolean][] = [
    ["M\u00e9decine", "\u2014", "COMPLET", "2026-2027", true],
    ["Dentaire", "5 ans", "18 420 \u20ac", "92 100 \u20ac", false],
    ["Pharmacie", "5 ans", "10 140 \u20ac", "50 700 \u20ac", false],
    ["Kin\u00e9sith\u00e9rapie", "4 ans", "9 420 \u20ac", "37 680 \u20ac", false],
  ];

  for (let i = 0; i < ucjcRows.length; i++) {
    const r = ucjcRows[i];
    const full = r[4];
    fillRect(doc, MG, y, CW, 30, i % 2 === 0 ? BG_LIGHT : WHITE);
    doc.font("PoppinsSB").fontSize(10).fillColor(full ? TEXT_SOFT : NAVY).text(r[0], MG + 10, y + 9, { width: 150 });
    doc.font("Poppins").fontSize(10).fillColor(full ? TEXT_SOFT : TEXT_DARK).text(r[1], MG + 175, y + 9, { width: 70 });
    doc.font("PoppinsSB").fillColor(full ? TEXT_SOFT : ORANGE).text(r[2], MG + 260, y + 9, { width: 100 });
    doc.font(full ? "Poppins" : "PoppinsB").fillColor(full ? TEXT_SOFT : NAVY).text(r[3], MG + 375, y + 9, { width: 100 });
    y += 30;
  }
  y += 35;

  textLeft(doc, "Processus d'admission", MG, y, "PoppinsB", 18, NAVY);
  y = doc.y + 18;

  const ucjcAdm = [
    ["1", "Candidature", "Formulaire + lettre de motivation + pi\u00e8ce d'identit\u00e9"],
    ["2", "Entretien", "En visio ou sur place (motivation & projet)"],
    ["3", "R\u00e9sultats", "R\u00e9ponse sous 1 semaine"],
    ["4", "Paiement", "1 semaine pour le 1er versement"],
    ["5", "Inscription", "Validation des dipl\u00f4mes + inscription d\u00e9finitive"],
  ];

  for (let i = 0; i < ucjcAdm.length; i++) {
    const sy = y + i * 46;
    if (i < 4) {
      doc.save().moveTo(MG + 14, sy + 28).lineTo(MG + 14, sy + 46).lineWidth(1.5).strokeColor(BORDER).stroke().restore();
    }
    fillCircle(doc, MG + 14, sy + 14, 14, ORANGE);
    doc.font("PoppinsB").fontSize(9).fillColor(WHITE).text(ucjcAdm[i][0], MG + 5, sy + 9, { width: 18, align: "center" });
    textLeft(doc, ucjcAdm[i][1], MG + 40, sy + 3, "PoppinsSB", 11, NAVY, CW - 50);
    textLeft(doc, ucjcAdm[i][2], MG + 40, sy + 19, "Poppins", 9, TEXT_MED, CW - 50);
  }
  y += 5 * 46 + 30;

  // Comparatif
  fillRounded(doc, MG, y, CW, 110, 10, BG_LIGHT);
  textLeft(doc, "Comparatif \u2014 Option la moins ch\u00e8re par fili\u00e8re", MG + 18, y + 12, "PoppinsB", 12, NAVY, CW - 36);
  const comp = [
    ["M\u00e9decine", "LINK \u2014 19 800 \u20ac/an"],
    ["Dentaire", "UCJC \u2014 18 420 \u20ac/an"],
    ["Kin\u00e9sith\u00e9rapie", "UCJC \u2014 9 420 \u20ac/an"],
    ["Pharmacie", "LINK \u2014 7 900 \u20ac/an"],
    ["V\u00e9t\u00e9rinaire", "UE \u2014 19 500 \u20ac/an"],
  ];
  for (let i = 0; i < comp.length; i++) {
    const cy2 = y + 35 + i * 14;
    doc.font("PoppinsSB").fontSize(8.5).fillColor(NAVY).text(comp[i][0], MG + 18, cy2, { width: 120 });
    doc.font("Poppins").fontSize(8.5).fillColor(ORANGE).text(comp[i][1], MG + 150, cy2, { width: 280 });
  }

  pageNumber(doc, 9);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 10 — PROCESS EN 5 ÉTAPES
  // ══════════════════════════════════════════════════════════════
  newPage(doc);

  y = sectionTitle(doc, "Comment \u00e7a marche", "Votre parcours en 5 \u00e9tapes", MG);

  const steps = [
    { num: "01", title: "Premier \u00e9change gratuit", desc: "Un conseiller Edumove analyse votre profil, vos ambitions et vous oriente vers les formations adapt\u00e9es. Appel sans engagement." },
    { num: "02", title: "Constitution du dossier", desc: "On pr\u00e9pare un dossier solide : bulletins, lettre de motivation, documents administratifs. Tout est v\u00e9rifi\u00e9 et optimis\u00e9." },
    { num: "03", title: "Candidature & test d'admission", desc: "Envoi des candidatures et pr\u00e9paration compl\u00e8te aux tests (test PE, QCM LINK, entretien UCJC)." },
    { num: "04", title: "Admission & financement", desc: "R\u00e9ponse de l'universit\u00e9, financement avec LCL (\u00e0 partir de 75 000 \u20ac). Vous ne payez rien avant d'\u00eatre dipl\u00f4m\u00e9." },
    { num: "05", title: "Installation & suivi", desc: "Logement, d\u00e9marches administratives, assurance, accompagnement continu apr\u00e8s votre arriv\u00e9e." },
  ];

  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    const sy = y + i * 118;
    if (i < 4) {
      doc.save().moveTo(MG + 25, sy + 50).lineTo(MG + 25, sy + 118).lineWidth(2).strokeColor(BORDER).stroke().restore();
    }
    fillCircle(doc, MG + 25, sy + 25, 24, ORANGE);
    doc.font("PoppinsB").fontSize(15).fillColor(WHITE).text(s.num, MG + 6, sy + 16, { width: 38, align: "center" });
    textLeft(doc, s.title, MG + 68, sy + 6, "PoppinsB", 15, NAVY, CW - 85);
    textLeft(doc, s.desc, MG + 68, sy + 30, "Poppins", 10, TEXT_DARK, CW - 85);
  }

  // Financing banner
  y += 5 * 118 + 15;
  fillRounded(doc, MG, y, CW, 70, 12, ORANGE);
  textCenter(doc, "Financement garanti \u00e0 partir de 75 000 \u20ac avec LCL", y + 15, "PoppinsB", 16, WHITE);
  textCenter(doc, "Remboursement uniquement une fois dipl\u00f4m\u00e9 et en poste. 0 \u20ac \u00e0 avancer.", y + 42, "Poppins", 10, WHITE, 0.85);

  pageNumber(doc, 10);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 11 — TÉMOIGNAGES
  // ══════════════════════════════════════════════════════════════
  newPage(doc, BG_LIGHT);

  y = sectionTitle(doc, "T\u00e9moignages", "Ils nous ont fait confiance", MG);

  const testi = [
    { name: "Marie D.", ctx: "Parent d'\u00e9tudiant en dentaire, Madrid", quote: "Le conseiller nous a tout expliqu\u00e9, g\u00e9r\u00e9 le dossier, trouv\u00e9 l'appart\u2026 Notre fils est en 2e ann\u00e9e de dentaire et il adore. On referait ce choix sans h\u00e9siter.", color: VIOLET },
    { name: "Lucas P.", ctx: "3e ann\u00e9e de m\u00e9decine, Rome", quote: "J'avais 12 de moyenne au bac, en France c'\u00e9tait mort pour m\u00e9decine. \u00c7a fait 3 ans que je suis \u00e0 Rome, je bosse dur mais j'adore ce que je fais.", color: ORANGE },
    { name: "Sophie M.", ctx: "M\u00e8re d'une \u00e9tudiante en pharmacie", quote: "La question du financement nous bloquait. Ils nous ont mis en relation avec LCL, le pr\u00eat a \u00e9t\u00e9 accept\u00e9 en 3 semaines. Notre fille ne remboursera qu'une fois en poste.", color: VIOLET },
    { name: "Thomas R.", ctx: "\u00c9tudiant en kin\u00e9 \u00e0 l'UCJC, Madrid", quote: "La formation est top, les stages commencent t\u00f4t et Madrid c'est une ville g\u00e9niale pour un \u00e9tudiant. Maintenant que je suis \u00e0 l'UCJC depuis 2 ans, je vois la diff\u00e9rence.", color: ORANGE },
    { name: "L\u00e9a B.", ctx: "2e ann\u00e9e de m\u00e9decine, Madrid", quote: "Deux tentatives en PASS, deux \u00e9checs. 3 mois apr\u00e8s mon appel \u00e0 Edumove, j'\u00e9tais inscrite \u00e0 l'Universidad Europea. Mes notes sont bonnes, j'y crois enfin.", color: VIOLET },
  ];

  const tcW = (CW - 20) / 2;
  for (let i = 0; i < 4; i++) {
    const t = testi[i];
    const col = i % 2;
    const row = Math.floor(i / 2);
    const tx = MG + col * (tcW + 20);
    const ty = y + row * 200;

    fillRounded(doc, tx, ty, tcW, 185, 10, WHITE);
    doc.save().roundedRect(tx, ty, tcW, 4, 2).fill(t.color).restore();

    // Initials
    fillCircle(doc, tx + 26, ty + 30, 15, t.color);
    const init = t.name.split(" ").map(w => w[0]).join("");
    doc.font("PoppinsB").fontSize(10).fillColor(WHITE).text(init, tx + 15, ty + 25, { width: 22, align: "center" });

    textLeft(doc, t.name, tx + 50, ty + 18, "PoppinsB", 11, NAVY, tcW - 65);
    textLeft(doc, t.ctx, tx + 50, ty + 34, "Poppins", 8, TEXT_MED, tcW - 65);

    textLeft(doc, `\u00ab ${t.quote} \u00bb`, tx + 16, ty + 60, "Poppins", 9, TEXT_DARK, tcW - 32);
  }

  // 5th testimonial centered
  const t5 = testi[4];
  const t5y = y + 2 * 200 + 10;
  fillRounded(doc, MG, t5y, CW, 120, 10, WHITE);
  doc.save().roundedRect(MG, t5y, CW, 4, 2).fill(t5.color).restore();
  fillCircle(doc, MG + 26, t5y + 30, 15, t5.color);
  doc.font("PoppinsB").fontSize(10).fillColor(WHITE).text("LB", MG + 15, t5y + 25, { width: 22, align: "center" });
  textLeft(doc, t5.name, MG + 50, t5y + 18, "PoppinsB", 11, NAVY, CW - 65);
  textLeft(doc, t5.ctx, MG + 50, t5y + 34, "Poppins", 8, TEXT_MED, CW - 65);
  textLeft(doc, `\u00ab ${t5.quote} \u00bb`, MG + 16, t5y + 60, "Poppins", 9, TEXT_DARK, CW - 32);

  pageNumber(doc, 11);

  // ══════════════════════════════════════════════════════════════
  //  PAGE 12 — CONTACT / CTA
  // ══════════════════════════════════════════════════════════════
  newPage(doc, NAVY);

  fillCircle(doc, 80, 130, 90, NAVY_LIGHT);
  fillCircle(doc, PW - 90, PH - 200, 110, NAVY_LIGHT);

  drawLogo(doc, PW / 2, 200, 90);

  textCenter(doc, "Pr\u00eat \u00e0 commencer ?", 300, "PoppinsB", 34, WHITE);
  textCenter(doc, "Votre projet d'\u00e9tudes en Europe commence ici.", 345, "Poppins", 13, WHITE, 0.75);

  // CTA
  fillRounded(doc, PW / 2 - 150, 400, 300, 55, 14, ORANGE);
  textCenter(doc, "D\u00e9poser ma candidature", 410, "PoppinsB", 17, WHITE);
  textCenter(doc, "candidature.edumove.fr", 432, "Poppins", 10, WHITE, 0.8);

  y = 490;
  const contactInfo = [
    "www.edumove.fr",
    "+33 1 89 74 42 57",
    "R\u00e9ponse sous 2h (8h-20h)",
  ];
  for (const c of contactInfo) {
    textCenter(doc, c, y, "Poppins", 11, WHITE, 0.7);
    y += 24;
  }

  // Divider
  doc.save().moveTo(PW / 2 - 40, y + 5).lineTo(PW / 2 + 40, y + 5).lineWidth(1).strokeColor(BORDER).stroke().restore();
  y += 30;

  const bullets = [
    "Accompagnement personnalis\u00e9 de A \u00e0 Z",
    "Financement jusqu'\u00e0 100% avec LCL",
    "Dipl\u00f4mes reconnus dans toute l'UE",
    "500+ \u00e9tudiants d\u00e9j\u00e0 accompagn\u00e9s",
  ];
  for (const b of bullets) {
    textCenter(doc, `\u2022  ${b}`, y, "Poppins", 10, WHITE, 0.55);
    y += 20;
  }

  // Legal
  textCenter(doc, "Edumove SAS \u2014 Tous droits r\u00e9serv\u00e9s 2026", PH - 50, "Poppins", 7.5, WHITE, 0.35);
  textCenter(doc, "edumove.fr", PH - 36, "PoppinsSB", 9, ORANGE);

  pageNumber(doc, 12);

  // ─── FINALIZE ───
  doc.end();
  stream.on("finish", () => {
    console.log("\n\u2705 Brochure g\u00e9n\u00e9r\u00e9e !");
    console.log(`\ud83d\udcc4 ${OUTPUT}`);
    console.log("\ud83d\udcd0 12 pages A4");
  });
}

generate();
