import { motion } from "framer-motion";
import { experience } from "../data/content";

const EASE = [0.22, 1, 0.36, 1];

export default function Experience() {
  const [lead, ...rest] = experience;

  return (
    <section id="experience" className="py-24 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-10">
          Where I&apos;ve{" "}
          <span className="italic font-normal text-accent">worked</span>
        </h2>

        <div className="space-y-5">
          {/* Flagship Current Role */}
          {lead && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="card p-6 sm:p-8 grid md:grid-cols-12 gap-6 hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              <div className="md:col-span-5 space-y-2.5">
                <span className="inline-flex items-center font-mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
                  CURRENT · {lead.period}
                </span>
                <h3 className="font-display text-3xl font-medium leading-tight pt-1">
                  {lead.role}
                </h3>
                <p className="text-mist text-sm">{lead.org}</p>
                {lead.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {lead.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-panel2 border border-line text-fg/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <ul className="md:col-span-7 space-y-2.5">
                {lead.points.map((pt) => (
                  <li key={pt} className="text-mist text-sm leading-relaxed flex gap-2.5">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Secondary 3-Column Bento Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {rest.map((e, i) => (
              <motion.div
                key={e.role + e.org}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                className="card p-6 flex flex-col justify-between gap-4 hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                <div>
                  <span className="font-mono text-xs text-accent">{e.period}</span>
                  <h4 className="font-display text-2xl font-medium mt-1.5 leading-snug">
                    {e.role}
                  </h4>
                  <p className="text-mist text-xs mt-1 mb-4">{e.org}</p>
                  <ul className="space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="text-mist text-xs leading-relaxed flex gap-2">
                        <span className="text-accent shrink-0">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {e.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-0.5 rounded bg-panel2 border border-line text-fg/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
