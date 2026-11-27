import { motion } from "framer-motion";
import { certifications, achievements } from "../data/content";

export default function CertsAchievements() {
  return (
    <section id="certifications" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Certifications ── */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-10">
              Always <span className="italic font-normal text-accent">learning</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                >
                  <div className="card p-4 hover:border-accent/40 transition-colors h-full">
                    <p className="text-sm font-medium leading-snug">{c.name}</p>
                    <p className="text-xs text-mist font-mono mt-1">{c.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Achievements ── */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-10">
              Highlight <span className="italic font-normal text-accent">reel</span>
            </h2>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="card p-5 border-l border-l-accent">
                    <p className="font-display text-xl font-medium mb-1">{a.title}</p>
                    <p className="text-mist text-sm leading-relaxed">{a.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
