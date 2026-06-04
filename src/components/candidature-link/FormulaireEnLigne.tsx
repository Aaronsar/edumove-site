"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Loader2,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  CreditCard,
} from "lucide-react";
import SignatureCanvas from "./SignatureCanvas";

const MAX_FILE_SIZE_MB = 8; // Brevo limite à 10 Mo par fichier, 50 Mo total
const ACCEPTED_FORMATS = ".pdf,.jpg,.jpeg,.png,.heic,.heif";

const PROGRAMMES = [
  // Programme de licence
  { value: "infirmier", label: "Soins infirmiers (L/SNT1)", type: "licence" },
  { value: "physiotherapie", label: "Physiothérapie (L/SNT2)", type: "licence" },
  { value: "osteopathie", label: "Ostéopathie (L/SNT4)", type: "licence" },
  { value: "autre_licence", label: "Autre programme licence", type: "licence" },
  // Programme de maîtrise
  { value: "pharmacie", label: "Pharmacie (LM-13)", type: "maitrise" },
  { value: "medecine", label: "Médecine et chirurgie (LM-41)", type: "maitrise" },
  { value: "odontologie", label: "Odontologie (LM-46)", type: "maitrise" },
  { value: "autre_maitrise", label: "Autre programme maîtrise", type: "maitrise" },
];

const ANNEES = ["2025/2026", "2026/2027", "2027/2028"];

const inputClass =
  "w-full px-3.5 py-2.5 border-[1.5px] border-[#E2E8F0] rounded-xl text-sm text-[#1B1D3A] bg-[#F8FAFC] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#EC680A] focus:ring-[3px] focus:ring-[#EC680A]/10 focus:bg-white";

const labelClass = "block text-[13px] font-semibold text-[#1B1D3A] mb-1";

type Submitting = "idle" | "submitting" | "success" | "error";

