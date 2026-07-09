type BookingCardProps = {
  price: number;
  rating: number;
  reviews: number;
};

const BookingCard = ({ price, rating, reviews }: BookingCardProps) => {
  return (
    <aside className="rounded-[30px] border border-[#dddddd] bg-white/90 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-2xl font-semibold text-[#1f1b18]">${price}</p>
          <p className="text-sm text-[#6a6a6a]">per night before taxes</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-[#1f1b18]">{rating} star</p>
          <p className="text-xs text-[#6a6a6a]">{reviews} reviews</p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-[24px] border border-[#dddddd] bg-white">
        <div className="grid grid-cols-2 border-b border-[#dddddd]">
          <div className="p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a6a6a]">
              Check in
            </p>
            <p className="mt-1 text-sm font-semibold text-[#1f1b18]">Oct 14</p>
          </div>
          <div className="border-l border-[#dddddd] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a6a6a]">
              Check out
            </p>
            <p className="mt-1 text-sm font-semibold text-[#1f1b18]">Oct 19</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6a6a6a]">
            Guests
          </p>
          <p className="mt-1 text-sm font-semibold text-[#1f1b18]">2 guests</p>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-full bg-[#ff385c] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#e31c5f]"
      >
        Reserve
      </button>

      <div className="mt-5 space-y-3 text-sm text-[#6a6a6a]">
        <div className="flex items-center justify-between">
          <span>${price} x 5 nights</span>
          <span>${price * 5}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Cleaning fee</span>
          <span>$48</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Service fee</span>
          <span>$36</span>
        </div>
        <div className="flex items-center justify-between border-t border-[#dddddd] pt-3 text-base font-semibold text-[#1f1b18]">
          <span>Total</span>
          <span>${price * 5 + 84}</span>
        </div>
      </div>
    </aside>
  );
};

export { BookingCard };