"use client";

interface TarifRow {
  filiere: string;
  link: string | null;
  ucjc: string | null;
  ueCheap: string | null;
  ueExpensive: string | null;
  cheapestCol: "link" | "ucjc" | "ueCheap" | "ueExpensive" | null;
  ucjcFull?: boolean;
}

const tarifs: TarifRow[] = [
  {
    filiere: "Médecine",
    link: "19 800\u20AC/an",
    ucjc: "COMPLET",
    ueCheap: "21 480\u20AC/an",
    ueExpensive: "21 480\u20AC/an",
    cheapestCol: "link",
    ucjcFull: true,
  },
  {
    filiere: "Dentaire",
    link: "19 800\u20AC/an",
    ucjc: "18 420\u20AC/an",
    ueCheap: "19 200\u20AC/an (Malaga)",
    ueExpensive: "20 821\u20AC/an (Valence/Alicante)",
    cheapestCol: "ucjc",
  },
  {
    filiere: "Kinésithérapie",
    link: "11 900\u20AC/an",
    ucjc: "9 420\u20AC/an",
    ueCheap: "10 020\u20AC/an (Madrid/Malaga/Canaries)",
    ueExpensive: "10 080\u20AC/an (Valence/Alicante)",
    cheapestCol: "ucjc",
  },
  {
    filiere: "Pharmacie",
    link: "7 900\u20AC/an",
    ucjc: "10 140\u20AC/an",
    ueCheap: "12 120\u20AC/an (Madrid seul)",
    ueExpensive: null,
    cheapestCol: "link",
  },
  {
    filiere: "Vétérinaire",
    link: null,
    ucjc: null,
    ueCheap: "19 500\u20AC/an (Madrid seul)",
    ueExpensive: null,
    cheapestCol: "ueCheap",
  },
  {
    filiere: "Prépa Dentaire",
    link: null,
    ucjc: null,
    ueCheap: "17 000\u20AC/an (Alicante seul)",
    ueExpensive: null,
    cheapestCol: "ueCheap",
  },
];

function CellContent({
  value,
  isCheapest,
  isFull,
}: {
  value: string | null;
  isCheapest: boolean;
  isFull?: boolean;
}) {
  if (!value) {
    return <span className="text-gray-300">&mdash;</span>;
  }
  if (isFull) {
    return <span className="text-red-500 line-through">{value}</span>;
  }
  if (isCheapest) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="rounded-full bg-[#EC680A]/10 px-2.5 py-0.5 text-xs font-semibold text-[#EC680A]">
          Le - cher
        </span>
        <span className="font-semibold text-[#EC680A]">{value}</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function TarifsComparatif() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold italic text-[#1B1D3A]">
          Comparatif des tarifs par filière
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-[#1B1D3A] text-white">
                  <th className="px-6 py-4 text-left font-semibold">
                    Filière
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    LINK (Rome)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    UCJC (Madrid)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    UE &mdash; Le moins cher
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    UE &mdash; Le plus cher
                  </th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((row, index) => (
                  <tr
                    key={row.filiere}
                    className={`border-t border-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1B1D3A]">
                      {row.filiere}
                    </td>
                    <td className="px-6 py-4">
                      <CellContent
                        value={row.link}
                        isCheapest={row.cheapestCol === "link"}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <CellContent
                        value={row.ucjc}
                        isCheapest={row.cheapestCol === "ucjc"}
                        isFull={row.ucjcFull}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <CellContent
                        value={row.ueCheap}
                        isCheapest={row.cheapestCol === "ueCheap"}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <CellContent
                        value={row.ueExpensive}
                        isCheapest={row.cheapestCol === "ueExpensive"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
