// =============================================================================
// City Guides — Vie étudiante par ville
// =============================================================================

export interface CityGuide {
  slug: string;
  name: string;
  country: string;
  countryFlag: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  heroImage: string;
  universities: Array<{ name: string; shortName: string; slug: string; programs: string[] }>;
  airport: { name: string; code: string; distance: string };
  flightFromParis: string;
  flightPrice: string;
  airlines: string[];
  budget: Array<{ label: string; range: string }>;
  budgetTotal: string;
  quartiers: Array<{ name: string; desc: string; loyer: string }>;
  transports: Array<{ type: string; price: string; details: string; link?: string }>;
  bonsPlans: Array<{ title: string; desc: string; category: "manger" | "sortir" | "culture" | "sport" }>;
  highlights: string[];
  trajets: Array<{ from: string; type: "avion" | "train"; duration: string; price: string; freq: string }>;
  faq: Array<{ question: string; answer: string }>;
}

export const cityGuides: CityGuide[] = [
  // =========================================================================
  // MADRID
  // =========================================================================
  {
    slug: "madrid",
    name: "Madrid",
    country: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    h1: "Vie \u00E9tudiante \u00E0 Madrid",
    metaTitle: "Vie \u00E9tudiante \u00E0 Madrid \u2014 Guide complet | Edumove",
    metaDescription: "Tout savoir sur la vie \u00E9tudiante \u00E0 Madrid : logement, transports, bons plans, restaurants, co\u00FBt de la vie. Guide complet pour les \u00E9tudiants fran\u00E7ais en sant\u00E9.",
    intro: "Madrid est la destination n\u00B01 des \u00E9tudiants fran\u00E7ais en sant\u00E9 avec Edumove. Capitale dynamique, ensoleill\u00E9e et abordable, elle offre une qualit\u00E9 de vie exceptionnelle \u00E0 seulement 2h de Paris en avion. Deux universit\u00E9s partenaires y sont implant\u00E9es : l\u2019Universidad Europea et l\u2019UCJC.",
    heroImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1400&h=600&fit=crop&q=80",
    universities: [
      { name: "Universidad Europea", shortName: "UE", slug: "universidad-europea", programs: ["M\u00E9decine", "Dentaire", "Kin\u00E9sith\u00E9rapie", "Pharmacie", "V\u00E9t\u00E9rinaire"] },
      { name: "UCJC Madrid", shortName: "UCJC", slug: "ucjc", programs: ["Dentaire", "Kin\u00E9sith\u00E9rapie", "Pharmacie"] },
    ],
    airport: { name: "A\u00E9roport Madrid-Barajas", code: "MAD", distance: "30-40 min du centre" },
    flightFromParis: "1h50 \u00E0 2h05",
    flightPrice: "40 \u00E0 120 \u20AC A/R",
    airlines: ["Ryanair", "Vueling", "Air France", "Iberia", "easyJet"],
    budget: [
      { label: "Logement (colocation)", range: "400 \u2014 600 \u20AC" },
      { label: "Alimentation", range: "200 \u2014 300 \u20AC" },
      { label: "Transports", range: "20 \u2014 50 \u20AC" },
      { label: "Loisirs / sorties", range: "100 \u2014 150 \u20AC" },
      { label: "T\u00E9l\u00E9phone / internet", range: "15 \u2014 25 \u20AC" },
    ],
    budgetTotal: "735 \u2014 1 125 \u20AC",
    quartiers: [
      { name: "Moncloa / Arg\u00FCelles", desc: "C\u2019est l\u00E0 que tout le monde va. Juste \u00E0 c\u00F4t\u00E9 de la Ciudad Universitaria, tu tombes sur des bars \u00E0 tapas pas chers et des restos \u00E9tudiants \u00E0 chaque coin de rue. Ambiance garantie.", loyer: "400 \u2014 550 \u20AC" },
      { name: "Chamber\u00ED", desc: "Si t\u2019aimes le calme sans \u00EAtre loin de tout : Chamber\u00ED. On se croirait dans un village avec ses petits commerces et son march\u00E9, sauf que t\u2019es \u00E0 10 min en m\u00E9tro de Sol.", loyer: "450 \u2014 600 \u20AC" },
      { name: "Malasa\u00F1a / Chueca", desc: "Pour ceux qui dorment pas avant 2h du mat. Caf\u00E9s sp\u00E9 brunch, friperies, terrasses le soir\u2026 C\u2019est le quartier o\u00F9 il se passe toujours un truc. Par contre faut assumer le budget.", loyer: "500 \u2014 700 \u20AC" },
      { name: "Villaviciosa de Od\u00F3n", desc: "Le campus UE est l\u00E0. Tu paies 350 \u20AC ton loyer, t\u2019es au calme, et le Cercan\u00EDas te d\u00E9pose en centre-ville en 30 min. Beaucoup d\u2019\u00E9tudiants Edumove vivent ici la premi\u00E8re ann\u00E9e.", loyer: "350 \u2014 450 \u20AC" },
    ],
    transports: [
      { type: "M\u00E9tro + Bus", price: "20 \u20AC/mois", details: "Abono Joven (moins de 26 ans) : acc\u00E8s illimit\u00E9 m\u00E9tro, bus et Cercan\u00EDas dans toute la communaut\u00E9 de Madrid.", link: "https://www.crtm.es/billetes-y-tarifas/abono-joven.aspx" },
      { type: "V\u00E9lo (BiciMAD)", price: "25 \u20AC/an", details: "V\u00E9los \u00E9lectriques en libre-service dans tout Madrid. Tarif \u00E9tudiant avantageux.", link: "https://www.bicimad.com/" },
      { type: "Cercan\u00EDas", price: "Inclus Abono", details: "Trains de banlieue reliant Villaviciosa et les campus \u00E0 Madrid centre en 30-40 min." },
      { type: "A\u00E9roport", price: "5 \u20AC suppl.", details: "M\u00E9tro ligne 8 directe vers Barajas. Suppl\u00E9ment a\u00E9roport de 3 \u20AC en plus de l\u2019abono." },
    ],
    bonsPlans: [
      { title: "Mercado de San Miguel", desc: "March\u00E9 couvert embl\u00E9matique pr\u00E8s de la Plaza Mayor. Tapas, fruits de mer, vins \u2014 id\u00E9al pour d\u00E9couvrir la gastronomie espagnole.", category: "manger" },
      { title: "Men\u00FA del d\u00EDa", desc: "La plupart des restaurants proposent un menu du jour complet (\u00E9ntr\u00E9e + plat + dessert + boisson) pour 10-14 \u20AC. Le bon plan quotidien.", category: "manger" },
      { title: "Retiro", desc: "Le poumon vert de Madrid. 125 hectares de parc pour courir, lire, faire du bateau. Gratuit et magnifique.", category: "sport" },
      { title: "Mus\u00E9es gratuits", desc: "Le Prado, le Reina Sof\u00EDa et le Thyssen sont gratuits certains cr\u00E9neaux (soirs en semaine, dimanche apr\u00E8s-midi). Culture \u00E0 0 \u20AC.", category: "culture" },
      { title: "Terrasses de Malasa\u00F1a", desc: "Ca\u00F1as (bi\u00E8res) \u00E0 2-3 \u20AC avec tapas offertes dans de nombreux bars du quartier. La vie sociale madril\u00E8ne.", category: "sortir" },
      { title: "Casa de Campo", desc: "Le plus grand parc de Madrid avec piscine municipale en \u00E9t\u00E9 (3 \u20AC l\u2019entr\u00E9e), t\u00E9l\u00E9ph\u00E9rique et zoo.", category: "sport" },
    ],
    highlights: [
      "Co\u00FBt de la vie 15-20% inf\u00E9rieur \u00E0 Paris",
      "300 jours de soleil par an",
      "2h de vol depuis Paris, dizaines de vols quotidiens",
      "Abono Joven : transports illimit\u00E9s \u00E0 20 \u20AC/mois",
      "2 universit\u00E9s partenaires Edumove",
      "Capitale europ\u00E9enne de la vie nocturne",
    ],
    trajets: [
      { from: "Paris", type: "avion", duration: "2h00", price: "40-120 \u20AC", freq: "30+ vols/jour" },
      { from: "Lyon", type: "avion", duration: "1h50", price: "35-100 \u20AC", freq: "5-8 vols/jour" },
      { from: "Marseille", type: "avion", duration: "1h40", price: "30-90 \u20AC", freq: "3-5 vols/jour" },
      { from: "Toulouse", type: "avion", duration: "1h20", price: "30-80 \u20AC", freq: "3-5 vols/jour" },
      { from: "Bordeaux", type: "avion", duration: "1h30", price: "30-90 \u20AC", freq: "2-4 vols/jour" },
      { from: "Nantes", type: "avion", duration: "1h50", price: "35-100 \u20AC", freq: "1-3 vols/jour" },
      { from: "Nice", type: "avion", duration: "1h50", price: "35-110 \u20AC", freq: "2-4 vols/jour" },
      { from: "Lille", type: "avion", duration: "2h10", price: "45-130 \u20AC", freq: "1-2 vols/jour" },
      { from: "Strasbourg", type: "avion", duration: "2h15", price: "50-140 \u20AC", freq: "1-2 vols/jour" },
    ],
    faq: [
      { question: "Faut-il parler espagnol pour vivre \u00E0 Madrid ?", answer: "Un niveau de base suffit pour d\u00E9marrer. Madrid est une ville tr\u00E8s internationale et vous progresserez rapidement en immersion. Nos universit\u00E9s partenaires proposent des cours d\u2019espagnol en parall\u00E8le. En 3-6 mois, la plupart des \u00E9tudiants sont \u00E0 l\u2019aise au quotidien." },
      { question: "Quel budget mensuel pr\u00E9voir \u00E0 Madrid ?", answer: "Comptez entre 735 et 1 125 \u20AC par mois tout compris (loyer, alimentation, transports, loisirs). C\u2019est 15 \u00E0 20% moins cher que Paris. Le logement est le poste le plus important : 400 \u00E0 600 \u20AC en colocation." },
      { question: "Comment trouver un logement \u00E0 Madrid ?", answer: "Les sites les plus utilis\u00E9s sont Idealista, Fotocasa et les groupes Facebook d\u2019\u00E9tudiants fran\u00E7ais \u00E0 Madrid. Edumove vous accompagne aussi dans la recherche de logement avant votre arriv\u00E9e." },
      { question: "Y a-t-il beaucoup d\u2019\u00E9tudiants fran\u00E7ais \u00E0 Madrid ?", answer: "Oui, Madrid accueille une importante communaut\u00E9 d\u2019\u00E9tudiants fran\u00E7ais, notamment en sant\u00E9. Vous ne serez pas seul(e) ! Les \u00E9tudiants Edumove se retrouvent r\u00E9guli\u00E8rement et forment un r\u00E9seau solidaire." },
      { question: "Madrid est-elle s\u00FBre pour un \u00E9tudiant ?", answer: "Madrid est l\u2019une des capitales les plus s\u00FBres d\u2019Europe. Les quartiers \u00E9tudiants sont bien \u00E9clair\u00E9s, bien desservis et tr\u00E8s vivants \u00E0 toute heure. Les pr\u00E9cautions classiques (attention aux pickpockets dans le m\u00E9tro) suffisent." },
    ],
  },
  // =========================================================================
  // ROME
  // =========================================================================
  {
    slug: "rome",
    name: "Rome",
    country: "Italie",
    countryFlag: "\u{1F1EE}\u{1F1F9}",
    h1: "Vie \u00E9tudiante \u00E0 Rome",
    metaTitle: "Vie \u00E9tudiante \u00E0 Rome \u2014 Guide complet | Edumove",
    metaDescription: "Tout savoir sur la vie \u00E9tudiante \u00E0 Rome : logement, transports, bons plans, restaurants, co\u00FBt de la vie. Guide pour les \u00E9tudiants fran\u00E7ais en sant\u00E9 \u00E0 LINK Campus.",
    intro: "Rome, la Ville \u00C9ternelle, offre une exp\u00E9rience \u00E9tudiante incomparable. Entre patrimoine mill\u00E9naire, gastronomie l\u00E9gendaire et dolce vita, \u00E9tudier \u00E0 Rome c\u2019est vivre une aventure unique. LINK Campus University, notre partenaire, propose des formations en sant\u00E9 dans un cadre \u00E0 taille humaine.",
    heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1400&h=600&fit=crop&q=80",
    universities: [
      { name: "LINK Campus University", shortName: "LINK", slug: "link-campus", programs: ["M\u00E9decine", "Dentaire", "Kin\u00E9sith\u00E9rapie", "Pharmacie"] },
    ],
    airport: { name: "A\u00E9roport Rome-Fiumicino", code: "FCO", distance: "30 min du centre" },
    flightFromParis: "environ 2h",
    flightPrice: "30 \u00E0 100 \u20AC A/R",
    airlines: ["Ryanair", "Vueling", "Air France", "ITA Airways", "easyJet"],
    budget: [
      { label: "Logement (colocation)", range: "350 \u2014 550 \u20AC" },
      { label: "Alimentation", range: "200 \u2014 280 \u20AC" },
      { label: "Transports", range: "25 \u2014 35 \u20AC" },
      { label: "Loisirs / sorties", range: "80 \u2014 120 \u20AC" },
      { label: "T\u00E9l\u00E9phone / internet", range: "10 \u2014 20 \u20AC" },
    ],
    budgetTotal: "665 \u2014 1 005 \u20AC",
    quartiers: [
      { name: "Trastevere", desc: "Rues pav\u00E9es, lierre sur les murs, trattorias o\u00F9 tu manges pour 8 \u20AC. Le soir \u00E7a se remplit d\u2019\u00E9tudiants Erasmus et de locaux. Tout le monde veut vivre l\u00E0 \u2014 du coup c\u2019est pas donn\u00E9.", loyer: "400 \u2014 550 \u20AC" },
      { name: "San Lorenzo", desc: "Le vrai quartier \u00E9tudiant. Murs couverts de street art, bières \u00E0 3 \u20AC, pizza al taglio \u00E0 chaque coin de rue. C\u2019est bruyant, vivant, et les loyers restent corrects.", loyer: "350 \u2014 480 \u20AC" },
      { name: "Pigneto", desc: "On l\u2019appelle le Brooklyn de Rome et c\u2019est pas pour rien. Il y a 5 ans personne connaissait, maintenant c\u2019est plein de bars \u00E0 cocktails et de cin\u00E9s ind\u00E9. Profites-en avant que les loyers explosent.", loyer: "350 \u2014 450 \u20AC" },
      { name: "Testaccio", desc: "Les vrais Romains vivent ici. Le march\u00E9 couvert est le meilleur de la ville (suppl\u00EC \u00E0 tomber), le m\u00E9tro B est juste l\u00E0, et l\u2019ambiance c\u2019est z\u00E9ro touriste.", loyer: "380 \u2014 500 \u20AC" },
    ],
    transports: [
      { type: "M\u00E9tro + Bus (ATAC)", price: "25 \u20AC/mois", details: "Abonnement mensuel Metrebus pour les moins de 26 ans. Acc\u00E8s m\u00E9tro (3 lignes), bus et tram.", link: "https://www.atac.roma.it/" },
      { type: "V\u00E9lo", price: "Gratuit \u2014 5 \u20AC", details: "Rome d\u00E9veloppe ses pistes cyclables. Location via les apps Lime, Dott ou Bird.", link: "https://www.lime.bike/" },
      { type: "Train r\u00E9gional", price: "1,50 \u2014 3 \u20AC", details: "Trenitalia relie les diff\u00E9rents quartiers et la banlieue. Leonardo Express pour l\u2019a\u00E9roport (14 \u20AC)." },
      { type: "A\u00E9roport", price: "6 \u2014 14 \u20AC", details: "Bus navette SIT (6 \u20AC) ou Leonardo Express (14 \u20AC) depuis Termini. Trajet 30-50 min." },
    ],
    bonsPlans: [
      { title: "Supplì et pizza al taglio", desc: "Les comptoirs de pizza \u00E0 la coupe et de suppl\u00EC (croquettes de riz) sont partout. 2-4 \u20AC pour un repas sur le pouce, authentique et d\u00E9licieux.", category: "manger" },
      { title: "Aperitivo", desc: "Tradition italienne : pour le prix d\u2019un cocktail (7-10 \u20AC), vous avez acc\u00E8s \u00E0 un buffet de snacks, antipasti et charcuterie. Le d\u00EEner est presque inclus.", category: "sortir" },
      { title: "Vatican gratuit", desc: "Les mus\u00E9es du Vatican sont gratuits le dernier dimanche du mois. La Chapelle Sixtine, les Chambres de Rapha\u00EBl\u2026 \u00E0 0 \u20AC.", category: "culture" },
      { title: "Fontaines d\u2019eau potable", desc: "Rome compte plus de 2 500 \u201Cnasoni\u201D (fontaines publiques) d\u2019eau fra\u00EEche et potable. Emportez une gourde, jamais besoin d\u2019acheter de l\u2019eau.", category: "sport" },
      { title: "March\u00E9 de Testaccio", desc: "Le meilleur march\u00E9 alimentaire de Rome. Fruits, l\u00E9gumes, fromages, street food \u00E0 prix locaux. Ouvert tous les matins.", category: "manger" },
      { title: "Villa Borghese", desc: "Immense parc au c\u0153ur de Rome. Jogging, v\u00E9lo, barque sur le lac, mus\u00E9e Borghese. Gratuit (sauf mus\u00E9e).", category: "sport" },
    ],
    highlights: [
      "Co\u00FBt de la vie parmi les plus bas des capitales europ\u00E9ennes",
      "2h de vol depuis Paris, vols low-cost d\u00E8s 30 \u20AC A/R",
      "Gastronomie l\u00E9gendaire \u00E0 prix doux",
      "Patrimoine culturel unique au monde",
      "Cours d\u2019italien intensif inclus en 1re ann\u00E9e \u00E0 LINK",
      "Climat m\u00E9diterran\u00E9en doux toute l\u2019ann\u00E9e",
    ],
    trajets: [
      { from: "Paris", type: "avion", duration: "2h00", price: "30-100 \u20AC", freq: "20+ vols/jour" },
      { from: "Lyon", type: "avion", duration: "1h30", price: "25-80 \u20AC", freq: "3-6 vols/jour" },
      { from: "Marseille", type: "avion", duration: "1h15", price: "25-70 \u20AC", freq: "2-4 vols/jour" },
      { from: "Nice", type: "avion", duration: "1h10", price: "20-60 \u20AC", freq: "3-5 vols/jour" },
      { from: "Toulouse", type: "avion", duration: "1h35", price: "30-90 \u20AC", freq: "1-3 vols/jour" },
      { from: "Bordeaux", type: "avion", duration: "1h50", price: "35-100 \u20AC", freq: "1-2 vols/jour" },
      { from: "Nantes", type: "avion", duration: "2h05", price: "35-110 \u20AC", freq: "1-2 vols/jour" },
      { from: "Lille", type: "avion", duration: "2h00", price: "40-120 \u20AC", freq: "1-2 vols/jour" },
      { from: "Strasbourg", type: "avion", duration: "1h40", price: "30-90 \u20AC", freq: "1-2 vols/jour" },
    ],
    faq: [
      { question: "Faut-il parler italien pour vivre \u00E0 Rome ?", answer: "Non, LINK Campus propose un cours intensif d\u2019italien d\u00E8s la premi\u00E8re ann\u00E9e. La plupart des \u00E9tudiants arrivent sans parler italien et deviennent bilingues en 6 mois d\u2019immersion. Les Romains sont accueillants avec les \u00E9trangers." },
      { question: "Quel budget mensuel pr\u00E9voir \u00E0 Rome ?", answer: "Comptez entre 665 et 1 005 \u20AC par mois tout compris. Rome est moins ch\u00E8re que Paris, surtout pour l\u2019alimentation et les sorties. Le logement en colocation co\u00FBte 350 \u00E0 550 \u20AC selon le quartier." },
      { question: "Comment trouver un logement \u00E0 Rome ?", answer: "Les sites Immobiliare.it, Idealista.it et les groupes Facebook \u201CFrancesi a Roma\u201D sont les plus utilis\u00E9s. Edumove vous accompagne dans la recherche avant votre arriv\u00E9e et vous met en contact avec d\u2019anciens \u00E9tudiants." },
      { question: "Y a-t-il des \u00E9tudiants fran\u00E7ais \u00E0 Rome ?", answer: "Oui ! Rome accueille une communaut\u00E9 fran\u00E7aise importante. Entre les \u00E9tudiants Edumove, Erasmus et les expats, vous trouverez facilement des compatriotes. LINK Campus a une vraie communaut\u00E9 francophone." },
      { question: "Rome est-elle s\u00FBre ?", answer: "Rome est globalement s\u00FBre. Les quartiers \u00E9tudiants (Trastevere, San Lorenzo) sont anim\u00E9s et bien fr\u00E9quent\u00E9s. Attention aux pickpockets dans le m\u00E9tro et autour des sites touristiques, comme dans toute grande ville." },
    ],
  },
  // =========================================================================
  // VALENCE
  // =========================================================================
  {
    slug: "valence",
    name: "Valence",
    country: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    h1: "Vie \u00E9tudiante \u00E0 Valence",
    metaTitle: "Vie \u00E9tudiante \u00E0 Valence (Espagne) \u2014 Guide complet | Edumove",
    metaDescription: "Tout savoir sur la vie \u00E9tudiante \u00E0 Valence : logement, transports, plages, bons plans. La ville id\u00E9ale pour \u00E9tudier la sant\u00E9 en Espagne.",
    intro: "Valence est le secret le mieux gard\u00E9 des \u00E9tudiants en Espagne. Troisi\u00E8me ville du pays, elle combine plages, vie culturelle, gastronomie (la vraie paella !) et un co\u00FBt de la vie tr\u00E8s bas. L\u2019Universidad Europea y dispose d\u2019un campus moderne pour les \u00E9tudes de sant\u00E9.",
    heroImage: "https://images.unsplash.com/photo-1555862124-94036092ab14?w=1400&h=600&fit=crop&q=80",
    universities: [
      { name: "Universidad Europea Valence", shortName: "UE", slug: "universidad-europea", programs: ["Dentaire", "Kin\u00E9sith\u00E9rapie"] },
    ],
    airport: { name: "A\u00E9roport de Valence", code: "VLC", distance: "15-20 min du centre" },
    flightFromParis: "1h45 \u00E0 2h",
    flightPrice: "30 \u00E0 90 \u20AC A/R",
    airlines: ["Ryanair", "Vueling", "Air France", "easyJet"],
    budget: [
      { label: "Logement (colocation)", range: "300 \u2014 450 \u20AC" },
      { label: "Alimentation", range: "150 \u2014 250 \u20AC" },
      { label: "Transports", range: "20 \u2014 40 \u20AC" },
      { label: "Loisirs / sorties", range: "80 \u2014 130 \u20AC" },
      { label: "T\u00E9l\u00E9phone / internet", range: "15 \u2014 25 \u20AC" },
    ],
    budgetTotal: "565 \u2014 895 \u20AC",
    quartiers: [
      { name: "Benimaclet", desc: "Demande \u00E0 n\u2019importe quel \u00E9tudiant de Valence : c\u2019est ici qu\u2019il faut vivre. March\u00E9 le samedi matin, bars \u00E0 tapas o\u00F9 tout le monde se conna\u00EEt, et 280 \u20AC le loyer. Difficile de faire mieux.", loyer: "280 \u2014 400 \u20AC" },
      { name: "Ruzafa", desc: "Le Marais de Valence en version soleil. Brunchs, galeries, rooftops avec vue. T\u2019y croises plus de freelances sur leur Mac que d\u2019\u00E9tudiants, mais l\u2019ambiance vaut le coup.", loyer: "350 \u2014 500 \u20AC" },
      { name: "Ciutat Vella", desc: "Tu vis litt\u00E9ralement \u00E0 c\u00F4t\u00E9 de la cath\u00E9drale et du March\u00E9 Central. Les apparts sont parfois petits (c\u2019est l\u2019ancien), mais se r\u00E9veiller dans le centre historique, \u00E7a n\u2019a pas de prix.", loyer: "320 \u2014 450 \u20AC" },
      { name: "Blasco Ib\u00E1\u00F1ez", desc: "L\u2019avenue qui descend droit vers la plage de la Malvarrosa. Plein de r\u00E9sidences \u00E9tudiantes, ambiance Erasmus le soir, et le dimanche t\u2019es sur le sable en 10 min \u00E0 v\u00E9lo.", loyer: "300 \u2014 420 \u20AC" },
    ],
    transports: [
      { type: "M\u00E9tro + Bus (EMT)", price: "20 \u20AC/mois", details: "Abono Joven valable sur le m\u00E9tro, bus et tram de Valence. R\u00E9seau dense et fiable.", link: "https://www.emtvalencia.es/" },
      { type: "V\u00E9lo (Valenbisi)", price: "30 \u20AC/an", details: "2 750 v\u00E9los en libre-service dans 275 stations. Tarif annuel \u00E9tudiant imbattable.", link: "https://www.valenbisi.es/" },
      { type: "Tram", price: "Inclus Abono", details: "4 lignes reliant le centre aux plages et \u00E0 la p\u00E9riph\u00E9rie. Moderne et rapide." },
      { type: "A\u00E9roport", price: "4,90 \u20AC", details: "M\u00E9tro lignes 3 et 5 directes vers l\u2019a\u00E9roport. Trajet 20 min depuis le centre." },
    ],
    bonsPlans: [
      { title: "Paella authentique", desc: "Valence est le berceau de la paella. Les restaurants du quartier El Cabanyal la servent d\u00E8s 8-12 \u20AC le dimanche midi. Tradition locale.", category: "manger" },
      { title: "Jardins du Turia", desc: "9 km de parc am\u00E9nag\u00E9 dans l\u2019ancien lit du fleuve. Jogging, v\u00E9lo, aires de sport gratuites. Le Central Park de Valence.", category: "sport" },
      { title: "Plages gratuites", desc: "Malvarrosa et Patacona \u00E0 v\u00E9lo depuis le centre. Volley, surf, couchers de soleil. Acc\u00E8s libre toute l\u2019ann\u00E9e.", category: "sport" },
      { title: "March\u00E9 Central", desc: "L\u2019un des plus beaux march\u00E9s d\u2019Europe dans un b\u00E2timent Art Nouveau. Fruits frais, jambon, fromages \u00E0 prix locaux.", category: "manger" },
      { title: "Fallas", desc: "F\u00EAte spectaculaire en mars avec sculptures g\u00E9antes, feux d\u2019artifice et p\u00E9tards. Exp\u00E9rience unique au monde.", category: "culture" },
      { title: "Cit\u00E9 des Arts et des Sciences", desc: "Aquarium, plan\u00E9tarium, mus\u00E9e des sciences. Tarifs r\u00E9duits \u00E9tudiants. Architecture futuriste iconique.", category: "culture" },
    ],
    highlights: [
      "Co\u00FBt de la vie 30% inf\u00E9rieur \u00E0 Paris",
      "Plages accessibles \u00E0 v\u00E9lo depuis le centre",
      "1h45 de vol depuis Paris",
      "Climat doux toute l\u2019ann\u00E9e (18-30\u00B0C)",
      "V\u00E9los en libre-service \u00E0 30 \u20AC/an",
      "Gastronomie l\u00E9gendaire (paella, horchata, tapas)",
    ],
    trajets: [
      { from: "Paris", type: "avion", duration: "1h50", price: "30-90 \u20AC", freq: "8-12 vols/jour" },
      { from: "Lyon", type: "avion", duration: "1h20", price: "25-70 \u20AC", freq: "2-4 vols/jour" },
      { from: "Marseille", type: "avion", duration: "1h10", price: "25-60 \u20AC", freq: "2-3 vols/jour" },
      { from: "Toulouse", type: "avion", duration: "1h10", price: "25-70 \u20AC", freq: "1-3 vols/jour" },
      { from: "Bordeaux", type: "avion", duration: "1h25", price: "30-80 \u20AC", freq: "1-2 vols/jour" },
      { from: "Nantes", type: "avion", duration: "1h45", price: "30-90 \u20AC", freq: "1-2 vols/jour" },
      { from: "Nice", type: "avion", duration: "1h20", price: "25-70 \u20AC", freq: "1-2 vols/jour" },
      { from: "Lille", type: "avion", duration: "2h05", price: "40-110 \u20AC", freq: "1-2 vols/jour" },
    ],
    faq: [
      { question: "Pourquoi choisir Valence plut\u00F4t que Madrid ?", answer: "Valence est 30% moins ch\u00E8re que Madrid, avec des plages accessibles \u00E0 v\u00E9lo, une taille plus humaine et un climat encore plus doux. C\u2019est le choix id\u00E9al pour ceux qui veulent allier \u00E9tudes s\u00E9rieuses et qualit\u00E9 de vie c\u00F4ti\u00E8re." },
      { question: "Quel budget mensuel pr\u00E9voir \u00E0 Valence ?", answer: "Comptez 565 \u00E0 895 \u20AC par mois tout compris. C\u2019est la ville la plus abordable de nos destinations. Le loyer en colocation d\u00E9marre \u00E0 280 \u20AC dans le quartier \u00E9tudiant de Benimaclet." },
      { question: "Quelles formations sont disponibles \u00E0 Valence ?", answer: "L\u2019Universidad Europea de Valence propose le dentaire et la kin\u00E9sith\u00E9rapie. Les campus sont modernes et \u00E9quip\u00E9s des derni\u00E8res technologies." },
      { question: "Fait-il beau \u00E0 Valence ?", answer: "Oui ! Valence b\u00E9n\u00E9ficie de plus de 300 jours de soleil par an avec des temp\u00E9ratures entre 18 et 30\u00B0C. M\u00EAme en hiver, il fait rarement en dessous de 10\u00B0C." },
      { question: "Comment se d\u00E9placer \u00E0 Valence ?", answer: "Le v\u00E9lo est roi \u00E0 Valence ! Valenbisi propose 2 750 v\u00E9los en libre-service pour 30 \u20AC/an. Sinon, l\u2019Abono Joven donne un acc\u00E8s illimit\u00E9 m\u00E9tro + bus pour 20 \u20AC/mois." },
    ],
  },
  // =========================================================================
  // MALAGA
  // =========================================================================
  {
    slug: "malaga",
    name: "Malaga",
    country: "Espagne",
    countryFlag: "\u{1F1EA}\u{1F1F8}",
    h1: "Vie \u00E9tudiante \u00E0 Malaga",
    metaTitle: "Vie \u00E9tudiante \u00E0 Malaga \u2014 Guide complet | Edumove",
    metaDescription: "Tout savoir sur la vie \u00E9tudiante \u00E0 Malaga : logement, transports, plages, bons plans. \u00C9tudiez la sant\u00E9 sur la Costa del Sol.",
    intro: "Malaga, perle de la Costa del Sol, est une ville en plein essor qui s\u00E9duit de plus en plus d\u2019\u00E9tudiants internationaux. Soleil quasi permanent, plages magnifiques, gastronomie andalouse et co\u00FBt de la vie tr\u00E8s bas : \u00E9tudier \u00E0 Malaga c\u2019est concilier excellence acad\u00E9mique et art de vivre m\u00E9diterran\u00E9en.",
    heroImage: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1400&h=600&fit=crop&q=80",
    universities: [
      { name: "Universidad Europea Malaga", shortName: "UE", slug: "universidad-europea", programs: ["Dentaire", "Kin\u00E9sith\u00E9rapie"] },
    ],
    airport: { name: "A\u00E9roport M\u00E1laga-Costa del Sol", code: "AGP", distance: "10-15 min du centre" },
    flightFromParis: "environ 2h20",
    flightPrice: "30 \u00E0 80 \u20AC A/R",
    airlines: ["Ryanair", "Vueling", "easyJet", "Transavia"],
    budget: [
      { label: "Logement (colocation)", range: "300 \u2014 450 \u20AC" },
      { label: "Alimentation", range: "150 \u2014 230 \u20AC" },
      { label: "Transports", range: "20 \u2014 40 \u20AC" },
      { label: "Loisirs / sorties", range: "70 \u2014 120 \u20AC" },
      { label: "T\u00E9l\u00E9phone / internet", range: "15 \u2014 25 \u20AC" },
    ],
    budgetTotal: "555 \u2014 865 \u20AC",
    quartiers: [
      { name: "Centro Hist\u00F3rico", desc: "Rues pi\u00E9tonnes, tapas \u00E0 2 \u20AC, mus\u00E9e Picasso au coin de la rue. Tu paies un peu plus cher mais t\u2019es au c\u0153ur de tout. Le week-end c\u2019est anim\u00E9 jusqu\u2019\u00E0 pas d\u2019heure.", loyer: "350 \u2014 500 \u20AC" },
      { name: "Teatinos", desc: "280 \u20AC le loyer, m\u00E9tro direct vers le centre en 10 min, et tous tes potes de promo habitent dans la m\u00EAme rue. C\u2019est pas glamour mais c\u2019est pratique et franchement pas cher.", loyer: "280 \u2014 400 \u20AC" },
      { name: "El Palo", desc: "Un ancien village de p\u00EAcheurs absorb\u00E9 par la ville. On y mange les meilleurs espetos (sardines grill\u00E9es) de Malaga les pieds dans le sable. Ambiance chill, z\u00E9ro prise de t\u00EAte.", loyer: "300 \u2014 420 \u20AC" },
      { name: "La Malagueta", desc: "T\u2019es entre le centre et la plage, avec la promenade maritime sous tes fen\u00EAtres. Pas le moins cher mais le cadre de vie est dur \u00E0 battre. Vue sur le port en bonus.", loyer: "320 \u2014 480 \u20AC" },
    ],
    transports: [
      { type: "Bus (EMT Malaga)", price: "22 \u20AC/mois", details: "Tarjeta Joven pour les moins de 26 ans. R\u00E9seau de bus couvrant toute la ville et les plages.", link: "https://www.emtmalaga.es/" },
      { type: "M\u00E9tro", price: "Inclus carte", details: "2 lignes reliant Teatinos (quartier \u00E9tudiant) au centre-ville en 10 min. Moderne et rapide.", link: "https://www.metromalaga.es/" },
      { type: "V\u00E9lo", price: "15 \u20AC/an", details: "Malaga est plate et cyclable. Location de v\u00E9los via les apps ou les magasins locaux.", link: "https://malagabici.malaga.eu/" },
      { type: "A\u00E9roport", price: "1,80 \u20AC", details: "Ligne C1 de Cercan\u00EDas directe centre-a\u00E9roport en 12 min. Le trajet le moins cher de toutes nos villes !" },
    ],
    bonsPlans: [
      { title: "Chiringuitos", desc: "Les bars de plage typiques d\u2019Andalousie. Espetos de sardines grill\u00E9es sur le sable, sangria, coucher de soleil. D\u00E8s 5-8 \u20AC le plat.", category: "manger" },
      { title: "Mus\u00E9e Picasso", desc: "Picasso est n\u00E9 \u00E0 Malaga ! Le mus\u00E9e est gratuit le dimanche apr\u00E8s 17h et pour les \u00E9tudiants UE. Plus de 200 \u0153uvres.", category: "culture" },
      { title: "Plages de la Costa del Sol", desc: "La Malagueta, Pedregalejo, El Palo\u2026 des km de plage gratuite accessible \u00E0 pied ou en bus. Baignade de mai \u00E0 octobre.", category: "sport" },
      { title: "March\u00E9 d\u2019Atarazanas", desc: "Magnifique march\u00E9 couvert avec vitraux. Poisson frais, olives, jambon. Les bars du march\u00E9 servent des tapas d\u00E8s 2 \u20AC.", category: "manger" },
      { title: "Caminito del Rey", desc: "Randonn\u00E9e spectaculaire dans les gorges \u00E0 1h de Malaga. Passerelles vertigineuses, paysages \u00E0 couper le souffle. 10 \u20AC l\u2019entr\u00E9e.", category: "sport" },
      { title: "Alcazaba et Gibralfaro", desc: "Forteresses maures avec vue panoramique sur la ville et la mer. Entr\u00E9e gratuite le dimanche apr\u00E8s 14h.", category: "culture" },
    ],
    highlights: [
      "La ville la plus abordable de nos destinations",
      "320 jours de soleil par an",
      "2h20 de vol depuis Paris, vols low-cost d\u00E8s 30 \u20AC",
      "A\u00E9roport \u00E0 12 min du centre (1,80 \u20AC en train)",
      "Plages accessibles \u00E0 pied",
      "Berceau de Picasso, vie culturelle riche",
    ],
    trajets: [
      { from: "Paris", type: "avion", duration: "2h20", price: "30-80 \u20AC", freq: "10+ vols/jour" },
      { from: "Lyon", type: "avion", duration: "2h00", price: "30-70 \u20AC", freq: "2-4 vols/jour" },
      { from: "Marseille", type: "avion", duration: "1h40", price: "25-60 \u20AC", freq: "2-3 vols/jour" },
      { from: "Toulouse", type: "avion", duration: "1h30", price: "25-60 \u20AC", freq: "1-3 vols/jour" },
      { from: "Bordeaux", type: "avion", duration: "1h50", price: "30-80 \u20AC", freq: "1-2 vols/jour" },
      { from: "Nantes", type: "avion", duration: "2h10", price: "35-90 \u20AC", freq: "1-2 vols/jour" },
      { from: "Nice", type: "avion", duration: "2h00", price: "30-80 \u20AC", freq: "1-2 vols/jour" },
      { from: "Lille", type: "avion", duration: "2h30", price: "40-110 \u20AC", freq: "1-2 vols/jour" },
      { from: "Strasbourg", type: "avion", duration: "2h30", price: "45-120 \u20AC", freq: "1/semaine" },
    ],
    faq: [
      { question: "Pourquoi choisir Malaga ?", answer: "Malaga est la ville la moins ch\u00E8re de nos destinations (555-865 \u20AC/mois), avec un a\u00E9roport \u00E0 12 min du centre, 320 jours de soleil et des plages accessibles \u00E0 pied. C\u2019est le cadre de vie r\u00EAv\u00E9 pour un \u00E9tudiant." },
      { question: "Quel budget mensuel pr\u00E9voir \u00E0 Malaga ?", answer: "Comptez 555 \u00E0 865 \u20AC par mois tout compris. Les loyers en colocation d\u00E9marrent \u00E0 280 \u20AC dans le quartier \u00E9tudiant de Teatinos." },
      { question: "Quelles formations sont disponibles \u00E0 Malaga ?", answer: "L\u2019Universidad Europea de Malaga propose le dentaire et la kin\u00E9sith\u00E9rapie sur un campus neuf et \u00E9quip\u00E9." },
      { question: "Est-ce facile de rentrer en France depuis Malaga ?", answer: "Tr\u00E8s facile ! L\u2019a\u00E9roport est \u00E0 12 min du centre en train (1,80 \u20AC). Les vols low-cost pour Paris d\u00E9marrent \u00E0 30 \u20AC A/R avec Ryanair, Vueling ou easyJet." },
      { question: "Malaga est-elle anim\u00E9e pour un \u00E9tudiant ?", answer: "Oui ! Malaga est en plein boom avec une sc\u00E8ne culturelle et nocturne dynamique. Le centre historique regorge de bars \u00E0 tapas, le quartier de Soho est branch\u00E9, et la plage est toujours l\u00E0 pour d\u00E9compresser." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getCityGuide(slug: string): CityGuide | undefined {
  return cityGuides.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cityGuides.map((c) => c.slug);
}
