"use client";
import Image from "next/image";
import { useState } from "react";
import { Gift, ArrowRight } from "lucide-react";

const amounts = [50, 75, 100, 150, 200];

export default function GiftVoucherPage() {
  const [selected, setSelected] = useState(amounts[0]);

  return (
    <section className="bg-spa-neutral min-h-screen py-20 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/front.jpg"
            alt="Gift Voucher"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-light text-spa-secondary mb-2">
            Gift Voucher
          </h1>
          <p className="text-gray-700 mb-6">
            Select an amount and give the gift of wellness. All prices are in
            AUD.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setSelected(amt)}
                className={`px-6 py-3 rounded border font-medium transition-all duration-200 cursor-pointer ${
                  selected === amt
                    ? "bg-spa-accent text-spa-secondary border-spa-accent"
                    : "bg-white text-spa-secondary border-gray-300 hover:bg-spa-accent/20"
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
          <button className="btn-spa-accent text-base px-8 py-3 w-fit inline-flex items-center gap-2 group">
            <span>Purchase Voucher</span>
            <ArrowRight className="w-5 h-5 z-10 transition-colors duration-300 group-hover:text-spa-accent" />
          </button>
        </div>
      </div>
    </section>
  );
}
