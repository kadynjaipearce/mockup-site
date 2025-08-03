"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import BookingModal from "./BookingModal";

interface BookingContextType {
  isOpen: boolean;
  openModal: () => void;
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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </BookingContext.Provider>
  );
}
