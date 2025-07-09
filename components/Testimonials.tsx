"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Absolutely the best massage experience I've ever had. The space is beautiful and calming!",
      name: "Sophie L.",
      rating: 5,
    },
    {
      quote:
        "Professional, friendly, and truly effective. My back pain is gone! Highly recommend.",
      name: "James R.",
      rating: 5,
    },
    {
      quote:
        "The pregnancy massage was so gentle and relaxing. I felt so cared for.",
      name: "Emily W.",
      rating: 5,
    },
    {
      quote: "A premium experience from start to finish. The team is amazing!",
      name: "Michael T.",
      rating: 5,
    },
    {
      quote:
        "The atmosphere is so calming and the therapists are very skilled.",
      name: "Priya S.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-spa-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/80">
            Real experiences from our valued wellness community
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center min-h-[280px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-spa-accent fill-current"
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white font-light mb-6 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <cite className="text-spa-accent font-medium text-lg">
              — {testimonials[currentIndex].name}
            </cite>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                index === currentIndex ? "bg-spa-accent" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
