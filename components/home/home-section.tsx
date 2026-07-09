import { StayCard } from "@/components/stays/stay-card";
import type { Stay } from "@/lib/stays";

type HomeSectionProps = {
  title: string;
  stays: Stay[];
};

const HomeSection = ({ title, stays }: HomeSectionProps) => {
  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#222222]">
          {title} <span aria-hidden="true">→</span>
        </h2>
        <div className="hidden items-center gap-2 md:flex">
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f2f2] text-[#6a6a6a]">‹</button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f2f2] text-[#222222]">›</button>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {stays.map((stay, index) => (
          <div key={`${stay.id}-${index}`} className="w-[260px] shrink-0 md:w-[250px] xl:w-[255px]">
            <StayCard stay={stay} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;