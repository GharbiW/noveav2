"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Shield, TrendingUp, Code2, Globe } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Shield,
    title: "Consulting Digital",
    href: "/consulting",
    tag: "Strategy",
    desc: "Strategic advisory for digital transformation — performance audits, SEO architecture, conversion engineering and growth strategy grounded in proprietary data.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=85",
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Automation & SaaS Marketing",
    href: "/automation",
    tag: "Automation",
    desc: "Custom CRM workflows, lead nurturing sequences, scoring engines and personalised mini-SaaS platforms that industrialise acquisition and retention.",
    img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=85",
  },
  {
    num: "03",
    icon: Code2,
    title: "AI & Data",
    href: "/ai-data",
    tag: "Intelligence",
    desc: "AI-powered audience intelligence — predictive modelling, behavioural segmentation, intent signals and GDPR-compliant data monetisation from our media network.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=85",
  },
  {
    num: "04",
    icon: Globe,
    title: "Média & Distribution",
    href: "/media-distribution",
    tag: "Media",
    desc: "Sponsored editorial content distributed across our proprietary media network — reaching verified audiences in sport, finance and technology verticals.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=85",
  },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-border" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* One-line header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <p className="label-tag">What We Do</p>
            <span className="w-8 h-px bg-border" />
            <h2 className="text-sm font-bold text-foreground">
              4 Services. One Team. One Process.
            </h2>
          </div>
          <Link href="/services" className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
            All Services <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Two-panel layout */}
        <div className="grid lg:grid-cols-5 gap-px bg-border">

          {/* LEFT — compact indexed list */}
          <div className="lg:col-span-3 bg-background divide-y divide-border">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = i === active;
              return (
                <button
                  key={svc.num}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors group ${isActive ? "bg-muted" : "hover:bg-muted/50"}`}
                >
                  {/* Accent line */}
                  <span className={`w-0.5 h-6 flex-shrink-0 transition-colors ${isActive ? "bg-primary" : "bg-transparent"}`} />

                  {/* Number */}
                  <span className={`text-[10px] tabular-nums font-bold w-5 flex-shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {svc.num}
                  </span>

                  {/* Icon */}
                  <div className={`w-7 h-7 flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? "bg-primary" : "bg-muted group-hover:bg-primary/10"}`}>
                    <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"}`} />
                  </div>

                  {/* Title */}
                  <span className={`flex-1 text-sm font-semibold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                    {svc.title}
                  </span>

                  {/* Tag */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hidden sm:block">
                    {svc.tag}
                  </span>

                  <ArrowUpRight className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT — switching detail */}
          <div className="lg:col-span-2 relative overflow-hidden min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Image */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={services[active].img}
                    alt={services[active].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/40" />

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                      {services[active].tag}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-background border-t border-border p-5">
                  <p className="text-xs font-bold text-foreground mb-1">{services[active].title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {services[active].desc}
                  </p>
                  <Link
                    href={services[active].href}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
                  >
                    Learn More <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
