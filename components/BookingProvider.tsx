"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import BookingModal from "./BookingModal";

interface BookingContextType {
  isOpen: boolean;
  openModal: (url?: string) => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBookingModal() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBookingModal must be used within a BookingProvider");
  }
  return context;
}

interface BookingProviderProps {
  children: ReactNode;
}

export function BookingProvider({ children }: BookingProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);

  const openModal = (url?: string) => {
    if (url) {
      setBookingUrl(url);
    } else {
      setBookingUrl(null);
    }
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setBookingUrl(null);
  };

  return (
    <BookingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeModal} bookingUrl={bookingUrl ?? undefined} />
    </BookingContext.Provider>
  );
}
