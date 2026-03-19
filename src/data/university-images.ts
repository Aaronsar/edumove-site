/**
 * Images par faculté — Unsplash (gratuites, licence libre)
 * Format: https://images.unsplash.com/photo-{id}?w=800&q=80
 */

export interface UniversityImage {
  src: string;
  alt: string;
}

export const universityImages: Record<string, UniversityImage[]> = {
  ue: [
    { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", alt: "Campus universitaire en Espagne" },
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", alt: "Étudiants sur le campus" },
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", alt: "Bibliothèque universitaire" },
    { src: "https://images.unsplash.com/photo-1539033466270-4b3d4f72997c?w=800&q=80", alt: "Madrid, Espagne" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Côte méditerranéenne — Málaga, Valence, Alicante" },
  ],
  ucjc: [
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
      alt: "Campus UCJC Madrid",
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      alt: "Vie étudiante à Madrid",
    },
    {
      src: "https://images.unsplash.com/photo-1539033466270-4b3d4f72997c?w=800&q=80",
      alt: "Madrid, Espagne",
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      alt: "Étudiants en formation santé",
    },
  ],
  link: [
    { src: "/images/universites/link/link-campus-6.jpg", alt: "Campus Link University — Sede Francisci, Rome" },
    { src: "/images/universites/link/link-campus-15.jpg", alt: "Bâtiment principal Link University, Rome" },
    { src: "/images/universites/link/link-campus-18.jpg", alt: "Intérieur du campus Link University" },
    { src: "/images/universites/link/link-campus-35.jpg", alt: "Espaces d'études Link University, Rome" },
    { src: "/images/universites/link/link-campus-80.jpg", alt: "Vie étudiante au campus Link University" },
  ],
};