export default function FormulaireEnLigne() {
  const router = useRouter();

  // Section 1 — Programme
  const [anneeScolaire, setAnneeScolaire] = useState("");
  const [programme, setProgramme] = useState("");

  // Section 2 — Identité
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [sexe, setSexe] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [age, setAge] = useState("");
  const [villeNaissance, setVilleNaissance] = useState("");
  const [nationalite, setNationalite] = useState("");
  const [passeport, setPasseport] = useState("");

  // Section 3 — Adresse
  const [adresseRue, setAdresseRue] = useState("");
  const [appartement, setAppartement] = useState("");
  const [ville, setVille] = useState("");
  const [etat, setEtat] = useState("");
  const [pays, setPays] = useState("France");
  const [zip, setZip] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  // Section 4 — Diplôme
  const [diplomeSecondaire, setDiplomeSecondaire] = useState(false);
  const [diplomeLicence, setDiplomeLicence] = useState(false);
  const [diplomeEnCours, setDiplomeEnCours] = useState(false);

  // Section 5 — Pièces jointes
  const [fileBac, setFileBac] = useState<File | null>(null);
  const [fileId, setFileId] = useState<File | null>(null);

  // Section 6 — Signature & accord
  const [signature, setSignature] = useState<string | null>(null);
  const [accordRGPD, setAccordRGPD] = useState(false);

  const [submitState, setSubmitState] = useState<Submitting>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Auto-calcul de l'âge
  const handleDateNaissanceChange = (v: string) => {
    setDateNaissance(v);
    if (v) {
      const d = new Date(v);
      const now = new Date();
      let years = now.getFullYear() - d.getFullYear();
      const m = now.getMonth() - d.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < d.getDate())) years--;
      if (years >= 0 && years < 120) setAge(String(years));
    }
  };

  const validateFile = (f: File | null) => {
    if (!f) return null;
    const sizeMB = f.size / 1024 / 1024;
    if (sizeMB > MAX_FILE_SIZE_MB) {
      return `Fichier trop volumineux (${sizeMB.toFixed(1)} Mo, max ${MAX_FILE_SIZE_MB} Mo)`;
    }
    return null;
  };

  const fileBacError = validateFile(fileBac);
  const fileIdError = validateFile(fileId);

  const isValid =
    anneeScolaire &&
    programme &&
    firstname.trim() &&
    lastname.trim() &&
    sexe &&
    dateNaissance &&
    villeNaissance.trim() &&
    nationalite.trim() &&
    adresseRue.trim() &&
    ville.trim() &&
    pays.trim() &&
    telephone.trim() &&
    email.trim() &&
    (diplomeSecondaire || diplomeLicence || diplomeEnCours) &&
    fileBac &&
    !fileBacError &&
    fileId &&
    !fileIdError &&
    signature &&
    accordRGPD;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setErrorMsg("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSubmitState("submitting");
    setErrorMsg("");

    try {
      const fd = new FormData();
      // Champs texte
      const payload = {
        anneeScolaire,
        programme,
        firstname,
        middlename,
        lastname,
        sexe,
        dateNaissance,
        age,
        villeNaissance,
        nationalite,
        passeport,
        adresseRue,
        appartement,
        ville,
        etat,
        pays,
        zip,
        telephone,
        email,
        diplomeSecondaire,
        diplomeLicence,
        diplomeEnCours,
      };
      fd.append("payload", JSON.stringify(payload));
      // Signature
      if (signature) fd.append("signature", signature);
      // Fichiers
      if (fileBac) fd.append("fileBac", fileBac);
      if (fileId) fd.append("fileId", fileId);

      const res = await fetch("/api/candidature/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error || "Erreur lors de l'envoi du dossier");
      }
      setSubmitState("success");
      // Redirige vers la page de confirmation
      router.push(
        `/candidature-test-link/confirmation?nom=${encodeURIComponent(lastname)}&prenom=${encodeURIComponent(firstname)}`
      );
    } catch (err) {
      const m = err instanceof Error ? err.message : "Erreur inconnue";
      setErrorMsg(m);
      setSubmitState("error");
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#1B1D3A] text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#615CA5]/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-[300px] h-[300px] rounded-full bg-[#EC680A]/15 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 py-10 md:py-14">
          <nav className="flex items-center gap-1.5 text-sm mb-6 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/candidature-test-link" className="hover:text-white transition-colors">Candidature LINK</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Remplir en ligne</span>
          </nav>

          <h1
            className="text-2xl md:text-4xl font-bold mb-3 tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Remplir mon dossier en ligne
          </h1>
          <p className="text-base md:text-lg text-white/80">
            Formulaire officiel rempli automatiquement, signé électroniquement et envoyé directement avec vos pièces jointes. <strong className="text-white">5 minutes chrono.</strong>
          </p>
        </div>
      </section>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-[#fafbff] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-8">

          {/* SECTION 1 — Programme */}
          <Section number={1} title="Programme souhaité">
            <div className="space-y-5">
              <div>
                <label className={labelClass}>
                  Année scolaire <Req />
                </label>
                <div className="flex flex-wrap gap-2">
                  {ANNEES.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAnneeScolaire(a)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                        anneeScolaire === a
                          ? "bg-[#EC680A] text-white border-2 border-[#EC680A]"
                          : "bg-white text-[#1B1D3A] border-2 border-[#E2E8F0] hover:border-[#EC680A]"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#615CA5] bg-[#615CA5]/8 border-l-2 border-[#615CA5] pl-3 py-2 rounded-r-md leading-relaxed">
                  <strong>Pour une candidature à la rentrée de septembre 2026,</strong> sélectionnez <strong>2026/2027</strong>.
                </p>
              </div>

              <div>
                <label className={labelClass}>
                  Filière <Req />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#615CA5] font-semibold mb-2">Licence</p>
                    <div className="space-y-2">
                      {PROGRAMMES.filter((p) => p.type === "licence").map((p) => (
                        <Radio
                          key={p.value}
                          name="programme"
                          value={p.value}
                          label={p.label}
                          checked={programme === p.value}
                          onChange={() => setProgramme(p.value)}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#615CA5] font-semibold mb-2">Maîtrise</p>
                    <div className="space-y-2">
                      {PROGRAMMES.filter((p) => p.type === "maitrise").map((p) => (
                        <Radio
                          key={p.value}
                          name="programme"
                          value={p.value}
                          label={p.label}
                          checked={programme === p.value}
                          onChange={() => setProgramme(p.value)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* SECTION 2 — Identité */}
          <Section number={2} title="Identité (telle qu'indiquée dans votre passeport)">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Prénom" required value={firstname} onChange={setFirstname} />
              <Field label="Nom" required value={lastname} onChange={setLastname} />
              <Field label="Second prénom" value={middlename} onChange={setMiddlename} placeholder="(optionnel)" className="sm:col-span-2" />

              <div>
                <label className={labelClass}>Sexe <Req /></label>
                <div className="flex gap-3">
                  <Radio name="sexe" value="M" label="Masculin" checked={sexe === "M"} onChange={() => setSexe("M")} />
                  <Radio name="sexe" value="F" label="Féminin" checked={sexe === "F"} onChange={() => setSexe("F")} />
                </div>
              </div>
              <div />

              <Field label="Date de naissance" required type="date" value={dateNaissance} onChange={handleDateNaissanceChange} />
              <Field label="Âge" type="number" value={age} onChange={setAge} placeholder="calculé auto" />

              <Field label="Ville de naissance" required value={villeNaissance} onChange={setVilleNaissance} />
              <Field label="Nationalité" required value={nationalite} onChange={setNationalite} placeholder="Française" />

              <Field label="Numéro de passeport" value={passeport} onChange={setPasseport} placeholder="(optionnel)" className="sm:col-span-2" />
            </div>
          </Section>

          {/* SECTION 3 — Adresse & contact */}
          <Section number={3} title="Adresse permanente & contact">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Numéro et rue" required value={adresseRue} onChange={setAdresseRue} placeholder="12 rue de la Paix" className="sm:col-span-2" />
              <Field label="Appartement n°" value={appartement} onChange={setAppartement} placeholder="(optionnel)" />
              <Field label="Code postal" value={zip} onChange={setZip} placeholder="75002" />
              <Field label="Ville" required value={ville} onChange={setVille} />
              <Field label="État / Région" value={etat} onChange={setEtat} placeholder="(optionnel)" />
              <Field label="Pays" required value={pays} onChange={setPays} className="sm:col-span-2" />
              <Field label="Téléphone" required type="tel" value={telephone} onChange={setTelephone} placeholder="+33 6 12 34 56 78" />
              <Field label="E-mail" required type="email" value={email} onChange={setEmail} placeholder="votre@email.com" />
            </div>
          </Section>

          {/* SECTION 4 — Niveau diplôme */}
          <Section number={4} title="Niveau de diplôme">
            <p className="text-sm text-[#64748b] mb-3">Cochez toutes les réponses qui s&apos;appliquent :</p>
            <div className="space-y-2.5">
              <Check
                checked={diplomeSecondaire}
                onChange={setDiplomeSecondaire}
                label="Je suis titulaire d'un diplôme d'études secondaires obtenu après au moins 12 ans de scolarité"
              />
              <Check
                checked={diplomeLicence}
                onChange={setDiplomeLicence}
                label="Je suis titulaire d'un diplôme de premier cycle / licence d'une durée minimale de 3 ans"
              />
              <Check
                checked={diplomeEnCours}
                onChange={setDiplomeEnCours}
                label="Je suis actuellement en dernière année de lycée ou de licence (diplôme final non encore disponible — certificat d'inscription à joindre)"
              />
            </div>
          </Section>

          {/* SECTION 5 — Pièces jointes */}
          <Section number={5} title="Pièces jointes">
            <p className="text-sm text-[#64748b] mb-4">Formats acceptés : PDF, JPG, PNG, HEIC. Max {MAX_FILE_SIZE_MB} Mo par fichier.</p>
            <div className="space-y-4">
              <FileInput
                label="Copie du baccalauréat (ou brevet pour les autres étudiants)"
                icon={<FileText className="w-5 h-5 text-[#EC680A]" />}
                file={fileBac}
                onChange={setFileBac}
                error={fileBacError}
                required
              />
              <FileInput
                label="Copie de la pièce d'identité (recto-verso)"
                icon={<CreditCard className="w-5 h-5 text-[#EC680A]" />}
                file={fileId}
                onChange={setFileId}
                error={fileIdError}
                required
              />
            </div>
          </Section>

          {/* SECTION 6 — Signature */}
          <Section number={6} title="Signature électronique">
            <p className="text-sm text-[#64748b] mb-3">
              En signant, je certifie que les informations fournies sont véridiques et complètes.
            </p>
            <SignatureCanvas onChange={setSignature} />
            <div className="mt-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accordRGPD}
                  onChange={(e) => setAccordRGPD(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#EC680A] cursor-pointer"
                />
                <span className="text-sm text-[#334155] leading-relaxed">
                  J&apos;accepte que mes données soient transmises à Edumove et à LINK Campus University pour le traitement de ma candidature. <Req />
                </span>
              </label>
            </div>
          </Section>

          {/* Erreur */}
          {submitState === "error" && errorMsg && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{errorMsg}</p>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <Link
              href="/candidature-test-link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#64748b] hover:text-[#1B1D3A] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la page candidature
            </Link>
            <button
              type="submit"
              disabled={!isValid || submitState === "submitting"}
              className="group inline-flex items-center justify-center gap-2 bg-[#EC680A] hover:bg-[#D45E09] disabled:opacity-50 disabled:cursor-not-allowed text-white text-base font-semibold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#EC680A]/30 hover:gap-3"
            >
              {submitState === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Envoyer mon dossier
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
          {!isValid && submitState !== "submitting" && (
            <p className="text-xs text-[#94a3b8] text-right">
              Tous les champs obligatoires doivent être remplis (incluant les pièces jointes et la signature).
            </p>
          )}
        </div>
      </form>
    </main>
  );
}

/* ───────── SUB-COMPONENTS ───────── */

function Req() {
  return <span className="text-[#EC680A]"> *</span>;
}

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#615CA5] to-[#EC680A]/80 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#615CA5]/20">
          {number}
        </div>
        <h2 className="font-bold text-[#1B1D3A] text-lg md:text-xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={labelClass}>
        {label}
        {required && <Req />}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

function Radio({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer text-sm text-[#1B1D3A] py-1">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-0.5 w-4 h-4 accent-[#EC680A] cursor-pointer shrink-0"
      />
      <span>{label}</span>
    </label>
  );
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4 accent-[#EC680A] cursor-pointer shrink-0"
      />
      <span className="text-sm text-[#334155] leading-relaxed">{label}</span>
    </label>
  );
}

function FileInput({
  label,
  icon,
  file,
  onChange,
  error,
  required,
}: {
  label: string;
  icon: React.ReactNode;
  file: File | null;
  onChange: (f: File | null) => void;
  error: string | null;
  required?: boolean;
}) {
  const id = `file-${label.slice(0, 10).replace(/\s/g, "")}`;
  return (
    <div>
      <label htmlFor={id} className={`${labelClass} flex items-center gap-2`}>
        {icon}
        {label}
        {required && <Req />}
      </label>
      <label
        htmlFor={id}
        className={`flex items-center gap-3 cursor-pointer rounded-xl border-2 border-dashed px-4 py-3 transition ${
          error
            ? "border-red-300 bg-red-50/50"
            : file
              ? "border-[#EC680A]/60 bg-[#EC680A]/5"
              : "border-gray-300 hover:border-[#EC680A]/60 bg-white"
        }`}
      >
        {file ? (
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
        ) : (
          <Upload className="w-5 h-5 text-[#94A3B8] shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          {file ? (
            <>
              <p className="text-sm font-medium text-[#1B1D3A] truncate">{file.name}</p>
              <p className="text-xs text-[#64748b]">{(file.size / 1024 / 1024).toFixed(2)} Mo</p>
            </>
          ) : (
            <p className="text-sm text-[#64748b]">Cliquer pour choisir un fichier (PDF, JPG, PNG)</p>
          )}
        </div>
        {file && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onChange(null);
            }}
            className="text-xs font-semibold text-[#615CA5] hover:text-[#EC680A]"
          >
            Changer
          </button>
        )}
      </label>
      <input
        id={id}
        type="file"
        accept={ACCEPTED_FORMATS}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        className="sr-only"
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
