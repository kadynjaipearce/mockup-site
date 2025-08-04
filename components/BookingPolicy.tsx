"use client";

import {
  Clock,
  AlertCircle,
  UserCheck,
  Calendar,
  Shield,
  Info,
} from "lucide-react";
import { useBookingModal } from "@/components/BookingProvider";

export default function BookingPolicy() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-spa-neutral/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-spa-primary rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
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

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Booking Requirements */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-spa-primary/10 rounded-full flex items-center justify-center mr-4">
                <UserCheck className="h-6 w-6 text-spa-primary" />
              </div>
              <h3 className="text-xl font-light text-spa-secondary">
                Booking Requirements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    Fuko's Sessions:
                  </span>{" "}
                  Available for female clients only
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary rounded-full mt-2 flex-shrink-0"></div>
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
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-light text-spa-secondary">
                Cancellation Policy
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    48-hour notice
                  </span>{" "}
                  required to avoid cancellation fees
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-spa-secondary">
                    Late cancellations
                  </span>{" "}
                  (under 2 hours) incur full session fee
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
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
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-sm border border-amber-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                <Info className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-light text-amber-800">
                Special Considerations
              </h3>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              We understand that unexpected circumstances may arise. Special
              considerations can be made for genuine emergencies or exceptional
              situations. Please contact us as soon as possible if you need to
              discuss your appointment.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 bg-spa-primary text-white px-8 py-4 rounded-full hover:bg-spa-secondary transition-colors duration-300 cursor-pointer"
            onClick={openModal}
          >
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Book Your Session</span>
          </div>
        </div>
      </div>
    </section>
  );
}
