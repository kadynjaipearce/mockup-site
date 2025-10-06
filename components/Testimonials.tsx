"use client";
import { useState, useEffect } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
} from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<
    Array<{ quote: string; name: string; rating: number; date: string }>
  >([]);
  const [fiveStarTotal, setFiveStarTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hydrate from Google Reviews API, filter >4 stars
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_REVIEWS_API_URL || "";
        const res = await fetch(apiUrl, { cache: "no-store" });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to load reviews");

        const filtered = (data.reviews || [])
          .filter((r: any) => Number(r.rating) > 4)
          .map((r: any) => ({
            quote: r.text,
            name: r.authorName,
            rating: r.rating,
            date: r.time,
          }));

        setReviews(
          filtered.length > 0
            ? filtered
            : [
                // fallback to at least one rendered item
                {
                  quote:
                    "Our clients love us. Check back soon for the latest reviews!",
                  name: "Google Reviews",
                  rating: 5,
                  date: "recent",
                },
              ]
        );
        setFiveStarTotal(
          typeof data.fiveStarCount === "number" ? data.fiveStarCount : null
        );
        setError(null);
      } catch (e: any) {
        setError(e?.message || "Unable to load reviews");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      reviews.length === 0
        ? 0
        : prevIndex === reviews.length - 1
          ? 0
          : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      reviews.length === 0
        ? 0
        : prevIndex === 0
          ? reviews.length - 1
          : prevIndex - 1
    );
  };

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const testimonialVariants = {
    enter: {
      opacity: 0,
      x: 100,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -100,
    },
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-spa-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Star Count */}
        <div className="text-center mb-6">
          <div className="text-white/80 text-sm">Total 5-Star Reviews</div>
          <div className="text-4xl md:text-5xl font-light text-spa-accent">
            {fiveStarTotal ?? "—"}
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/80">
            Real experiences from our valued wellness community
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 text-center min-h-[280px] md:min-h-[320px] h-[320px] md:h-[360px] flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={loading ? "loading" : error ? "error" : currentIndex}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col justify-center h-full"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center mb-6"
                >
                  {loading || error
                    ? null
                    : [...Array(reviews[currentIndex]?.rating || 0)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            variants={starVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: i * 0.1 }}
                          >
                            <RiStarFill className="h-6 w-6 text-spa-accent" />
                          </motion.div>
                        )
                      )}
                </motion.div>

                {loading ? (
                  <div className="text-white/80">Loading reviews…</div>
                ) : error ? (
                  <div className="text-red-200">{error}</div>
                ) : (
                  <>
                    <blockquote className="text-base text-sm md:text-lg text-white font-light mb-6 leading-relaxed">
                      &quot;{reviews[currentIndex]?.quote}&quot;
                    </blockquote>
                    <cite className="text-spa-accent font-medium text-lg">
                      — {reviews[currentIndex]?.name}
                    </cite>
                    <div className="text-white/70 text-sm mt-1">
                      {reviews[currentIndex]?.date}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <RiArrowLeftSLine className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <RiArrowRightSLine className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                index === currentIndex ? "bg-spa-accent" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
