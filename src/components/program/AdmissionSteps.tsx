export default function AdmissionSteps({ steps }: { steps: string[] }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold italic text-[#1B1D3A] mb-8">
        Processus d&apos;admission
      </h2>
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#615CA5] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 h-12 bg-[#615CA5]/25" />}
            </div>
            <div className="pb-8">
              <p className="text-[#334155] font-medium pt-2">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
