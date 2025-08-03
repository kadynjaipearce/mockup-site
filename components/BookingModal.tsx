"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-transparent" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full h-full md:w-[90%] md:h-[90%] bg-white md:rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b text-white"
          style={{ backgroundColor: "#082119" }}
        >
          <h2 className="text-xl font-light">Book Your Appointment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-none transition-all duration-300 cursor-pointer hover:scale-110"
            aria-label="Close booking modal"
          >
            <X className="h-6 w-6 transition-colors duration-300 hover:text-yellow-400" />
          </button>
        </div>

        {/* Iframe */}
        <div className="flex-1 h-full">
          <iframe
            src="https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?fbclid=IwY2xjawL8AT1leHRuA2FlbQIxMABicmlkETE5TFFLZ0o4SW94U2Frc1VSAR5_jo5Ff46JJXhJhURlATi3bQRUWJeejPs_I8De8YF0iqA6QXWv6JI9elTj_w_aem_ozuoA8uRxRSlmvyl9PRrNA#service"
            className="w-full h-full border-0"
            title="Book your appointment"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
}
