import type { ProgramDetail } from "@/data/program-details";

export default function CostCard({ detail }: { detail: ProgramDetail }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
        Coût et financement
      </h2>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">Tarif annuel</p>
            <p className="text-4xl font-bold text-[#1B1D3A]">{detail.costPerYear}<span className="text-lg font-normal text-gray-500">/an</span></p>
            <p className="text-gray-500 mt-2">Coût total : <strong className="text-[#1B1D3A]">{detail.totalCost}</strong></p>
            <p className="text-gray-500 mt-1">Diplôme : {detail.diploma}</p>
          </div>
          <div className="bg-[#615CA5]/5 rounded-xl p-6 border border-[#615CA5]/20">
            <p className="font-bold text-[#615CA5] text-lg mb-2">Financement garanti</p>
            <p className="text-[#334155] text-sm">
              Grâce au partenariat EduMove x LCL, bénéficiez d&apos;un prêt étudiant jusqu&apos;à 75 000 €
              pour financer jusqu&apos;à 100% de vos études. Vous ne remboursez qu&apos;une fois diplômé(e) et en poste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
