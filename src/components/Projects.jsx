import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import TiltCard from "./ui/TiltCard";
import ProjectModal from "./ui/ProjectModal";

const FILTERS = [
  { key: "all",       label: "All" },
  { key: "ai",        label: "AI / GenAI" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "android",   label: "Android" },
  { key: "ml",        label: "ML" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.categories?.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="eyebrow mb-3">Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Things I've <span className="grad-text">shipped</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  filter === f.key
                    ? "bg-violet text-white border-violet shadow-sm"
                    : "border-line text-mist hover:text-fg hover:border-fg/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              >
                <TiltCard>
                  <div
                    className="card p-6 flex flex-col justify-between hover:glow-border hover:border-violet/40 transition-all group cursor-pointer h-full"
                    onClick={() => setSelected(p)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-xl font-semibold group-hover:text-cyan transition-colors">
                          {p.name}
                        </h3>
                        <span className="font-mono text-[10px] text-violet border border-violet/30 rounded-full px-2 py-1 whitespace-nowrap ml-3">
                          {p.stat.value}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-mist mb-4">{p.tag}</p>
                      <p className="text-mist text-sm leading-relaxed mb-5 line-clamp-3">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] bg-panel2 rounded-md px-2 py-1 text-mist border border-line"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm font-mono text-cyan hover:text-violet transition-colors inline-flex items-center gap-1"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {visible.length === 0 && (
          <p className="text-center text-mist font-mono text-sm mt-12">
            No projects in this category yet.
          </p>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
