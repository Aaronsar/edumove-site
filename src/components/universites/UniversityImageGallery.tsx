"use client";

import Image from "next/image";
import type { UniversityImage } from "@/data/university-images";

interface UniversityImageGalleryProps {
  images: UniversityImage[];
}

export default function UniversityImageGallery({ images }: UniversityImageGalleryProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#EC680A] mb-2">
          Découvrir le campus
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1D3A] mb-8">
          En images
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, 4).map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
