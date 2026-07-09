type FilterChipProps = {
  label: string;
  active?: boolean;
};

const FilterChip = ({ label, active = false }: FilterChipProps) => {
  return (
    <button
      type="button"
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-[#ff385c] bg-[#ffe3e8] text-[#e31c5f]"
          : "border-[#dddddd] bg-white text-[#6a6a6a] hover:border-[#ff385c] hover:text-[#1f1b18]"
      }`}
    >
      {label}
    </button>
  );
};

export { FilterChip };