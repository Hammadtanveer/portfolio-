import { motion } from "framer-motion";
import { education } from "../data/content";
import TiltCard from "./ui/TiltCard";

const traits = [
  { label: "Discipline", value: 92, note: "Gym, 6x/week",          color: "from-violet to-cyan" },
  { label: "Curiosity",  value: 96, note: "New models, new tools",  color: "from-cyan to-violet" },
  { label: "Craft",      value: 88, note: "Ship > perfect",         color: "from-violet to-ember" },
  { label: "Focus",      value: 85, note: "Anime marathons only",   color: "from-ember to-cyan" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12">
        {/* ── Bio column ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
            Trained on code, gym reps, and a lot of anime.
          </h2>
          <div className="text-mist leading-relaxed space-y-4 text-base">
            <p>
              I'm a Computer Science graduate from AKTU, currently working as a Software
              Developer Intern at Nestor Vision. I build across the stack — React and Python
              on the backend, Kotlin and Jetpack Compose on Android, and increasingly, GenAI
              systems: RAG pipelines, LLM agents, and prompt-engineered tools.
            </p>
            <p>
              I shipped Campus Connect end-to-end onto the Google Play Store, presented a
              first-author paper on it at an international conference, and landed three merged
              pull requests into AnkiDroid — an app with 10M+ installs.
            </p>
            <p>
              Outside of code: I train, I watch a lot of anime, and I'm chasing a career in
              GenAI Engineering. I also take on freelance work on the side.
            </p>
          </div>

          {/* Education card */}
          <TiltCard className="mt-8" intensity={6}>
            <div className="card p-5">
              <p className="font-mono text-xs text-cyan mb-1">EDUCATION</p>
              <p className="font-display text-lg font-medium">{education.degree}</p>
              <p className="text-mist text-sm">
                {education.school} · {education.period}
              </p>
              <p className="text-mist text-sm mt-1">{education.note}</p>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Character stats column ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2"
        >
          <TiltCard intensity={6}>
            <div className="card p-6">
              <p className="font-mono text-xs text-violet mb-5 tracking-wide">CHARACTER STATS</p>
              <div className="space-y-5">
                {traits.map((t) => (
                  <div key={t.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{t.label}</span>
                      <span className="text-mist font-mono text-xs">{t.note}</span>
                    </div>
                    <div className="h-2 rounded-full bg-panel2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${t.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
