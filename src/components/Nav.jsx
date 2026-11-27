import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Works" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
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
      className={`relative w-10 h-10 rounded-full border border-line flex items-center justify-center text-mist hover:text-accent hover:border-accent/50 transition-colors overflow-hidden ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.88 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
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
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute flex items-center justify-center"
          >
            <SunIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 35, restDelta: 0.001 });
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-line/40">
      <motion.div
        className="h-full bg-accent origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

export default function Nav() {
  const { theme } = useTheme();
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
          : "bg-transparent border-b border-line/40"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display italic text-2xl tracking-tight text-fg hover:text-accent transition-colors">
          Hammad Tanveer
        </a>

        <ul className="hidden md:flex items-center gap-8 text-xs tracking-wide text-mist">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-fg transition-colors py-2">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="/Hammad_Tanveer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-accent underline underline-offset-4 hover:opacity-80 transition-opacity py-2"
          >
            Curriculum Vitae ↗
          </a>
        </div>

        <button
          className="md:hidden w-11 h-11 flex items-center justify-center text-fg"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass border-t border-line overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1 text-sm">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-mist hover:text-fg transition-colors py-2.5"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 mt-2 border-t border-line">
                <ThemeToggle />
                <span className="text-mist text-xs font-mono">
                  {theme === "dark" ? "Charcoal Dark" : "Paper Light"}
                </span>
              </div>
              <a
                href="/Hammad_Tanveer_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-accent font-mono text-xs py-3 underline underline-offset-4"
              >
                Curriculum Vitae ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
    </header>
  );
}
