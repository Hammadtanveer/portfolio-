import { motion } from "framer-motion";
import { experience } from "../data/content";
import TiltCard from "./ui/TiltCard";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">Experience</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
          Where I've <span className="grad-text">worked</span>
        </h2>

        <div className="relative pl-8 border-l border-line space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Glowing timeline dot */}
              <span className="absolute -left-[41px] top-4 w-3 h-3 rounded-full bg-violet shadow-[0_0_12px_3px_rgba(139,92,246,0.6)]">
                <span className="absolute inset-0 rounded-full bg-violet animate-ping opacity-30" />
              </span>

              <TiltCard intensity={5}>
                <div className="card p-5 sm:p-6">
                  <p className="font-mono text-xs text-cyan mb-1.5">{e.period}</p>
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <p className="text-mist text-sm mb-3">{e.org}</p>
                  <ul className="space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="text-mist text-sm leading-relaxed flex gap-2">
                        <span className="text-violet mt-0.5 shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
