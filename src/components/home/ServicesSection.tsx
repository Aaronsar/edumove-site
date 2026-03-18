import { CheckCircle, Banknote, Users } from "lucide-react";

const services = [
  {
    icon: CheckCircle,
    title: "Admis ou remboursé",
    description:
      "Préparation illimitée aux tests d'admission. Si vous n'êtes pas admis, on vous rembourse intégralement. Aucun risque pour vous.",
  },
  {
    icon: Banknote,
    title: "Financement garanti",
    description:
      "Jusqu'à 75 000\u20AC de prêt étudiant grâce à notre partenariat avec LCL. Vous ne remboursez qu'une fois diplômé et en poste.",
  },
  {
    icon: Users,
    title: "Accompagnement de A à Z",
    description:
      "Orientation, admission, logement, traduction des cours, vie étudiante : on s'occupe de tout pour que vous puissiez vous concentrer sur vos études.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#615CA5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold italic text-white">
          Pourquoi choisir Edumove&nbsp;?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="text-center">
                {/* Icon in orange circle */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EC680A]">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
