"use client";
import { useState, useEffect } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
} from "@remixicon/react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I totally recommend the services of Bunbury Wellness Remedial Massage, knowledgeable, professional and muscle aches are relieved. Fabulous premises in the town centre as well.",
      name: "Suzette Mowday",
      rating: 5,
      date: "4 weeks ago",
    },
    {
      quote:
        "Fuko provided an really great massage experience. Her knowledge of muscles and their functions really helped with getting to the right spots for my pain.",
      name: "Azima Patel",
      rating: 5,
      date: "3 months ago",
    },
    {
      quote:
        "I highly recommend Bunbury Wellness Remedial Massage, Fuko is incredible - very welcoming and professional, and she shows genuine care for you. She tailors the massage to your specific concerns and needs, and is very skilled. The treatment room is well set up and is a lovely relaxing atmosphere. I look forward to my massages so much because I always end up feeling so good!",
      name: "Felicity J",
      rating: 5,
      date: "3 months ago",
    },
    {
      quote:
        "Fuko is absolutely incredible! Not only is she so kind and caring but she’s extremely thorough and takes great pride in her work with helping customers! She checked constantly that I was okay and the pressure is okay, I am 17 weeks pregnant also and she was very accommodating! I walked in with a lot of neck problems and she worked so hard to help soothe them! I will be back for sure! 10/10! 🩷🩷🩷🩷",
      name: "Tahlia Ferbrache",
      rating: 5,
      date: "5 months ago",
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
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center min-h-[280px] md:min-h-[320px] h-[320px] md:h-[360px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <RiStarFill key={i} className="h-6 w-6 text-spa-accent" />
              ))}
            </div>

            <blockquote className="text-base md:text-lg text-white font-light mb-6 leading-relaxed">
              &quot;{testimonials[currentIndex].quote}&quot;
            </blockquote>

            <cite className="text-spa-accent font-medium text-lg">
              — {testimonials[currentIndex].name}
            </cite>
            <div className="text-white/70 text-sm mt-1">
              {testimonials[currentIndex].date}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <RiArrowLeftSLine className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <RiArrowRightSLine className="h-6 w-6" />
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
