"use client";

import { useRef, useEffect } from "react";
import { RiStarFill } from "@remixicon/react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely the best massage I've ever had. The team is so professional and caring!",
  },
  {
    name: "James T.",
    text: "Helped me recover from a sports injury. Highly recommend their remedial massage!",
  },
  {
    name: "Emily R.",
    text: "The pregnancy massage was gentle and so relaxing. I felt truly cared for.",
  },
  {
    name: "Michael B.",
    text: "Great atmosphere and skilled therapists. I always leave feeling refreshed.",
  },
  {
    name: "Lisa K.",
    text: "Professional, friendly, and effective. My go-to place for wellness!",
  },
];

export default function TestimonialMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    let animationId: number;
    let start: number | null = null;
    const scrollWidth = marquee.scrollWidth / 2;
    const speed = 40; // px per second

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const offset = (elapsed / 1000) * speed;
      marquee.scrollLeft = offset % scrollWidth;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-spa-neutral py-6">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap gap-8 px-4"
        style={{ width: "200%" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="inline-flex flex-col items-center bg-white rounded-lg shadow px-6 py-4 min-w-[280px] max-w-xs"
          >
            <div className="flex items-center gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <RiStarFill key={idx} className="text-yellow-400 w-4 h-4" />
                ))}
            </div>
            <div className="text-gray-700 text-base font-light mb-2">
              &quot;{t.text}&quot;
            </div>
            <div className="text-spa-primary text-sm font-semibold">
              - {t.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
