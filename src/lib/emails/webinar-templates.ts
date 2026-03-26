const ZOOM_LINK = "https://us02web.zoom.us/j/83013598154";
const WEBINAR_DATE = "Mercredi 15 avril 2026";
const WEBINAR_TIME = "18h30";
const WEBINAR_DURATION = "45 minutes";

function baseTemplate(content: string) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Edumove — Webinaire</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

<!-- Header -->
<tr>
<td style="background-color:#1B1D3A;padding:28px 32px;text-align:center;">
<img src="https://www.edumove.fr/edumove-logo.svg" alt="Edumove" width="140" style="display:inline-block;filter:brightness(0) invert(1);" />
</td>
</tr>

<!-- Content -->
<tr>
<td style="padding:32px;">
${content}
</td>
</tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function ctaButton(text: string, url: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto;">
<tr>
<td style="background-color:#EC680A;border-radius:8px;">
<a href="${url}" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;text-align:center;">${text}</a>
</td>
</tr>
</table>`;
}

function eventInfoBlock() {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:20px 0;">
<tr>
<td style="padding:20px;">
<p style="margin:0 0 8px;font-size:13px;color:#64748b;">📅 <strong style="color:#1B1D3A;">${WEBINAR_DATE}</strong> à <strong style="color:#1B1D3A;">${WEBINAR_TIME}</strong></p>
<p style="margin:0 0 8px;font-size:13px;color:#64748b;">⏱️ Durée : ${WEBINAR_DURATION}</p>
<p style="margin:0;font-size:13px;color:#64748b;">💻 En ligne via Zoom</p>
</td>
</tr>
</table>`;
}

// ═══════════════════════════════════════════
// 1. EMAIL DE CONFIRMATION (envoyé 5min après inscription)
// ═══════════════════════════════════════════
export function confirmationEmail(prenom: string) {
  return {
    subject: "Inscription confirmée — Webinaire Financement Edumove x LCL",
    html: baseTemplate(`
<h1 style="margin:0 0 20px;font-size:24px;color:#1B1D3A;font-weight:700;">Inscription confirmée ! ✅</h1>
<p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
  Bonjour ${prenom},
</p>
<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Votre inscription au webinaire <strong style="color:#1B1D3A;">"Comment financer ses études de Santé en Europe ?"</strong> est bien confirmée.
</p>
<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Avec la participation exceptionnelle du <strong>LCL</strong>, partenaire officiel d'Edumove, nous aborderons toutes les solutions pour financer vos études de santé en Europe.
</p>

${eventInfoBlock()}

<p style="margin:16px 0;font-size:15px;color:#334155;line-height:1.6;">
  Vous recevrez le lien de connexion Zoom par email le jour du webinaire. En attendant, vous pouvez ajouter l'événement à votre agenda.
</p>

${ctaButton("Découvrir nos formations", "https://www.edumove.fr/formations/medecine")}

<p style="margin:16px 0 0;font-size:13px;color:#94a3b8;text-align:center;">
  Des questions ? Répondez directement à cet email ou appelez-nous au +33 1 89 74 42 57
</p>
`),
  };
}

// ═══════════════════════════════════════════
// 2. RAPPEL J-7 (7 jours avant)
// ═══════════════════════════════════════════
export function reminderJ7Email(prenom: string) {
  return {
    subject: "J-7 — Webinaire Financement Edumove x LCL",
    html: baseTemplate(`
<h1 style="margin:0 0 20px;font-size:24px;color:#1B1D3A;font-weight:700;">Plus qu'une semaine ! 📅</h1>
<p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
  Bonjour ${prenom},
</p>
<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Le webinaire <strong style="color:#1B1D3A;">"Comment financer ses études de Santé en Europe ?"</strong> a lieu dans exactement <strong>7 jours</strong>.
</p>

${eventInfoBlock()}

<p style="margin:16px 0;font-size:15px;color:#334155;line-height:1.6;">
  <strong>Au programme :</strong>
</p>
<ul style="margin:0 0 16px;padding-left:20px;font-size:14px;color:#334155;line-height:1.8;">
  <li>Les solutions de financement (prêt LCL, bourses, aides)</li>
  <li>Le remboursement différé : comment ça marche</li>
  <li>L'accompagnement Edumove pour votre dossier</li>
  <li>Session questions / réponses en direct</li>
</ul>

<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  En attendant, découvrez notre guide complet sur le financement :
</p>

${ctaButton("Guide financement", "https://www.edumove.fr/financement")}
`),
  };
}

