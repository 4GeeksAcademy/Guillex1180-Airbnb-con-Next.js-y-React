"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteHeader } from "@/components/layout/site-header";
import AmenitiesGrid from "@/components/rooms/amenities-grid";
import BookingCard from "@/components/rooms/booking-card";
import HostInfo from "@/components/rooms/host-info";
import PhotoGallery from "@/components/rooms/photo-gallery";
import RoomHeader from "@/components/rooms/room-header";
import RoomLoading from "@/components/rooms/room-loading";
import { getStayById, type Stay } from "@/lib/stays";

const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const [stay, setStay] = useState<Stay | null>(null);
  const [loadedId, setLoadedId] = useState<string | null>(null);

  const isLoading = loadedId !== params.id;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setStay(getStayById(params.id));
      setLoadedId(params.id);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [params.id]);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1880px] px-4 pb-24 pt-8 md:px-6 md:pb-[72px] md:pt-10">
        <Link href="/catalog" className="text-sm font-semibold text-[#e31c5f]">
          Volver al catálogo
        </Link>
        <div className="mt-5">
          {isLoading ? <RoomLoading /> : stay ? <RoomDetails stay={stay} /> : <RoomEmpty />}
        </div>
      </main>
      <MobileNav />
    </div>
  );
};

const RoomDetails = ({ stay }: { stay: Stay }) => {
  return (
    <div className="space-y-8">
      <RoomHeader stay={stay} />
      <PhotoGallery items={stay.gallery} gradient={stay.gradient} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <div className="space-y-6">
          <HostInfo host={stay.host} years={stay.hostYears} />
          <section className="rounded-[28px] border border-[#dddddd] bg-white p-5">
            <h2 className="text-2xl font-semibold text-[#1f1b18]">Descripción</h2>
            <p className="mt-4 text-base leading-7 text-[#6a6a6a]">{stay.description}</p>
          </section>
          <AmenitiesGrid items={stay.amenities} />
        </div>
        <BookingCard price={stay.price} maxGuests={stay.guests} />
      </div>
    </div>
  );
};

const RoomEmpty = () => {
  return <div className="rounded-[28px] border border-dashed border-[#dddddd] bg-white p-8 text-[#6a6a6a]">No encontramos este alojamiento.</div>;
};

export default RoomPage;