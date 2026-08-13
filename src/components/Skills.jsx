import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/content";

const Skills3D = lazy(() => import("./3d/Skills3D"));

export default function Skills() {
  const [view, setView] = useState("grid");

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow mb-3">Skills</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              The <span className="grad-text">tech stack</span>
            </h2>
          </div>

          {/* View toggle */}
          <div className="inline-flex items-center rounded-full border border-line p-1 font-mono text-xs self-start sm:self-auto">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                view === "grid"
                  ? "bg-violet text-white shadow-sm"
                  : "text-mist hover:text-fg"
              }`}
            >
              ▤ Grid
            </button>
            <button
              onClick={() => setView("3d")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                view === "3d"
                  ? "bg-violet text-white shadow-sm"
                  : "text-mist hover:text-fg"
              }`}
            >
              ✦ 3D
            </button>
          </div>
        </div>

        {/* Grid view */}
        {view === "grid" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group, i) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 hover:border-violet/50 transition-colors"
              >
                <h3 className="font-mono text-sm text-cyan mb-4 tracking-wide">{group.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs sm:text-sm bg-panel2 border border-line rounded-lg px-2.5 py-1.5 text-mist"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 3D constellation view */}
        {view === "3d" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense
              fallback={
                <div className="h-[350px] sm:h-[450px] flex items-center justify-center text-mist font-mono text-sm">
                  Loading 3D constellation…
                </div>
              }
            >
              <Skills3D />
            </Suspense>
          </motion.div>
        )}
      </div>
    </section>
  );
}
