"use client";
import Image from "next/image";
import { ArrowRight, Gift, CreditCard, X } from "lucide-react";
import { useState } from "react";

export default function DateNightGiftSection() {
  const [showGiftCard, setShowGiftCard] = useState(false);
  const amounts = [50, 75, 100, 150, 200];
  const [selected, setSelected] = useState(amounts[0]);
  const [custom, setCustom] = useState("");

  return (
    <section className="bg-spa-neutral py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
            Special Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unique moments and thoughtful gifts to make your wellness journey
            even more memorable.
          </p>
        </div>
        {/* Spa Date Night Block */}
        <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-lg overflow-hidden shadow-lg">
          <div className="order-2 md:order-1 bg-white flex flex-col justify-center p-10 min-h-64 h-full">
            <h2 className="text-2xl md:text-3xl font-light text-spa-secondary mb-4">
              Spa Date Night
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              We would like to invite you to book our divine spa room for an
              evening under the stars with your loved one.
            </p>
            <button className="btn-spa-accent text-base px-8 py-3 w-fit inline-flex items-center gap-2 group">
              <span>Read More</span>
              <ArrowRight className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
            </button>
          </div>
          <div className="order-1 md:order-2 h-64 md:h-80 relative">
            <Image
              src="/back.jpg"
              alt="Spa Date Night"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        {/* Gift Vouchers Block */}
        <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-lg overflow-hidden shadow-lg">
          <div className="h-64 md:h-80 relative">
            <Image
              src="/front.jpg"
              alt="Gift Vouchers"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="bg-white flex flex-col justify-center p-10 min-h-64 h-full">
            <h2 className="text-2xl md:text-3xl font-light text-spa-secondary mb-4">
              Gift Vouchers
            </h2>
            <p className="text-gray-700 mb-8 max-w-md">
              Treat that someone special
            </p>
            <button
              className="btn-spa-accent text-base px-8 py-3 w-fit inline-flex items-center gap-2 group"
              onClick={() => setShowGiftCard(true)}
            >
              <span>Purchase</span>
              <Gift className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
            </button>
            {showGiftCard && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-spa-secondary">
                      Gift Voucher
                    </h2>
                    <button
                      onClick={() => setShowGiftCard(false)}
                      className="ml-4 text-spa-secondary hover:text-spa-accent cursor-pointer p-1"
                      aria-label="Close"
                    >
                      <X className="w-8 h-8" />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Select an amount and give the gift of wellness. All prices
                    are in AUD.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4 justify-center">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => {
                          setSelected(amt);
                          setCustom("");
                        }}
                        className={`w-24 px-0 py-3 rounded border font-medium transition-colors duration-300 cursor-pointer text-center ${
                          selected === amt && !custom
                            ? "bg-spa-accent text-spa-secondary border-spa-accent"
                            : "bg-white text-spa-secondary border-gray-300 hover:bg-spa-accent hover:text-spa-secondary"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Custom"
                      value={custom}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setCustom(val);
                        setSelected(0);
                      }}
                      className={`w-24 px-0 py-3 rounded border font-medium transition-all duration-200 text-center appearance-none focus:outline-none focus:ring-2 focus:ring-spa-accent ${
                        custom
                          ? "bg-spa-accent/10 border-spa-accent text-spa-secondary"
                          : "bg-white border-gray-300 text-spa-secondary"
                      }`}
                    />
                  </div>
                  <button
                    className="btn-spa-accent text-base px-8 py-3 w-full flex items-center justify-center gap-2 group mt-4 mx-auto"
                    onClick={async () => {
                      const amt = custom ? Number(custom) : selected;
                      if (!amt || amt < 1) return;
                      const res = await fetch("/api/create-checkout-session", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ amount: amt }),
                      });
                      const data = await res.json();
                      if (data.url) window.location.href = data.url;
                    }}
                  >
                    <span>Purchase Voucher</span>
                    <CreditCard className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
