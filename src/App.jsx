import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CertsAchievements from "./components/CertsAchievements";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CursorSpotlight from "./components/ui/CursorSpotlight";
import Terminal from "./components/ui/Terminal";

/* ── Scroll-to-top FAB ── */
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-violet text-white flex items-center justify-center shadow-xl glow-border text-lg"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <About />

        {/* Interactive terminal break */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="eyebrow mb-3">Explore</p>
            <h2 className="font-display text-2xl font-semibold mb-6">
              Interactive <span className="grad-text">terminal</span>
            </h2>
            <Terminal />
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <CertsAchievements />
        <Services />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
