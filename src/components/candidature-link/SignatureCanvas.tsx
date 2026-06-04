"use client";

import { useEffect, useRef, useState } from "react";
import { Eraser, Pen } from "lucide-react";

interface SignatureCanvasProps {
  /** Called with base64 PNG when signature changes, or null when cleared */
  onChange: (dataUrl: string | null) => void;
  width?: number;
  height?: number;
}

/**
 * Canvas pour dessiner une signature à la souris ou au tactile.
 * Renvoie la signature en base64 PNG via onChange.
 */
export default function SignatureCanvas({
  onChange,
  width = 560,
  height = 180,
}: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const getCtx = () => canvasRef.current?.getContext("2d") ?? null;

  // Init canvas (white background, drawing settings)
  useEffect(() => {
    const ctx = getCtx();
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const canvas = canvasRef.current!;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#1B1D3A";
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [width, height]);

  const getCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const emit = () => {
    if (!canvasRef.current) return;
    if (!hasSignature) {
      onChange(null);
      return;
    }
    onChange(canvasRef.current.toDataURL("image/png"));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    setHasSignature(true);
    const p = getCoords(e);
    lastPointRef.current = p;
    const ctx = getCtx();
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
    ctx.fillStyle = "#1B1D3A";
    ctx.fill();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const ctx = getCtx();
    if (!ctx) return;
    const p = getCoords(e);
    const last = lastPointRef.current;
    if (last) {
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    lastPointRef.current = p;
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    lastPointRef.current = null;
    emit();
  };

  const handleClear = () => {
    const ctx = getCtx();
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    setHasSignature(false);
    onChange(null);
  };

  return (
    <div>
      <div className="relative bg-white border-2 border-dashed border-gray-300 rounded-xl overflow-hidden touch-none">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="block cursor-crosshair w-full"
          style={{ maxWidth: width }}
        />
        {!hasSignature && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#94A3B8] text-sm">
            <Pen className="w-4 h-4 mr-2" />
            Signez ici avec la souris ou le doigt
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-xs text-[#64748b]">
          Cette signature électronique est conservée avec votre dossier.
        </p>
        <button
          type="button"
          onClick={handleClear}
          disabled={!hasSignature}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#615CA5] hover:text-[#EC680A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Eraser className="w-3.5 h-3.5" />
          Effacer
        </button>
      </div>
    </div>
  );
}
