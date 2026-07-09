"use client";

import { useState } from "react";

import GuestCounter from "@/components/rooms/guest-counter";

type BookingCardProps = {
  price: number;
  maxGuests: number;
};

const BookingCard = ({ price, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights = checkIn && checkOut
    ? Math.max(
        1,
        Math.ceil(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      )
    : 1;
  const total = price * guests * nights;

  return (
    <aside className="rounded-[30px] border border-[#dddddd] bg-white p-5 shadow-[0_16px_38px_rgba(43,31,20,0.08)]">
      <p className="text-2xl font-semibold text-[#1f1b18]">${price} <span className="text-sm font-medium text-[#6a6a6a]">/ noche</span></p>
      <p className="mt-1 text-sm text-[#6a6a6a]">Selecciona cuántos huéspedes viajarán.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
      </div>
      <div className="mt-5">
        <GuestCounter guests={guests} min={1} max={maxGuests} onChange={setGuests} />
      </div>
      <button type="button" className="mt-5 w-full rounded-full bg-[#ff385c] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#e31c5f]">
        Reservar ahora
      </button>
      <div className="mt-5 text-sm text-[#6a6a6a]">
        <div className="flex items-center justify-between">
          <span>${price} x {guests} huésped(es) x {nights} noche(s)</span>
          <span>${total}</span>
        </div>
      </div>
    </aside>
  );
};

export default BookingCard;