import { NextRequest, NextResponse } from "next/server";

const INTERNAL_LINKS = `
LIENS INTERNES DISPONIBLES (utilise-les dans le contenu via des balises <a href="...">texte</a> dans les paragraphes et callouts) :

FORMATIONS :
- /formations/medecine — Études de Médecine en Europe
- /formations/dentaire — Études Dentaires en Europe
- /formations/kinesitherapie — Faire Kiné en Europe
- /formations/pharmacie — Études de Pharmacie en Europe
- /formations/veterinaire — Études Vétérinaires en Europe

FORMATIONS PAR PAYS :
- /formations/medecine/espagne — Études de Médecine en Espagne
- /formations/dentaire/espagne — Études Dentaires en Espagne
- /formations/kinesitherapie/espagne — Faire Kiné en Espagne
- /formations/pharmacie/espagne — Études de Pharmacie en Espagne
- /formations/veterinaire/espagne — Études Vétérinaires en Espagne
- /formations/medecine/italie — Études de Médecine en Italie
- /formations/dentaire/italie — Études Dentaires en Italie
- /formations/kinesitherapie/italie — Faire Kiné en Italie
- /formations/pharmacie/italie — Études de Pharmacie en Italie

UNIVERSITÉS :
- /universites/universidad-europea — Universidad Europea (5 campus en Espagne)
- /universites/ucjc — UCJC Madrid (admission sur entretien)
- /universites/link-campus — LINK Campus University (Rome, test QCM en français)

VIE ÉTUDIANTE :
- /vie-etudiante/madrid — Vie étudiante à Madrid
- /vie-etudiante/rome — Vie étudiante à Rome
- /vie-etudiante/valence — Vie étudiante à Valence
- /vie-etudiante/malaga — Vie étudiante à Malaga

AUTRES :
- /financement — Financement études (prêt LCL jusqu'à 75 000€, remboursement après diplôme)
- /temoignages — Avis et témoignages étudiants/parents
- /questions-frequentes — FAQ
- /blog/echec-pass-alternatives — Échec au PASS : les alternatives
- /blog/cout-etudes-sante-europe — Coût des études de santé en Europe
- /blog/reconnaissance-diplomes-europeens — Reconnaissance des diplômes européens
- /guides/reussir-test-pe-universidad-europea — Guide test PE
`;

export async function POST(req: NextRequest) {
  try {
    const { title, focusKeyword, tag } = await req.json();

    if (!title) {
      return NextResponse.json({ error: "Le titre est requis" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Clé API Anthropic manquante. Ajoutez ANTHROPIC_API_KEY dans .env.local" }, { status: 500 });
    }

    const prompt = `Tu es un rédacteur SEO expert pour Edumove, un organisme qui accompagne les étudiants français dans leurs études de santé en Europe (Espagne et Italie). Tu rédiges des articles de blog en français.

CONTEXTE EDUMOVE :
- Universités partenaires : Universidad Europea (5 campus en Espagne), UCJC Madrid, LINK Campus (Rome)
- Filières : médecine, dentaire, kinésithérapie, pharmacie, vétérinaire
- Partenariat LCL pour financement jusqu'à 75 000€ avec remboursement différé après diplôme
- Pas de concours PASS/LAS, admission sur test PE ou entretien
- Diplômes reconnus dans toute l'UE (directive 2005/36/CE)

${INTERNAL_LINKS}

CONSIGNES DE RÉDACTION :
- Ton conversationnel et direct (tutoiement OK parfois), PAS corporate
- Utilise des données chiffrées réelles (prix, durées, etc.)
- Intègre MINIMUM 10 liens internes dans les paragraphes via des balises <a> HTML
- Les liens doivent être naturels et pertinents dans le contexte
- Pas de phrases type IA ("il est important de noter", "dans un monde en constante évolution")

TITRE DE L'ARTICLE : "${title}"
${focusKeyword ? `MOT-CLÉ FOCUS : "${focusKeyword}"` : ""}
${tag ? `CATÉGORIE : "${tag}"` : ""}

Génère un article complet au format JSON. Réponds UNIQUEMENT avec le JSON brut, sans texte avant/après.

{
  "slug": "slug-url",
  "metaTitle": "Titre SEO 50-60 chars",
  "metaDescription": "Description 140-155 chars",
  "excerpt": "Résumé 1-2 phrases",
  "readTime": "X min",
  "relatedFormations": ["medecine", ...],
  "relatedUniversities": ["/universites/universidad-europea", ...],
  "relatedSlugs": ["echec-pass-alternatives", ...],
  "heroPills": [{"icon": "GraduationCap", "label": "Label"}],
  "sections": [
    {"type": "heading", "level": "h2", "text": "Titre section"},
    {"type": "paragraph", "html": "Texte avec <a href=\\"/formations/medecine\\">lien</a>."},
    {"type": "callout", "variant": "info", "html": "Info avec <a href=\\"/financement\\">lien</a>."},
    {"type": "list", "style": "bullet", "items": ["Item 1", "Item 2"]},
    {"type": "grid", "columns": 2, "items": [{"title": "T", "description": "D"}]},
    {"type": "faq", "items": [{"question": "Q?", "answer": "R."}]},
    {"type": "link-card", "title": "T", "description": "D", "href": "/formations/medecine"}
  ]
}

6-8 sections H2, 15+ paragraphes, 1-2 callouts, 1 FAQ avec 4-5 questions, 2-3 link-cards, MINIMUM 10 liens <a href> internes.`;

    // Direct fetch to Anthropic API (no SDK)
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        error: `API Anthropic: ${data?.error?.message || response.statusText}`,
      }, { status: response.status });
    }

    const text = data.content?.[0]?.type === "text" ? data.content[0].text : "";

    // Parse the JSON response
    let article;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      article = JSON.parse(jsonMatch ? jsonMatch[0] : text);
    } catch {
      return NextResponse.json({ error: "Erreur de parsing JSON", raw: text.substring(0, 500) }, { status: 500 });
    }

    return NextResponse.json({ success: true, article });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
