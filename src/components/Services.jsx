import { motion } from "framer-motion";
import { services, socials } from "../data/content";
import TiltCard from "./ui/TiltCard";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow pointer-events-none opacity-60" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="eyebrow mb-3">Freelance</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
          Available for <span className="grad-text">freelance work</span>
        </h2>
        <p className="text-mist max-w-xl mb-12">
          Taking on freelance projects alongside my full-time search. Here's what I can build for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard intensity={8}>
                <div className="card p-6 hover:border-violet/50 transition-colors h-full">
                  <span className="font-mono text-xs text-violet">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display font-semibold text-lg mt-2 mb-2">{s.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">{s.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <a
          href={socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-violet hover:bg-violet/90 transition-colors text-white font-medium rounded-full px-6 py-3 text-sm glow-border"
        >
          Message on WhatsApp →
        </a>
      </div>
    </section>
  );
}
