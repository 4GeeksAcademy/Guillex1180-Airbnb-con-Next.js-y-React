import Link from "next/link";

const SearchPanel = () => {
  return (
    <div className="rounded-[32px] border border-[#dddddd] bg-white/90 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md md:p-5">
      <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto] md:items-center">
        <div className="rounded-[24px] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a6a6a]">
            Where
          </p>
          <p className="mt-1 text-base font-semibold text-[#1f1b18]">Barcelona, Lisbon or Marseille</p>
        </div>
        <div className="rounded-[24px] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a6a6a]">
            Check in
          </p>
          <p className="mt-1 text-base font-semibold text-[#1f1b18]">Any week in October</p>
        </div>
        <div className="rounded-[24px] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6a6a6a]">
            Guests
          </p>
          <p className="mt-1 text-base font-semibold text-[#1f1b18]">2 travelers</p>
        </div>
        <Link
          href="/catalog"
          className="flex h-full min-h-14 items-center justify-center rounded-[24px] bg-[#ff385c] px-6 text-base font-semibold text-white transition hover:bg-[#e31c5f]"
        >
          Search stays
        </Link>
      </div>
    </div>
  );
};

export { SearchPanel };