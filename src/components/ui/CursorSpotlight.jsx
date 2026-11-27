import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * Global cursor spotlight — a subtle radial glow that follows the mouse.
 * Desktop only; disabled on touch devices.
 */
export default function CursorSpotlight() {
  const { theme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const el = ref.current;
    if (!el) return;

    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.background =
          `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, var(--spotlight-color), transparent 40%)`;
      });
    };
    const onLeave = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Theme-aware subtle warm bronze spotlight
  const spotlightColor =
    theme === "dark"
      ? "rgba(198, 161, 98, 0.055)"
      : "rgba(140, 104, 48, 0.03)";

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-[60] transition-opacity duration-500"
      style={{ opacity: 0, "--spotlight-color": spotlightColor }}
    />
  );
}
