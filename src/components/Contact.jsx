import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { socials } from "../data/content";
import Toast from "./ui/Toast";

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function Contact() {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 2200);
  }, []);

  const copy = useCallback((text, label) => {
    if (!navigator.clipboard) {
      showToast(`${label}: ${text}`);
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(`${label} copied`))
      .catch(() => showToast(`Copy failed — ${text}`));
  }, [showToast]);

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-6xl font-medium tracking-tight mb-6">
            Let&apos;s build something{" "}
            <span className="italic font-normal text-accent">worth shipping</span>.
          </h2>
          <p className="text-mist max-w-lg mx-auto mb-10">
            Open to full-time Software Engineer (Android / KMP / Applied AI) roles, and freelance projects.
            Fastest way to reach me is WhatsApp.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] bg-accent hover:opacity-90 transition-opacity text-on-accent font-medium rounded-full px-6 py-3 text-sm"
            >
              WhatsApp — {socials.phoneDisplay}
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center justify-center min-h-[44px] border border-line hover:border-accent hover:text-accent transition-colors rounded-full px-6 py-3 text-sm font-mono"
            >
              {socials.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => copy(socials.email, "Email")}
              className="inline-flex items-center gap-2 min-h-[44px] text-xs font-mono text-mist hover:text-accent transition-colors border border-line hover:border-accent/40 rounded-full px-4 py-2"
            >
              <CopyIcon /> Copy Email
            </button>
            <button
              onClick={() => copy(socials.phoneDisplay, "Phone")}
              className="inline-flex items-center gap-2 min-h-[44px] text-xs font-mono text-mist hover:text-accent transition-colors border border-line hover:border-accent/40 rounded-full px-4 py-2"
            >
              <CopyIcon /> Copy Phone
            </button>
          </div>

          <div className="flex justify-center gap-6 font-mono text-sm text-mist">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors py-2">
              GitHub ↗
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors py-2">
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
