import { motion } from "framer-motion";
import { education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        {/* ── Bio column ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="md:col-span-7"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-6">
            Trained on engineering{" "}
            <span className="italic font-normal text-accent">discipline</span> &amp; curiosity.
          </h2>
          <div className="text-mist leading-relaxed space-y-4 text-base">
            <p>
              I&apos;m a 2026 Computer Science and Engineering graduate from AKTU, currently
              working as a Freelance Android / Kotlin Multiplatform Developer. Previously,
              I interned as a Software Engineer Intern at Nestor Vision and completed the
              IBM Skills Network Generative AI Virtual Internship.
            </p>
            <p>
              I delivered the Android build of a shared KMP carpooling app (Ktor, mutex
              JWT refresh, 177 passing host tests), published Campus Connect onto Google
              Play with a first-author IJERT paper, and landed three merged Kotlin PRs into
              AnkiDroid — an app with 10M+ installs.
            </p>
          </div>
        </motion.div>

        {/* ── Education column ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="card p-6 sm:p-7">
            <p className="font-mono text-xs text-accent uppercase tracking-wider mb-3">Education</p>
            <p className="font-display text-2xl font-medium mb-1">{education.degree}</p>
            <p className="text-fg/85 text-sm">
              {education.school} · {education.period}
            </p>
            <p className="text-mist text-sm mt-3 leading-relaxed border-t border-line pt-3">
              {education.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
