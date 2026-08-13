import { motion, AnimatePresence } from "framer-motion";

/**
 * Minimal toast notification for copy-to-clipboard feedback.
 */
export default function Toast({ message, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 320, damping: 26 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] card px-5 py-2.5 font-mono text-sm text-cyan shadow-xl glow-border"
        >
          ✓ {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
