"use client";

import {
  RiTimeLine,
  RiAlertLine,
  RiUserLine,
  RiShieldCheckLine,
  RiInformationLine,
} from "@remixicon/react";
import { RiCalendar2Line } from "@remixicon/react";
import { useBookingModal } from "@/components/BookingProvider";

export default function BookingPolicy() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-spa-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-spa-primary flex items-center justify-center">
              <RiShieldCheckLine className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
            Booking Guidelines
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Essential information to ensure your experience is seamless and
            enjoyable
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Booking Requirements */}
          <div className="bg-white p-8 shadow-sm border-2 border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-spa-primary/10 flex items-center justify-center mr-4">
                <RiUserLine className="h-6 w-6 text-spa-primary" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary">
                Booking Requirements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    Fuko's Sessions:
                  </span>{" "}
                  Available for female clients only
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    Identification:
                  </span>{" "}
                  Please use your legal first and last name as shown on your ID
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white p-8 shadow-sm border-2 border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-spa-accent/10 flex items-center justify-center mr-4">
                <RiTimeLine className="h-6 w-6 text-spa-accent" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary">
                Cancellation Policy
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-accent mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    48-hour notice
                  </span>{" "}
                  required to avoid cancellation fees
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-accent mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    Late cancellations
                  </span>{" "}
                  (under 2 hours) incur full session fee
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-accent mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    No-shows
                  </span>{" "}
                  and late arrivals charged full session fee
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-br from-spa-primary/5 to-spa-primary/10 p-8 shadow-sm border-2 border-spa-primary/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-spa-primary/20 flex items-center justify-center mr-4">
                <RiInformationLine className="h-6 w-6 text-spa-primary" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary">
                Special Considerations
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We understand that unexpected circumstances may arise. Special
              considerations can be made for genuine emergencies or exceptional
              situations. Please contact us as soon as possible if you need to
              discuss your appointment.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-spa-primary text-white p-12 mx-4 sm:mx-6 lg:mx-8 mb-8">
          <h3 className="text-2xl font-light mb-4">
            Ready to Start Your Wellness Journey?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Book your session with our experienced team and experience the
            difference
          </p>
          <button
            onClick={openModal}
            className="btn-spa-accent inline-flex items-center gap-2 group"
          >
            <span>Book Your Session</span>
            <RiCalendar2Line className="h-5 w-5 transition-colors duration-300 group-hover:text-[#092518] z-10" />
          </button>
        </div>

        {/* Transition Section */}
        <div className="text-center py-8">
          <div className="w-24 h-1 bg-spa-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm">
            Have questions? We're here to help you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
