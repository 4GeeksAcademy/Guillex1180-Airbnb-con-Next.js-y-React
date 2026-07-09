import Link from "next/link";

import type { Stay } from "@/lib/stays";

type StayCardProps = {
  stay: Stay;
};

const StayCard = ({ stay }: StayCardProps) => {
  return (
    <Link href={`/rooms/${stay.id}`} className="block">
      <article className="transition hover:opacity-90">
        <div className={`relative h-[235px] overflow-hidden rounded-[22px] bg-gradient-to-br ${stay.gradient}`}>
          <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#222222] shadow-sm">
            Favorito entre huéspedes
          </div>
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/15 text-lg text-white">
            ♡
          </div>
          <div className="flex h-full items-end p-4">
            <div>
              <p className="text-sm font-medium text-white/80">Placeholder de foto</p>
              <p className="mt-1 text-xl font-semibold text-white">{stay.city}, {stay.country}</p>
            </div>
          </div>
        </div>
        <div className="pt-3 text-[#222222]">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-[18px] font-medium">{stay.type} en {stay.city}</h3>
            <p className="shrink-0 text-sm font-medium">★ {stay.rating}</p>
          </div>
          <p className="mt-1 text-sm text-[#717171]">{stay.dates}</p>
          <p className="mt-1 text-sm text-[#717171]">${stay.price.toLocaleString()} MXN en total</p>
        </div>
      </article>
    </Link>
  );
};

export { StayCard };