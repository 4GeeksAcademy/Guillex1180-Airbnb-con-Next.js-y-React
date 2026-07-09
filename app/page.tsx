"use client";

import { useEffect, useState } from "react";

import HomeSection from "@/components/home/home-section";
import { HomeNavbar } from "@/components/layout/home-navbar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { categories, stays, type Stay } from "@/lib/stays";

const guestOptions = [
  { value: 1, label: "1 huésped" },
  { value: 2, label: "2 huéspedes" },
  { value: 3, label: "3 huéspedes" },
  { value: 4, label: "4 huéspedes" },
  { value: 5, label: "5+ huéspedes" },
];

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [loadedStays, setLoadedStays] = useState<Stay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedGuests, setSelectedGuests] = useState(1);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLoadedStays(stays);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const visibleStays = loadedStays.filter((stay) => {
    const matchesCategory = activeCategory === "Todas" || stay.category === activeCategory;
    const normalizedQuery = searchText.trim().toLowerCase();
    const matchesGuests = stay.guests >= selectedGuests;

    if (!normalizedQuery) {
      return matchesCategory && matchesGuests;
    }

    const matchesSearch = [stay.title, stay.city, stay.country, stay.tagline]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);

    return matchesCategory && matchesSearch && matchesGuests;
  });

  const homeCategories = ["Todas", ...categories];
  const duplicatedStays = [...visibleStays, ...visibleStays];
  const firstRow = duplicatedStays.slice(0, 7);
  const secondRow = duplicatedStays.slice(2, 9);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <HomeNavbar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        checkIn={checkIn}
        checkOut={checkOut}
        onCheckInChange={setCheckIn}
        onCheckOutChange={setCheckOut}
        selectedGuests={selectedGuests}
        guestOptions={guestOptions}
        onGuestsChange={setSelectedGuests}
      />
      <main className="border-t border-[#ebebeb] pt-10">
        <div className="mx-auto w-full max-w-[1880px] px-4 pb-24 md:px-6 md:pb-[72px]">
          <section className="mb-6 rounded-[24px] border border-[#ebebeb] bg-[#fff8f6] p-4 text-sm text-[#6a6a6a]">
            <p>
              Fechas seleccionadas: {checkIn || "sin fecha de entrada"} - {checkOut || "sin fecha de salida"}
            </p>
            <p className="mt-1">Capacidad mínima filtrada: {selectedGuests} huésped(es)</p>
          </section>
          <section>
            <div className="mt-2 flex gap-3 overflow-x-auto pb-2">
              {homeCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-[#222222] text-white"
                      : "border border-[#dddddd] bg-white text-[#6a6a6a]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>
          {isLoading ? (
            <div className="mt-10 rounded-[28px] border border-[#ebebeb] bg-white p-8 text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#ffe3e8] border-t-[#ff385c]" />
              <p className="mt-4 text-sm font-medium text-[#6a6a6a]">Cargando alojamientos...</p>
            </div>
          ) : visibleStays.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-dashed border-[#dddddd] bg-white p-8 text-center text-[#6a6a6a]">
              No hay resultados para esa búsqueda o categoría.
            </div>
          ) : (
            <>
              <HomeSection title="Alojamientos populares en Playa del Carmen" stays={firstRow} />
              <HomeSection title="Disponibles el mes que viene en Cancún" stays={secondRow} />
            </>
          )}
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

export default Home;
