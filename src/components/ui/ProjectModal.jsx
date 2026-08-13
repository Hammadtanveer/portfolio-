import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen project detail modal.
 * Close via ✕ button, backdrop click, or ESC key.
 */
export default function ProjectModal({ project, onClose }) {
  const onKey = useCallback((e) => { if (e.key === "Escape") onClose(); }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-md" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="relative card p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto glow-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-line text-mist hover:text-fg hover:border-fg transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Status badge */}
            <span className="inline-block font-mono text-[10px] text-violet border border-violet/30 rounded-full px-2.5 py-1 mb-4">
              {project.stat.value}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-1">
              {project.name}
            </h3>
            <p className="font-mono text-xs text-cyan mb-5">{project.tag}</p>

            <p className="text-mist text-sm leading-relaxed mb-6">{project.desc}</p>

            {/* Tech stack */}
            <div className="mb-6">
              <p className="font-mono text-[10px] text-mist/70 tracking-wide mb-2.5">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-panel2 rounded-lg px-2.5 py-1.5 text-mist border border-line"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories */}
            {project.categories?.length > 0 && (
              <div className="mb-6">
                <p className="font-mono text-[10px] text-mist/70 tracking-wide mb-2.5">
                  CATEGORIES
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] font-mono text-violet bg-violet/10 border border-violet/20 rounded-full px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-mono text-cyan hover:text-violet transition-colors border border-line hover:border-violet rounded-full px-4 py-2"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
