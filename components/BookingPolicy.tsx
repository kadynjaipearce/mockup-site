"use client";

import {
  RiShieldCheckLine,
  RiUserLine,
  RiTimeLine,
  RiInformationLine,
  RiCalendar2Line,
  RiMailLine,
} from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";
import Link from "next/link";

export default function BookingPolicy() {
  const { openModal } = useBookingModal();
  return (
    <section className="py-24 bg-spa-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-spa-accent/20 flex items-center justify-center">
              <RiShieldCheckLine className="h-10 w-10 text-spa-accent" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-spa-primary mb-4">
            Booking Policies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know for a smooth, stress-free experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Booking Requirements */}
          <div className="bg-white shadow-lg border-l-8 border-spa-primary/80 p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-spa-primary/10 flex items-center justify-center">
                <RiUserLine className="h-7 w-7 text-spa-primary" />
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
          <div className="bg-white shadow-lg border-l-8 border-spa-accent p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-spa-accent/10 flex items-center justify-center">
                <RiTimeLine className="h-7 w-7 text-spa-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-spa-accent">
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
          <div className="bg-white shadow-lg border-l-8 border-spa-primary p-8 flex flex-col gap-6 md:col-span-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 bg-spa-primary/10 flex items-center justify-center">
                <RiInformationLine className="h-7 w-7 text-spa-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-spa-primary">
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
        <section>
          <div className="max-w-6xl mx-auto text-center bg-spa-primary text-white p-12 mb-20">
            <h3 className="text-2xl font-light mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Book your session with our experienced team and start your
              wellness journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openModal}
                className="btn-spa-accent inline-flex items-center gap-2 group"
              >
                <span>Book Your Session</span>
                <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
              </button>
              <Link
                href="mailto:info@bunburywellnessremedialmassage.com.au"
                className="btn-spa-service inline-flex items-center gap-2 group"
              >
                <span>Email to Discuss</span>
                <RiMailLine className="h-5 w-5 transition-colors duration-300 group-hover:text-spa-accent z-10" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
