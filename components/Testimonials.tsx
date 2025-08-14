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
        "Fuko is absolutely incredible! Not only is she so kind and caring but she's extremely thorough and takes great pride in her work with helping customers! She checked constantly that I was okay and the pressure is okay, I am 17 weeks pregnant also and she was very accommodating! I walked in with a lot of neck problems and she worked so hard to help soothe them! I will be back for sure! 10/10! 🩷🩷🩷🩷",
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
      transition: {
        duration: 0.3,
        ease: "backOut",
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-spa-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                key={currentIndex}
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
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={starVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: i * 0.1 }}
                    >
                      <RiStarFill className="h-6 w-6 text-spa-accent" />
                    </motion.div>
                  ))}
                </motion.div>

                <blockquote className="text-base md:text-lg text-white font-light mb-6 leading-relaxed">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>

                <cite className="text-spa-accent font-medium text-lg">
                  — {testimonials[currentIndex].name}
                </cite>
                <div className="text-white/70 text-sm mt-1">
                  {testimonials[currentIndex].date}
                </div>
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
          {testimonials.map((_, index) => (
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
