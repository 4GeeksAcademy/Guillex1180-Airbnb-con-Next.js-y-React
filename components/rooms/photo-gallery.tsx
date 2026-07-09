"use client";

import { useState } from "react";

type PhotoGalleryProps = {
  items: string[];
  gradient: string;
};

const PhotoGallery = ({ items, gradient }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((value) => (value === 0 ? items.length - 1 : value - 1));
  const next = () => setIndex((value) => (value === items.length - 1 ? 0 : value + 1));

  return (
    <section className={`rounded-[32px] bg-gradient-to-br ${gradient} p-6 text-white`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
        Galería
      </p>
      <div className="mt-6 rounded-[24px] bg-black/10 p-10 text-center">
        <p className="text-sm text-white/70">Placeholder de imagen</p>
        <p className="mt-3 text-3xl font-semibold">{items[index]}</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <button type="button" onClick={previous} className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
          Anterior
        </button>
        <span className="text-sm text-white/80">{index + 1} / {items.length}</span>
        <button type="button" onClick={next} className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default PhotoGallery;