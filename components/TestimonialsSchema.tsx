"use client";

import { useEffect } from "react";

export default function TestimonialsSchema() {
  useEffect(() => {
    // Add testimonials schema to the page
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Bunbury Wellness",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Sophie L.",
          },
          reviewBody:
            "Absolutely the best massage experience I've ever had. The space is beautiful and calming!",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "James R.",
          },
          reviewBody:
            "Professional, friendly, and truly effective. My back pain is gone! Highly recommend.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Emily W.",
          },
          reviewBody:
            "The pregnancy massage was so gentle and relaxing. I felt so cared for.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Michael T.",
          },
          reviewBody:
            "A premium experience from start to finish. The team is amazing!",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Priya S.",
          },
          reviewBody:
            "The atmosphere is so calming and the therapists are very skilled.",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
