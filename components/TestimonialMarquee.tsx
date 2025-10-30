"use client";

import { useRef, useEffect, useState } from "react";
import { RiStarFill } from "@remixicon/react";

type ReviewItem = { text: string; name: string };

export default function TestimonialMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [items] = useState<ReviewItem[]>([
    {
      text: "I highly recommend Bunbury Wellness Remedial Massage, Fuko is incredible - very welcoming and professional, and she shows genuine care for you. She tailors the massage to your specific concerns and needs, and is very skilled. The treatment room is well set up and is a lovely relaxing atmosphere. I look forward to my massages so much because I always end up feeling so good!",
      name: "Felicity J",
    },
    {
      text: "Fuko and Tan are such a great team together! Fuko first massaged me 3.5 years ago and there has been no one better since! I decided on a massage yesterday and could only book in to see Tan, but no fear, he is just as good! You won't be disappointed, these two are perfect! Thank you both so much 🥰",
      name: "Ally Westwood",
    },
    {
      text: "The absolute best massage! I started seeing Fuko around 30 weeks pregnant and the massages are so much better then I expected. Other places I went to left me feeling like I didn't have a massage and I was still so sore. Fuko works with my muscles so well, since going to her my pregnancy back, hip and shoulder pain has improved. She is also a beautiful lady with a peaceful aura.",
      name: "Chalise Lange",
    },
    {
      text: "Fuko provided an really great massage experience. Her knowledge of muscles and their functions really helped with getting to the right spots for my pain. Her home space is well set up and tranquil.",
      name: "Azima Patel",
    },
    {
      text: "Fuko is absolutely incredible! Not only is she so kind and caring but she’s extremely thorough and takes great pride in her work with helping customers! She checked constantly that I was okay and the pressure is okay, I am 17 weeks pregnant also and she was very accommodating! I walked in with a lot of neck problems and she worked so hard to help soothe them! I will be back for sure! 10/10! 🩷🩷🩷🩷",
      name: "Tahlia Ferbrache",
    },
    {
      text: "I had the most amazing remedial massage last week. Fuko is warm and friendly and takes time to listen and understand your needs. She communicates well during the massage to make sure the pressure is comfortable and is extremely professional. She has a lovely clinic setting with relaxing music to help you unwind. She worked on specific areas that needed extra attention to relieve my sore muscles. Fuko even gave me suggestions of exercises to loosen tight muscles. She genuinely cares. I will be a regular from now on. 👍🩷",
      name: "Christine Williams",
    },
    {
      text: "Had a fantastic remedial massage with Fuko today. I arrived in quite a bit of discomfort, she assessed me and was able to leave me feeling 💯 I walked out feeling so much better! She has a very welcoming vibe, her room is so comfortable and relaxing. I highly recommend ☺️",
      name: "Tanya Gosztyla",
    },
    {
      text: "Fuko's 90 minute remedial massage is the best! She pays close attention to your needs and works very competently and professionally throughout to treat the body's problem areas. I have no hesitation in recommending her services.",
      name: "Leonie Popp",
    },
    {
      text: "I have always found Fuko an excellent Massage Therapist, she has a lovely personality & has setup a very pleasant & calming place to work her magic. Would highly recommend to any female friends & family.",
      name: "Julie Gornall",
    },
    {
      text: "I had an excellent massage from Fuko who is very skilled. She is warm and friendly and the clinic setting is peaceful and relaxing. I will definitely return and recommend!",
      name: "Tina Kaye",
    },
  ]);

  // No remote fetch; using static items above

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

  const renderItems = [...items, ...items];

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
