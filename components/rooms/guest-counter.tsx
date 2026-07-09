type GuestCounterProps = {
  guests: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

const GuestCounter = ({ guests, min, max, onChange }: GuestCounterProps) => {
  return (
    <div className="rounded-[22px] border border-[#dddddd] bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a6a6a]">
        Huéspedes
      </p>
      <div className="mt-3 flex items-center justify-between">
        <button type="button" onClick={() => onChange(Math.max(min, guests - 1))} className="h-10 w-10 rounded-full border border-[#dddddd] text-lg text-[#1f1b18]">
          -
        </button>
        <span className="text-lg font-semibold text-[#1f1b18]">{guests}</span>
        <button type="button" onClick={() => onChange(Math.min(max, guests + 1))} className="h-10 w-10 rounded-full border border-[#dddddd] text-lg text-[#1f1b18]">
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;