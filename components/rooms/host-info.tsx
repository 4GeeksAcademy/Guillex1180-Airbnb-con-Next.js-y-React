type HostInfoProps = {
  host: string;
  years: number;
};

const HostInfo = ({ host, years }: HostInfoProps) => {
  return (
    <section className="rounded-[28px] border border-[#dddddd] bg-white p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe3e8] text-lg font-semibold text-[#e31c5f]">
          {host.slice(0, 1)}
        </div>
        <div>
          <p className="text-lg font-semibold text-[#1f1b18]">Anfitrión: {host}</p>
          <p className="text-sm text-[#6a6a6a]">{years} años de experiencia hospedando</p>
        </div>
      </div>
    </section>
  );
};

export default HostInfo;