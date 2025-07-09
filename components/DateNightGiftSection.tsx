import Image from "next/image";

export default function DateNightGiftSection() {
  return (
    <section className="bg-spa-neutral py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
        {/* Spa Date Night Block */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-white rounded-sm shadow-lg p-10 flex flex-col justify-center min-h-[260px]">
            <h2 className="text-2xl md:text-3xl font-light text-spa-secondary mb-4">
              Spa Date Night
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              We would like to invite you to book our divine spa room for an
              evening under the stars with your loved one.
            </p>
            <button className="btn-spa-accent text-base px-8 py-3 w-fit">
              <span>Read More</span>
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/back.jpg"
                alt="Spa Date Night"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* Gift Vouchers Block */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="">
            <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/front.jpg"
                alt="Gift Vouchers"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="bg-white rounded-sm shadow-lg p-10 flex flex-col justify-center min-h-[260px]">
            <h2 className="text-2xl md:text-3xl font-light text-spa-secondary mb-4">
              Gift Vouchers
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              Treat that someone special
            </p>
            <button className="btn-spa-accent text-base px-8 py-3 w-fit">
              <span>Purchase</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
