import { useRef, useCallback } from "react";

/**
 * 3D perspective tilt container with dynamic glare.
 * Wrap any card to give it physics-based hover tilt.
 */
export default function TiltCard({ children, className = "", intensity = 10, glare = true, ...props }) {
  const el = useRef(null);
  const shine = useRef(null);

  const onMove = useCallback((e) => {
    const card = el.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;   // 0→1
    const y = (e.clientY - r.top) / r.height;    // 0→1
    const rX = (0.5 - y) * intensity;
    const rY = (x - 0.5) * intensity;

    card.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.025,1.025,1.025)`;

    if (shine.current) {
      shine.current.style.background =
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.13), transparent 55%)`;
      shine.current.style.opacity = "1";
    }
  }, [intensity]);

  const onLeave = useCallback(() => {
    if (el.current) el.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    if (shine.current) shine.current.style.opacity = "0";
  }, []);

  return (
    <div
      ref={el}
      className={`relative transition-transform duration-[400ms] ease-out will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
      {glare && (
        <div
          ref={shine}
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 z-10"
        />
      )}
    </div>
  );
}
