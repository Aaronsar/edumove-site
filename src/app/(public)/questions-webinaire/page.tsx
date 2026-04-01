"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function QuestionsWebinaire() {
  const [prenom, setPrenom] = useState("");
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!prenom.trim() || !question.trim() || sending) return;
    setSending(true);
    const supabase = createClient();
    await supabase.from("webinar_questions").insert({
      prenom: prenom.trim(),
      question: question.trim(),
      event_slug: "webinaire-15-04",
    });
    setSent(true);
    setQuestion("");
    setTimeout(() => setSent(false), 3000);
    setSending(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eeedf5] via-[#f9f5f0] to-[#fdecd8] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <img src="/edumove-icon-orange.svg" alt="Edumove" className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-[#1B1D3A] text-2xl font-bold mb-2">Posez votre question</h1>
          <p className="text-[#64748b] text-sm">Webinaire Edumove × LCL — Financement santé</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="mb-4">
            <label className="block text-[#1B1D3A] text-sm font-semibold mb-1.5">Votre prénom</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Ex: Marie"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#1B1D3A] text-sm focus:outline-none focus:border-[#EC680A] focus:ring-2 focus:ring-[#EC680A]/20 transition-all"
            />
          </div>
          <div className="mb-5">
            <label className="block text-[#1B1D3A] text-sm font-semibold mb-1.5">Votre question</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tapez votre question ici..."
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#1B1D3A] text-sm focus:outline-none focus:border-[#EC680A] focus:ring-2 focus:ring-[#EC680A]/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 bg-[#EC680A] hover:bg-[#D45E09] text-white font-semibold rounded-xl transition-all disabled:opacity-50"
          >
            {sending ? "Envoi..." : "Envoyer ma question"}
          </button>
          {sent && (
            <p className="text-green-600 text-sm text-center mt-3 font-medium">
              ✓ Question envoyée ! Elle apparaîtra à l&apos;écran.
            </p>
          )}
        </form>

        <p className="text-center text-[#94a3b8] text-xs mt-6">
          Votre question sera affichée en direct pendant le webinaire.
        </p>
      </div>
    </div>
  );
}
