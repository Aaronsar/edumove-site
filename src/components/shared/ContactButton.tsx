"use client";

import { useState } from "react";
import HubSpotModal from "./HubSpotModal";

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContactButton({
  className = "",
  children = "Être contacté",
}: ContactButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <HubSpotModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
