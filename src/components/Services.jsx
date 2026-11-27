import { motion } from "framer-motion";
import { services, socials } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow pointer-events-none opacity-60" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mb-4">
          Available for{" "}
          <span className="italic font-normal text-accent">freelance work</span>
        </h2>
        <p className="text-mist max-w-xl mb-12">
          Taking on select Android, Kotlin Multiplatform, and Applied AI projects. Here&apos;s what I can build for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="card p-6 hover:border-accent/45 hover:-translate-y-0.5 transition-all duration-300 ease-out h-full"
            >
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl font-medium mt-2 mb-2">{s.title}</h3>
              <p className="text-mist text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <a
          href={socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] bg-accent hover:opacity-90 transition-opacity text-on-accent font-medium rounded-full px-6 py-3 text-sm"
        >
          Message on WhatsApp →
        </a>
      </div>
    </section>
  );
}
