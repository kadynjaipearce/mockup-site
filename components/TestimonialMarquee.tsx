"use client";

import { useRef, useEffect, useState } from "react";
import { RiStarFill } from "@remixicon/react";

type ReviewItem = { text: string; name: string };

export default function TestimonialMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/google-reviews", { cache: "no-store" });
        type ApiReview = {
          authorName: string;
          rating: number;
          text: string;
        };
        const dataUnknown: unknown = await res.json();
        // If unauthorized (no refresh token on server), do not redirect users; show fallback
        if (res.status === 401) {
          throw new Error("Reviews unavailable");
        }
        if (!res.ok) {
          throw new Error("Failed to load reviews");
        }
        const maybeReviews = (dataUnknown as { reviews?: unknown }).reviews;
        const reviewsArr: ApiReview[] = Array.isArray(maybeReviews)
          ? (maybeReviews as ApiReview[])
          : [];
        const filtered = reviewsArr
          .filter((r) => Number(r.rating) > 4)
          .map<ReviewItem>((r) => ({ text: r.text, name: r.authorName }));
        setItems(
          filtered.length > 0
            ? filtered
            : [
                {
                  text: "Our clients love us. Check back soon for the latest reviews!",
                  name: "Google Reviews",
                },
              ]
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    let animationId: number;
    let start: number | null = null;
    const speed = 40; // px per second
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const offset = (elapsed / 1000) * speed;
      const scrollWidth = marquee.scrollWidth / 2;
      marquee.scrollLeft = scrollWidth ? offset % scrollWidth : 0;
      animationId = requestAnimationFrame(step);
    }
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [items.length]);

  const renderItems = loading ? [] : [...items, ...items];

  return (
    <div className="w-full overflow-x-hidden bg-spa-neutral py-6">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap gap-8 px-4"
        style={{ width: "200%" }}
      >
        {renderItems.map((t, i) => (
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
