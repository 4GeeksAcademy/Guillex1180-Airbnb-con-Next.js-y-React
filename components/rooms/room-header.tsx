import type { Stay } from "@/lib/stays";

type RoomHeaderProps = {
  stay: Stay;
};

const RoomHeader = ({ stay }: RoomHeaderProps) => {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff385c]">
        {stay.location}
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#1f1b18] md:text-5xl">
        {stay.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#6a6a6a]">
        <span className="font-semibold text-[#1f1b18]">★ {stay.rating}</span>
        <span>{stay.reviews} reseñas</span>
        <span>{stay.city}, {stay.country}</span>
      </div>
    </section>
  );
};

export default RoomHeader;