"use client";

import HubSpotEmbedModal from "@/components/shared/HubSpotEmbedModal";
import type { EdumoveFormKey } from "@/components/shared/EdumoveFormIframe";

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Clé du form à afficher. Défaut : "qualification" */
  form?: EdumoveFormKey | string;
  title?: string;
  subtitle?: string;
}

/**
 * Wrapper rétro-compatible pour HubSpotModal.
 * Utilise désormais le form iframe Edumove (hub.diploma-sante.fr).
 * Par défaut, affiche le formulaire de QUALIFICATION (utilisé pour les
 * boutons "Être contacté" / "Candidater" sur l'ensemble du site).
 */
export default function HubSpotModal({
  isOpen,
  onClose,
  form = "qualification",
  title = "Être contacté par un conseiller",
  subtitle = "Un conseiller Edumove vous rappelle sous 24h pour répondre à vos questions. 100% gratuit, sans engagement.",
}: HubSpotModalProps) {
  return (
    <HubSpotEmbedModal
      isOpen={isOpen}
      onClose={onClose}
      form={form}
      title={title}
      subtitle={subtitle}
    />
  );
}
