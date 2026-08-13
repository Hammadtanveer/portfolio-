import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Hire Me" },
  { id: "contact", label: "Contact" },
];

/* ── Animated Sun / Moon icons ── */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const iconVariants = {
  initial: { scale: 0, rotate: -90, opacity: 0 },
  animate: { scale: 1, rotate: 0, opacity: 1 },
  exit:    { scale: 0, rotate: 90, opacity: 0 },
};

function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  return (
    <motion.button
      onClick={toggle}
      className={`relative w-10 h-10 rounded-full border border-line flex items-center justify-center text-mist hover:text-cyan transition-colors overflow-hidden ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.85 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute flex items-center justify-center"
          >
            <MoonIcon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute flex items-center justify-center"
          >
            <SunIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-line/30">
      <motion.div
        className="h-full bg-gradient-to-r from-violet to-cyan"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

/* ── Navigation ── */
export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          hammad<span className="text-violet">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-mist">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-cyan transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/Hammad_Tanveer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 text-sm font-mono hover:border-violet hover:text-violet transition-colors"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl leading-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass border-t border-line overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 font-mono text-sm">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-mist hover:text-cyan transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-line">
                <ThemeToggle />
                <span className="text-mist text-xs">
                  {theme === "dark" ? "Dark mode" : "Light mode"}
                </span>
              </div>
              <a href="/Hammad_Tanveer_Resume.pdf" target="_blank" rel="noreferrer" className="text-violet">
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      {scrolled && <ScrollProgress />}
    </header>
  );
}
