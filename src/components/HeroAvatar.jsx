import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

export default function HeroAvatar() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      {/* ambient glow layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-violet/25 blur-[90px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-cyan/20 blur-[70px] translate-x-10" />
      </div>

      {/* rotating wire ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-cyan/20"
        style={{ borderStyle: "dashed" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] sm:w-[330px] sm:h-[330px] rounded-full border border-violet/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* avatar */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <img
          src={avatar}
          alt="Hammad Tanveer — 3D avatar"
          className="w-[260px] sm:w-[340px] md:w-[380px] rounded-3xl glow-border"
          style={{
            maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* floating badge dots */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-6 right-4 sm:right-10 bg-panel border border-line rounded-xl px-3 py-2 font-mono text-xs text-cyan shadow-lg"
      >
        {"</> GenAI"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-2 sm:left-6 bg-panel border border-line rounded-xl px-3 py-2 font-mono text-xs text-violet shadow-lg"
      >
        Android · Kotlin
      </motion.div>
    </div>
  );
}
