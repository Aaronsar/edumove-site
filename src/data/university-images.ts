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
    { src: "/images/universites/ue/ue-hospital-1.jpg", alt: "Installations hospitalières Universidad Europea" },
    { src: "/images/universites/ue/ue-campus-club.jpg", alt: "Vie étudiante sur le campus UE" },
    { src: "/images/universites/ue/ue-hospital-simulation.jpg", alt: "Salle de simulation hospitalière UE" },
    { src: "/images/universites/ue/ue-salud-grado.jpg", alt: "Formation santé Universidad Europea" },
  ],
  ucjc: [
    { src: "/images/universites/ue/ue-hospital-2.jpg", alt: "Campus UCJC Madrid" },
    { src: "/images/universites/ue/ue-hospital-3.jpg", alt: "Vie étudiante à Madrid" },
    { src: "/images/universites/ue/ue-hospital-4.jpg", alt: "Installations hospitalières UCJC" },
    { src: "/images/universites/ue/ue-hospital-5.jpg", alt: "Formation santé UCJC Madrid" },
  ],
  link: [
    { src: "/images/universites/link/link-campus-6.jpg", alt: "Campus Link University — Sede Francisci, Rome" },
    { src: "/images/universites/link/link-campus-15.jpg", alt: "Bâtiment principal Link University, Rome" },
    { src: "/images/universites/link/link-campus-18.jpg", alt: "Intérieur du campus Link University" },
    { src: "/images/universites/link/link-campus-35.jpg", alt: "Espaces d'études Link University, Rome" },
    { src: "/images/universites/link/link-campus-80.jpg", alt: "Vie étudiante au campus Link University" },
  ],
};
