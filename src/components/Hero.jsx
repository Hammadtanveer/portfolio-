import { motion } from "framer-motion";
import { socials } from "../data/content";

const EASE = [0.22, 1, 0.36, 1];

const LEDGER = [
  ["CURRENTLY", "Freelance Android / KMP Dev"],
  ["EDUCATION", "B.Tech CSE · AKTU (2022–2026)"],
  ["OPEN SOURCE", "AnkiDroid · 3 Merged PRs"],
  ["PUBLISHED", "Campus Connect · Google Play"],
  ["RESEARCH", "IJERT ICTEM 2.0 (May 2026)"],
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-5"
          >
            Software Engineer · New Delhi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-display text-5xl sm:text-6xl lg:text-[68px] font-medium tracking-tight leading-[1.02] mb-6"
          >
            Architecting{" "}
            <span className="italic font-normal text-accent">resilient</span>{" "}
            Android &amp; applied AI systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
            className="text-mist text-base sm:text-lg max-w-xl mb-9 leading-relaxed"
          >
            2026 B.Tech CSE graduate shipping Kotlin Multiplatform builds, Google Play
            releases, and streaming LLM interfaces with restraint and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] bg-accent hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-on-accent font-medium rounded-full px-6 py-2.5 text-sm"
            >
              Start a conversation
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center min-h-[44px] border border-line hover:border-accent/60 active:scale-[0.98] transition-all duration-200 rounded-full px-6 py-2.5 text-sm font-mono text-fg"
            >
              Selected Works ↓
            </a>
          </motion.div>
        </div>

        {/* ── 2D Executive Summary Ledger ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="lg:col-span-5 card p-6 sm:p-7"
        >
          <div className="divide-y divide-line">
            {LEDGER.map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: EASE, delay: 0.24 + i * 0.05 }}
                className="py-3.5 first:pt-0 last:pb-0 flex justify-between items-baseline gap-4"
              >
                <span className="font-mono text-xs text-accent shrink-0">{label}</span>
                <span className="text-xs sm:text-sm text-fg text-right">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
