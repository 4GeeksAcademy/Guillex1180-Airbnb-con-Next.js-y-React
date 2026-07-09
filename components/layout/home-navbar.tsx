"use client";

type HomeNavbarProps = {
  searchText: string;
  onSearchTextChange: (value: string) => void;
  checkIn: string;
  checkOut: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  selectedGuests: number;
  guestOptions: Array<{
    value: number;
    label: string;
  }>;
  onGuestsChange: (value: number) => void;
};

const topTabs = ["Todo", "Alojamientos", "Experiencias", "Servicios"];

const HomeNavbar = ({
  searchText,
  onSearchTextChange,
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  selectedGuests,
  guestOptions,
  onGuestsChange,
}: HomeNavbarProps) => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#ebebeb] bg-white">
      <div className="mx-auto w-full max-w-[1880px] px-4 py-4 md:px-6 md:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-[22px] font-semibold tracking-[-0.04em] text-[#ff385c]">airbnb</div>
          <nav className="hidden items-center gap-10 lg:flex">
            {topTabs.map((tab, index) => (
              <button key={tab} type="button" className={`pb-4 text-base ${index === 0 ? "border-b-2 border-[#222222] font-semibold text-[#222222]" : "text-[#6a6a6a]"}`}>
                {tab}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden text-sm font-medium text-[#222222] md:block">Conviértete en anfitrión</div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f2] text-sm">◍</div>
            <div className="flex items-center gap-3 rounded-full border border-[#dddddd] px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
              <span className="text-sm">☰</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#717171] text-xs font-semibold text-white">U</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 overflow-hidden rounded-full border border-[#dddddd] shadow-[0_6px_20px_rgba(0,0,0,0.08)] md:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div className="border-b border-[#dddddd] px-6 py-3 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold text-[#222222]">Destino</p>
            <input type="text" value={searchText} onChange={(event) => onSearchTextChange(event.target.value)} placeholder="Buscar destinos" className="mt-1 w-full border-0 p-0 text-base text-[#717171] outline-none placeholder:text-[#717171]" />
          </div>
          <div className="border-b border-[#dddddd] px-6 py-3 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold text-[#222222]">Fechas</p>
            <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                type="date"
                value={checkIn}
                onChange={(event) => onCheckInChange(event.target.value)}
                className="w-full rounded-md border border-[#ebebeb] px-2 py-1 text-sm text-[#717171] outline-none focus:border-[#ff385c]"
              />
              <input
                type="date"
                value={checkOut}
                min={checkIn || undefined}
                onChange={(event) => onCheckOutChange(event.target.value)}
                className="w-full rounded-md border border-[#ebebeb] px-2 py-1 text-sm text-[#717171] outline-none focus:border-[#ff385c]"
              />
            </div>
          </div>
          <div className="px-6 py-3 md:border-r">
            <p className="text-xs font-semibold text-[#222222]">Huéspedes</p>
            <select
              value={selectedGuests}
              onChange={(event) => onGuestsChange(Number(event.target.value))}
              className="mt-1 w-full bg-transparent text-base text-[#717171] outline-none"
            >
              {guestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center p-3">
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e31c5f] text-lg text-white">⌕</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { HomeNavbar };