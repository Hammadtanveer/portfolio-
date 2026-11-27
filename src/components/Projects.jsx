import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import ProjectModal from "./ui/ProjectModal";

const EASE = [0.22, 1, 0.36, 1];

const FILTERS = [
  { key: "all",       label: "All" },
  { key: "android",   label: "Android / KMP" },
  { key: "ai",        label: "Applied AI" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ml",        label: "ML" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.categories?.includes(filter)),
    [filter]
  );

  const activeProject = visible[hoveredIdx] || visible[0] || null;

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight">
              Selected{" "}
              <span className="italic font-normal text-accent">works</span>
            </h2>
          </motion.div>

          {/* Filter pills with smooth sliding active indicator */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => {
                    setFilter(f.key);
                    setHoveredIdx(0);
                  }}
                  aria-pressed={active}
                  className={`relative isolate px-3.5 min-h-[40px] rounded-full border transition-colors duration-200 ${
                    active
                      ? "text-on-accent border-accent font-medium"
                      : "border-line text-mist hover:text-fg hover:border-fg/30"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="projectFilterPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-accent z-0"
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Atelier Index Table Header */}
        {visible.length > 0 && (
          <div className="flex items-center justify-between pb-3 border-b border-line font-mono text-xs uppercase tracking-widest text-mist">
            <span>Index · Click any row for full specs</span>
            <span>{visible.length} Projects</span>
          </div>
        )}

        {/* Interactive Index Rows */}
        <div className="divide-y divide-line border-b border-line">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const isActive = i === hoveredIdx;
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.3, ease: EASE }}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onFocus={() => setHoveredIdx(i)}
                  onClick={() => setSelected(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(p);
                    }
                  }}
                  className="relative isolate py-5 px-3 -mx-3 grid grid-cols-12 items-center gap-3 cursor-pointer rounded-lg transition-colors duration-200"
                >
                  {isActive && (
                    <motion.span
                      layoutId="projectActiveRowBg"
                      transition={{ type: "spring", stiffness: 360, damping: 34 }}
                      className="absolute inset-0 rounded-lg bg-panel z-0"
                    />
                  )}

                  <span
                    className={`relative z-10 col-span-2 sm:col-span-1 font-mono text-xs tabular-nums transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-mist"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 col-span-6 sm:col-span-4">
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-fg">
                      {p.name}
                    </h3>
                  </div>

                  <div className="relative z-10 hidden md:block md:col-span-4 font-mono text-xs text-mist truncate">
                    {p.stack.slice(0, 4).join(" · ")}
                  </div>

                  <div
                    className={`relative z-10 col-span-4 sm:col-span-7 md:col-span-3 text-right font-mono text-xs transition-all duration-200 ${
                      isActive ? "text-accent translate-x-0" : "text-mist"
                    }`}
                  >
                    {p.stat?.value || p.tag} ↗
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Live Hovered / Focused Preview Panel with smooth crossfade */}
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="mt-6 card p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              <div className="space-y-2 max-w-2xl">
                <span className="font-mono text-xs text-accent block">{activeProject.tag}</span>
                <p className="text-sm text-mist leading-relaxed">{activeProject.desc}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {activeProject.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center min-h-[40px] px-4 py-2 rounded-full border border-line hover:border-accent text-xs font-mono text-fg hover:text-accent transition-colors duration-200"
                  >
                    {l.label} ↗
                  </a>
                ))}
                <button
                  onClick={() => setSelected(activeProject)}
                  className="inline-flex items-center min-h-[40px] px-4 py-2 rounded-full bg-accent text-on-accent text-xs font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                >
                  Inspect Case →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-center text-mist font-mono text-sm mt-12">
            No projects in this category yet.
          </p>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
