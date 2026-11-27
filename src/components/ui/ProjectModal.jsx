import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Project detail dialog.
 * Close via button, backdrop click, or ESC key.
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
          <div className="absolute inset-0 bg-ink/75 backdrop-blur-md" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, type: "spring", stiffness: 300, damping: 30 }}
            className="relative card p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto glow-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border border-line text-mist hover:text-fg hover:border-fg transition-colors"
              aria-label="Close project details"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <span className="inline-block font-mono text-xs text-accent border border-accent/30 rounded-full px-3 py-1 mb-4">
              {project.stat.value}
            </span>

            <h3 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-medium tracking-tight mb-1">
              {project.name}
            </h3>
            <p className="font-mono text-xs text-accent mb-5">{project.tag}</p>

            <p className="text-mist text-sm leading-relaxed mb-6">{project.desc}</p>

            <div className="mb-6">
              <p className="font-mono text-xs text-mist tracking-wide mb-2.5">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-panel2 rounded-lg px-2.5 py-1.5 text-fg/85 border border-line"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {project.categories?.length > 0 && (
              <div className="mb-6">
                <p className="font-mono text-xs text-mist tracking-wide mb-2.5">
                  CATEGORIES
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-mono text-accent bg-accent/10 border border-accent/25 rounded-full px-3 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links?.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[42px] text-xs font-mono text-fg hover:text-accent transition-colors border border-line hover:border-accent rounded-full px-4 py-2"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
