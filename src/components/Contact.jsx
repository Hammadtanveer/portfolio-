import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { socials } from "../data/content";
import Toast from "./ui/Toast";

export default function Contact() {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const copy = useCallback((text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ visible: true, message: `${label} copied!` });
      setTimeout(() => setToast({ visible: false, message: "" }), 2000);
    });
  }, []);

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 justify-center flex">Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold mb-6">
            Let's build something <span className="grad-text">worth shipping</span>.
          </h2>
          <p className="text-mist max-w-lg mx-auto mb-10">
            Open to full-time GenAI / Software Engineering roles, and freelance projects.
            Fastest way to reach me is WhatsApp.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-violet hover:bg-violet/90 transition-colors text-white font-medium rounded-full px-6 py-3 text-sm glow-border"
            >
              WhatsApp — {socials.phoneDisplay}
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2 border border-line hover:border-cyan hover:text-cyan transition-colors rounded-full px-6 py-3 text-sm font-mono"
            >
              {socials.email}
            </a>
          </div>

          {/* Copy buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => copy(socials.email, "Email")}
              className="text-xs font-mono text-mist hover:text-cyan transition-colors border border-line hover:border-cyan/40 rounded-full px-3 py-1.5"
            >
              📋 Copy Email
            </button>
            <button
              onClick={() => copy(socials.phoneDisplay, "Phone")}
              className="text-xs font-mono text-mist hover:text-cyan transition-colors border border-line hover:border-cyan/40 rounded-full px-3 py-1.5"
            >
              📋 Copy Phone
            </button>
          </div>

          <div className="flex justify-center gap-6 font-mono text-sm text-mist">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors">
              GitHub ↗
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-line pt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-mist font-mono">
          <p>© {new Date().getFullYear()} Hammad Tanveer. Built with React &amp; Three.js.</p>
          <p>New Delhi, India</p>
        </div>
      </footer>

      <Toast message={toast.message} visible={toast.visible} />
    </section>
  );
}
