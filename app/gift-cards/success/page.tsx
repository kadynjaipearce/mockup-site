"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Gift, Mail, Star } from "lucide-react";
import Link from "next/link";

export default function GiftCardSuccessPage() {
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setSessionId(urlParams.get("session_id") || "");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Success Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/back.jpg')`,
            filter: "blur(5px)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spa-secondary via-spa-secondary/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Thank You!
          </h1>

          <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
            Your Gift Card is Ready
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Your gift card purchase was successful. We've sent the gift card to
            your email address.
          </p>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              What's Next?
            </h2>
          </div>

          <div className="bg-spa-neutral rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-spa-primary/10 rounded-full flex items-center justify-center mr-4">
                <Gift className="h-8 w-8 text-spa-primary" />
              </div>
              <div className="w-16 h-16 bg-spa-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-spa-primary" />
              </div>
            </div>

            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg">
                  Check your email for the gift card details
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg">
                  Share the gift card with your loved one
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-spa-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg">
                  They can book their appointment using the gift card
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-spa-accent">
              <span>Return Home</span>
            </Link>
            <Link href="/gift-cards" className="btn-spa-service">
              <span>Buy Another Gift Card</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
