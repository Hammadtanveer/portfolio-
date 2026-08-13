import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { socials } from "../data/content";

const HeroScene3D = lazy(() => import("./3d/HeroScene3D"));

/* ── Loading spinner for 3D canvas ── */
function CanvasLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-violet border-t-transparent animate-spin" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 border border-line rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs text-cyan tracking-wide">Open to work</span>
          </div>

          <p className="eyebrow mb-3">Software Developer · GenAI Engineer</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-6">
            Hammad Tanveer builds
            <br />
            <span className="grad-text">AI-driven products</span>
            <br />
            that ship.
          </h1>
          <p className="text-mist text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            B.Tech CS grad shipping full-stack, Android, and GenAI applications —
            from an app live on the Play Store to LLM tools built on LangChain and RAG.
            Currently interning as a Software Developer, looking for full-time roles.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-violet hover:bg-violet/90 transition-colors text-white font-medium rounded-full px-6 py-3 text-sm glow-border"
            >
              Hire Me →
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-line hover:border-cyan hover:text-cyan transition-colors rounded-full px-6 py-3 text-sm font-mono"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* ── 3D Crystal Scene (lazy-loaded) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative h-[380px] sm:h-[460px] md:h-[520px]"
        >
          <Suspense fallback={<CanvasLoader />}>
            <HeroScene3D />
          </Suspense>

          {/* Floating tech badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-6 right-4 sm:right-10 glass card px-3 py-2 font-mono text-xs text-cyan shadow-lg z-10"
          >
            {"</> GenAI"}
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-2 sm:left-6 glass card px-3 py-2 font-mono text-xs text-violet shadow-lg z-10"
          >
            Android · Kotlin
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/2 left-0 glass card px-3 py-2 font-mono text-xs text-ember shadow-lg z-10"
          >
            Full-Stack
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
