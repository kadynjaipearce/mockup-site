"use client";

import {
  RiShieldCheckLine,
  RiUserLine,
  RiTimeLine,
  RiInformationLine,
  RiCalendar2Line,
} from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";

export default function BookingPolicy() {
  const { openModal } = useBookingModal();
  return (
    <section className="py-24 bg-gradient-to-b from-white to-spa-neutral/60 relative">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-contain" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-spa-primary/10 flex items-center justify-center rounded-full">
              <RiShieldCheckLine className="h-10 w-10 text-spa-primary/70" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-spa-secondary mb-4">
            Booking Policies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know for a smooth, stress-free experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Booking Requirements */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-spa-primary/80 p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-spa-primary/10 flex items-center justify-center rounded-full">
                <RiUserLine className="h-7 w-7 text-spa-primary/70" />
              </div>
              <h3 className="text-2xl font-semibold text-spa-secondary">
                Booking
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>
                <span className="font-medium text-spa-secondary">
                  Fuko&apos;s Sessions:
                </span>{" "}
                Female clients only
              </li>
              <li>
                <span className="font-medium text-spa-secondary">
                  Identification:
                </span>{" "}
                Please use your legal name as shown on your ID
              </li>
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-spa-accent/80 p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-spa-accent/10 flex items-center justify-center rounded-full">
                <RiTimeLine className="h-7 w-7 text-spa-accent/70" />
              </div>
              <h3 className="text-2xl font-semibold text-spa-secondary">
                Cancellations
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>
                <span className="font-medium text-spa-secondary">
                  48-hour notice:
                </span>{" "}
                Required to avoid fees
              </li>
              <li>
                <span className="font-medium text-spa-secondary">
                  Late cancellations:
                </span>{" "}
                (under 2 hours) incur full session fee
              </li>
              <li>
                <span className="font-medium text-spa-secondary">
                  No-shows:
                </span>{" "}
                Charged full session fee
              </li>
            </ul>
          </div>

          {/* Special Notice */}
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-spa-secondary/80 p-8 flex flex-col gap-6 md:col-span-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-spa-secondary/10 flex items-center justify-center rounded-full">
                <RiInformationLine className="h-7 w-7 text-spa-secondary/70" />
              </div>
              <h3 className="text-2xl font-semibold text-spa-secondary">
                Special Considerations
              </h3>
            </div>
            <p className="text-gray-700 text-base">
              We understand life happens! If you have a genuine emergency or
              exceptional situation, please contact us as soon as possible.
              We&apos;re here to help.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-spa-accent/90 to-spa-accent/60 rounded-2xl shadow-xl p-10 text-center flex flex-col items-center gap-6">
          <h3 className="text-3xl font-light text-white mb-2 drop-shadow">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-lg text-white/90 mb-2">
            Book your session with our experienced team and experience the
            difference.
          </p>
          <button
            onClick={openModal}
            className="btn-spa-service inline-flex items-center gap-2 group text-lg px-8 py-4"
          >
            <span>Book Your Session</span>
            <RiCalendar2Line className="h-6 w-6 transition-colors duration-300 group-hover:text-spa-accent z-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
