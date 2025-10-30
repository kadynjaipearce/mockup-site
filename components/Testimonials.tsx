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
  >([
    {
      quote:
        "I highly recommend Bunbury Wellness Remedial Massage, Fuko is incredible - very welcoming and professional, and she shows genuine care for you. She tailors the massage to your specific concerns and needs, and is very skilled. The treatment room is well set up and is a lovely relaxing atmosphere. I look forward to my massages so much because I always end up feeling so good!",
      name: "Felicity J",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "Fuko and Tan are such a great team together! Fuko first massaged me 3.5 years ago and there has been no one better since! I decided on a massage yesterday and could only book in to see Tan, but no fear, he is just as good! You won't be disappointed, these two are perfect! Thank you both so much 🥰",
      name: "Ally Westwood",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "The absolute best massage! I started seeing Fuko around 30 weeks pregnant and the massages are so much better then I expected. Other places I went to left me feeling like I didn't have a massage and I was still so sore. Fuko works with my muscles so well, since going to her my pregnancy back, hip and shoulder pain has improved. She is also a beautiful lady with a peaceful aura.",
      name: "Chalise Lange",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "Fuko provided an really great massage experience. Her knowledge of muscles and their functions really helped with getting to the right spots for my pain. Her home space is well set up and tranquil.",
      name: "Azima Patel",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "Fuko is absolutely incredible! Not only is she so kind and caring but she’s extremely thorough and takes great pride in her work with helping customers! She checked constantly that I was okay and the pressure is okay, I am 17 weeks pregnant also and she was very accommodating! I walked in with a lot of neck problems and she worked so hard to help soothe them! I will be back for sure! 10/10! 🩷🩷🩷🩷",
      name: "Tahlia Ferbrache",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "I had the most amazing remedial massage last week. Fuko is warm and friendly and takes time to listen and understand your needs. She communicates well during the massage to make sure the pressure is comfortable and is extremely professional. She has a lovely clinic setting with relaxing music to help you unwind. She worked on specific areas that needed extra attention to relieve my sore muscles. Fuko even gave me suggestions of exercises to loosen tight muscles. She genuinely cares. I will be a regular from now on. 👍🩷",
      name: "Christine Williams",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "Had a fantastic remedial massage with Fuko today. I arrived in quite a bit of discomfort, she assessed me and was able to leave me feeling 💯 I walked out feeling so much better! She has a very welcoming vibe, her room is so comfortable and relaxing. I highly recommend ☺️",
      name: "Tanya Gosztyla",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "Fuko's 90 minute remedial massage is the best! She pays close attention to your needs and works very competently and professionally throughout to treat the body's problem areas. I have no hesitation in recommending her services.",
      name: "Leonie Popp",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "I have always found Fuko an excellent Massage Therapist, she has a lovely personality & has setup a very pleasant & calming place to work her magic. Would highly recommend to any female friends & family.",
      name: "Julie Gornall",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
    {
      quote:
        "I had an excellent massage from Fuko who is very skilled. She is warm and friendly and the clinic setting is peaceful and relaxing. I will definitely return and recommend!",
      name: "Tina Kaye",
      rating: 5,
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [fiveStarTotal, setFiveStarTotal] = useState<number | null>(22);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

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
          <div className="text-4xl md:text-5xl font-light text-spa-accent font-serif italic ">
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

        <div className="text-center mt-8">
          <motion.a
            variants={itemVariants}
            href="https://share.google/G69XBVJvT1gSY0pWQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
          >
            See all reviews
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
