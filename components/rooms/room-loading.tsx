const RoomLoading = () => {
  return (
    <div className="rounded-[32px] border border-[#dddddd] bg-white p-10 text-center">
      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#ffe3e8] border-t-[#ff385c]" />
      <p className="mt-4 text-sm font-medium text-[#6a6a6a]">
        Cargando detalle del alojamiento...
      </p>
    </div>
  );
};

export default RoomLoading;