"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  RiGiftLine,
  RiBankCardLine,
  RiStarLine,
  RiMoneyDollarCircleLine,
} from "@remixicon/react";

const giftCardOptions = [
  {
    id: "50",
    amount: 50,
    title: "Wellness Starter",
    description: "Perfect for a relaxing massage session",
    popular: false,
  },
  {
    id: "100",
    amount: 100,
    title: "Wellness Plus",
    description: "Great value for multiple sessions",
    popular: true,
  },
  {
    id: "150",
    amount: 150,
    title: "Wellness Premium",
    description: "Premium package for ultimate relaxation",
    popular: false,
  },
  {
    id: "200",
    amount: 200,
    title: "Wellness Ultimate",
    description: "Complete wellness experience",
    popular: false,
  },
];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setIsCustomAmount(false);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setIsCustomAmount(true);
    setSelectedAmount(value);
  };

  const handlePurchase = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: selectedAmount,
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getDisplayAmount = () => {
    return isCustomAmount ? customAmount : selectedAmount;
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
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
            <RiGiftLine className="h-20 w-20 text-spa-accent" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Gift Cards
          </h1>

          <div className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 italic text-spa-accent">
            Give the Gift of Wellness
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Share the experience of premium massage therapy with your loved ones
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-8">
              Why Choose Our Gift Cards?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-primary/10 flex items-center justify-center mx-auto mb-4">
                <RiGiftLine className="h-8 w-8 text-spa-primary" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-3">
                Perfect Gift
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Give the gift of relaxation and wellness to friends and family
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-spa-primary/10 flex items-center justify-center mx-auto mb-4">
                <RiBankCardLine className="h-8 w-8 text-spa-primary" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-3">
                Flexible Value
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from multiple denominations or enter a custom amount
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-spa-primary/10 flex items-center justify-center mx-auto mb-4">
                <RiStarLine className="h-8 w-8 text-spa-primary" />
              </div>
              <h3 className="text-xl font-semibold text-spa-secondary mb-3">
                Premium Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional massage therapy in a relaxing environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Selection */}
      <section className="py-20 bg-spa-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-spa-secondary mb-4">
              Choose Your Gift Card
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select a preset amount or enter your own custom value
            </p>
          </div>

          {/* Preset Amounts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {giftCardOptions.map((option) => (
              <div
                key={option.id}
                className={`relative bg-white p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer hover:shadow-md ${
                  selectedAmount === option.id && !isCustomAmount
                    ? "border-spa-primary bg-spa-primary/5"
                    : "border-gray-200 hover:border-spa-primary/50"
                }`}
                onClick={() => handleAmountSelect(option.id)}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-spa-accent text-white px-4 py-1 text-sm font-medium flex items-center gap-1">
                      <RiStarLine className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className="text-3xl font-light text-spa-secondary mb-2">
                    ${option.amount}
                  </div>
                  <h3 className="text-lg font-semibold text-spa-secondary mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Amount Section */}
          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 shadow-sm border-2 border-gray-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-spa-secondary mb-2">
                    Custom Amount
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enter any amount between $25 - $500
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="relative">
                      <RiMoneyDollarCircleLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        min="25"
                        max="500"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) =>
                          handleCustomAmountChange(e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-3 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spa-primary/20 ${
                          isCustomAmount
                            ? "border-spa-primary bg-spa-primary/5"
                            : "border-gray-200 focus:border-spa-primary"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">AUD</div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Button */}
          <div className="text-center">
            <button
              onClick={handlePurchase}
              disabled={isLoading || !getDisplayAmount()}
              className="btn-spa-accent inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Purchase ${getDisplayAmount()} Gift Card</span>
                  <RiBankCardLine className="h-5 w-5 z-10" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-spa-secondary mb-4">
              Gift Card Terms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-spa-secondary mb-3">
                How It Works
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                  <span>Gift cards are delivered via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                  <span>Valid for 12 months from purchase date</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-spa-primary mt-2 flex-shrink-0"></div>
                  <span>Can be used for any of our services</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-spa-secondary mb-3">
                Important Notes
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 mt-2 flex-shrink-0"></div>
                  <span>Non-refundable and non-transferable</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 mt-2 flex-shrink-0"></div>
                  <span>Cannot be combined with other promotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 mt-2 flex-shrink-0"></div>
                  <span>Subject to our booking and cancellation policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
