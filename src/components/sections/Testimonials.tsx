"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We were running our whole business off a free Wix page. It looked terrible and we knew it, just never had time to deal with it. Got the new site and within a month our calls doubled. Should've done this years ago.",
    name: "Marcus T.",
    role: "Owner, GreenEdge Landscaping",
    initials: "MT",
  },
  {
    quote: "I was running everything through my Facebook page. Didn't think I needed a real website for a detailing business. Turns out people Google 'auto detail near me' all day long and I wasn't showing up at all. Now I'm top 3.",
    name: "DeShawn K.",
    role: "Prestige Auto Detail",
    initials: "DK",
  },
  {
    quote: "Honestly I dragged my feet on this for months. Our old GoDaddy site was embarrassing but it was 'good enough.' The free audit changed my mind real quick. New site paid for itself in the first two weeks of leads.",
    name: "Rick S.",
    role: "ClearView Window Washing",
    initials: "RS",
  },
  {
    quote: "What sold me was the free audit. No pitch, no pressure, just a straight breakdown of why our site was losing us jobs. The new one looks clean, loads fast, and the booking form alone was worth it.",
    name: "Luis R.",
    role: "Premier Pressure Washing",
    initials: "LR",
  },
  {
    quote: "I was paying some kid $50 a month to 'manage' a WordPress site that barely worked. This was a one-time cost and the difference is night and day. Actually getting calls from the website now.",
    name: "Karen W.",
    role: "Spotless Cleaning Co.",
    initials: "KW",
  },
  {
    quote: "We do great work but our online presence was a joke. Got a new site with a proper gallery of our jobs and now customers come in already knowing what they want. Cuts my quoting time in half.",
    name: "Jake M.",
    role: "Summit Lawn & Garden",
    initials: "JM",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-8 min-w-[320px] max-w-[380px] shrink-0">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-text-primary text-base italic leading-relaxed mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-xs font-bold text-text-primary">
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-text-primary">
            {t.name}
          </div>
          <div className="text-xs text-text-secondary">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center mb-12">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Client Love
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
          Don&apos;t Take My Word For It
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
