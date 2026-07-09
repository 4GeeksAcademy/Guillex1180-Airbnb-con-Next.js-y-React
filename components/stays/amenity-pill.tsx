type AmenityPillProps = {
  label: string;
};

const AmenityPill = ({ label }: AmenityPillProps) => {
  return (
    <div className="rounded-full border border-[#dddddd] bg-white px-4 py-2 text-sm font-medium text-[#6a6a6a]">
      {label}
    </div>
  );
};

export { AmenityPill };