// ═══════════════════════════════════════════
// 3. RAPPEL J-1 (la veille)
// ═══════════════════════════════════════════
export function reminderJ1Email(prenom: string) {
  return {
    subject: "C'est demain ! — Webinaire Financement Edumove x LCL",
    html: baseTemplate(`
<h1 style="margin:0 0 20px;font-size:24px;color:#1B1D3A;font-weight:700;">C'est demain ! 🎯</h1>
<p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
  Bonjour ${prenom},
</p>
<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Le webinaire <strong style="color:#1B1D3A;">"Comment financer ses études de Santé en Europe ?"</strong> a lieu <strong>demain</strong>.
</p>

${eventInfoBlock()}

<p style="margin:16px 0;font-size:15px;color:#334155;line-height:1.6;">
  Préparez vos questions ! Un représentant du LCL et l'équipe Edumove seront là pour y répondre en direct.
</p>

<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Le lien Zoom vous sera envoyé demain matin par email.
</p>

${ctaButton("En savoir plus sur le financement", "https://www.edumove.fr/financement")}
`),
  };
}

// ═══════════════════════════════════════════
// 4. RAPPEL J-0 MATIN (le jour même à 10h)
// ═══════════════════════════════════════════
export function reminderJ0MorningEmail(prenom: string) {
  return {
    subject: "C'est ce soir à 18h30 — Voici votre lien Zoom",
    html: baseTemplate(`
<h1 style="margin:0 0 20px;font-size:24px;color:#1B1D3A;font-weight:700;">C'est ce soir ! 🚀</h1>
<p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
  Bonjour ${prenom},
</p>
<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Le webinaire <strong style="color:#1B1D3A;">"Comment financer ses études de Santé en Europe ?"</strong> a lieu <strong>ce soir à 18h30</strong>.
</p>

${eventInfoBlock()}

<p style="margin:16px 0;font-size:15px;color:#334155;line-height:1.6;">
  Voici votre lien pour rejoindre le webinaire :
</p>

${ctaButton("Rejoindre le webinaire Zoom", ZOOM_LINK)}

<p style="margin:16px 0;font-size:14px;color:#64748b;line-height:1.6;text-align:center;">
  Le lien sera actif à partir de 18h25. Connectez-vous quelques minutes en avance pour vérifier votre micro et caméra.
</p>
`),
  };
}

// ═══════════════════════════════════════════
// 5. RAPPEL J-0 18h25 (5 min avant)
// ═══════════════════════════════════════════
export function reminderJ0FiveMinEmail(prenom: string) {
  return {
    subject: "🔴 On commence dans 5 minutes !",
    html: baseTemplate(`
<h1 style="margin:0 0 20px;font-size:24px;color:#1B1D3A;font-weight:700;">On commence dans 5 minutes !</h1>
<p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
  Bonjour ${prenom},
</p>
<p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.6;">
  Le webinaire commence dans quelques minutes. Rejoignez-nous maintenant !
</p>

${ctaButton("Rejoindre maintenant", ZOOM_LINK)}

<p style="margin:16px 0;font-size:13px;color:#94a3b8;text-align:center;">
  Si le bouton ne fonctionne pas, copiez ce lien : ${ZOOM_LINK}
</p>
`),
  };
}
