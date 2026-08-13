import { motion } from "framer-motion";
import { certifications, achievements } from "../data/content";
import TiltCard from "./ui/TiltCard";

export default function CertsAchievements() {
  return (
    <section id="certifications" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Certifications ── */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-3">Certifications</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">
              Always <span className="grad-text">learning</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                >
                  <div className="card p-4 hover:border-cyan/40 transition-colors h-full">
                    <p className="text-sm font-medium leading-snug">{c.name}</p>
                    <p className="text-xs text-mist font-mono mt-1">{c.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Achievements ── */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-3">Achievements</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">
              Highlight <span className="grad-text">reel</span>
            </h2>
            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <TiltCard intensity={6}>
                    <div className="card p-5 border-l-2 border-l-violet">
                      <p className="font-display font-semibold mb-1">{a.title}</p>
                      <p className="text-mist text-sm leading-relaxed">{a.detail}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
