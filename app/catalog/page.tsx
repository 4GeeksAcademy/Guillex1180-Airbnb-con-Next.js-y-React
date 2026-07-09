"use client";

import { useState } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteHeader } from "@/components/layout/site-header";
import { StayCard } from "@/components/stays/stay-card";
import { getCatalogStays } from "@/lib/stays";

const guestOptions = [
  { value: 1, label: "1 huésped" },
  { value: 2, label: "2 huéspedes" },
  { value: 3, label: "3 huéspedes" },
  { value: 4, label: "4 huéspedes" },
  { value: 5, label: "5+ huéspedes" },
];

const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedGuests, setSelectedGuests] = useState(1);
  const stays = getCatalogStays();

  const filteredStays = stays.filter((stay) => stay.guests >= selectedGuests);

  const sortedStays = [...filteredStays].sort((left, right) => {
    return sortOrder === "asc" ? left.price - right.price : right.price - left.price;
  });

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1880px] px-4 pb-24 pt-8 md:px-6 md:pb-[72px] md:pt-10">
        <section className="flex flex-col gap-4 rounded-[32px] border border-[#dddddd] bg-white p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6a6a6a]">
              {sortedStays.length} resultados encontrados
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-[#1f1b18]">Catálogo de alojamientos</h1>
          </div>

          <label className="flex items-center gap-3 text-sm font-medium text-[#6a6a6a]">
            Ordenar por precio
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
              className="rounded-full border border-[#dddddd] bg-white px-4 py-2 text-[#1f1b18] outline-none focus:border-[#ff385c]"
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </label>
        </section>

        <section className="mt-4 grid gap-4 rounded-[32px] border border-[#dddddd] bg-white p-5 md:grid-cols-3">
          <label className="text-sm font-medium text-[#6a6a6a]">
            Check-in
            <input
              type="date"
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#dddddd] px-4 py-3 text-[#1f1b18] outline-none focus:border-[#ff385c]"
            />
          </label>
          <label className="text-sm font-medium text-[#6a6a6a]">
            Check-out
            <input
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(event) => setCheckOut(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#dddddd] px-4 py-3 text-[#1f1b18] outline-none focus:border-[#ff385c]"
            />
          </label>
          <label className="text-sm font-medium text-[#6a6a6a]">
            Huéspedes
            <select
              value={selectedGuests}
              onChange={(event) => setSelectedGuests(Number(event.target.value))}
              className="mt-2 w-full rounded-2xl border border-[#dddddd] bg-white px-4 py-3 text-[#1f1b18] outline-none focus:border-[#ff385c]"
            >
              {guestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="mt-4 rounded-[24px] border border-[#ebebeb] bg-[#fff8f6] p-4 text-sm text-[#6a6a6a]">
          <p>Fechas seleccionadas: {checkIn || "sin fecha de entrada"} - {checkOut || "sin fecha de salida"}</p>
          <p className="mt-1">Capacidad mínima filtrada: {selectedGuests} huésped(es)</p>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {sortedStays.map((stay) => (
              <StayCard key={stay.slug} stay={stay} />
            ))}
          </div>

          <aside className="order-last lg:order-none lg:sticky lg:top-24">
            <div className="flex min-h-72 items-center justify-center rounded-[32px] bg-slate-200 text-2xl font-semibold text-slate-600 lg:min-h-[calc(100vh-10rem)]">
              Mapa
            </div>
          </aside>
        </section>
      </main>
      <MobileNav />
    </div>
  );
};

export default CatalogPage;