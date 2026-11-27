import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

/* ── Theme color maps (Charcoal & Burnished Bronze / Warm Paper & Antique Brass) ── */
const PALETTE = {
  dark:  { primary: "#C6A162", accent: "#E6D5B8", ambient: 0.45, point: 1.8 },
  light: { primary: "#8C6830", accent: "#B8935A", ambient: 0.7,  point: 1.3 },
};

/* ── Crystal Core (distorted icosahedron) ── */
function CrystalCore({ colors }) {
  const ref = useRef();
  const { pointer } = useThree();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.14;
    ref.current.rotation.x += (pointer.y * 0.25 - ref.current.rotation.x) * 0.03;
    ref.current.rotation.y += (pointer.x * 0.25 - ref.current.rotation.y) * 0.03;
  });

  return (
    <Icosahedron ref={ref} args={[1.55, 4]}>
      <MeshDistortMaterial
        color={colors.primary}
        emissive={colors.accent}
        emissiveIntensity={0.35}
        roughness={0.1}
        metalness={0.55}
        distort={0.38}
        speed={1.7}
      />
    </Icosahedron>
  );
}

/* ── Wireframe shell (inner) ── */
function WireShell({ colors }) {
  const ref = useRef();
  useFrame((_, d) => {
    ref.current.rotation.y -= d * 0.08;
    ref.current.rotation.z += d * 0.025;
  });
  return (
    <Icosahedron ref={ref} args={[2.2, 1]}>
      <meshBasicMaterial color={colors.accent} wireframe transparent opacity={0.14} />
    </Icosahedron>
  );
}

/* ── Wireframe shell (outer, counter-rotating) ── */
function WireShell2({ colors }) {
  const ref = useRef();
  useFrame((_, d) => {
    ref.current.rotation.y += d * 0.05;
    ref.current.rotation.x -= d * 0.035;
  });
  return (
    <Icosahedron ref={ref} args={[2.75, 1]}>
      <meshBasicMaterial color={colors.primary} wireframe transparent opacity={0.07} />
    </Icosahedron>
  );
}

/* ── Particle dust field ── */
function ParticleDust({ count = 450, colors }) {
  const ref = useRef();

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sizes[i] = 0.4 + Math.random() * 1.2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));
    return geo;
  }, [count]);

  useFrame((_, d) => {
    ref.current.rotation.y += d * 0.018;
    ref.current.rotation.x += d * 0.006;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color={colors.accent}
        size={0.035}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Floating gem satellites ── */
function FloatingGems({ colors }) {
  const refs = [useRef(), useRef(), useRef(), useRef()];

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    refs[0].current.position.set(-3, Math.sin(t * 0.5) * 0.5 + 2.4, -1);
    refs[0].current.rotation.set(t * 0.3, t * 0.2, 0);
    refs[1].current.position.set(3.4, Math.cos(t * 0.4) * 0.4 - 1.8, 1);
    refs[1].current.rotation.set(0, t * 0.35, t * 0.15);
    refs[2].current.position.set(Math.sin(t * 0.3) * 0.3 + 2.8, 1.2, -2);
    refs[2].current.rotation.set(t * 0.2, 0, t * 0.45);
    refs[3].current.position.set(-2.5, Math.sin(t * 0.6) * 0.3 - 0.5, 2);
    refs[3].current.rotation.set(t * 0.15, t * 0.25, 0);
  });

  const mat = (c, e, ei) => ({ color: c, emissive: e, emissiveIntensity: ei, metalness: 0.85, roughness: 0.15 });

  return (
    <>
      <mesh ref={refs[0]}><octahedronGeometry args={[0.18, 0]} /><meshStandardMaterial {...mat(colors.primary, colors.accent, 0.35)} /></mesh>
      <mesh ref={refs[1]}><tetrahedronGeometry args={[0.14, 0]} /><meshStandardMaterial {...mat(colors.accent, colors.primary, 0.25)} /></mesh>
      <mesh ref={refs[2]}><octahedronGeometry args={[0.11, 0]} /><meshStandardMaterial {...mat(colors.primary, colors.accent, 0.45)} /></mesh>
      <mesh ref={refs[3]}><dodecahedronGeometry args={[0.1, 0]} /><meshStandardMaterial {...mat(colors.accent, colors.primary, 0.3)} /></mesh>
    </>
  );
}

/* ── Mouse-following group wrapper ── */
function MouseScene({ children }) {
  const group = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    group.current.rotation.y += (pointer.x * 0.12 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.08 - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

/* ── Main export ── */
export default function HeroScene3D() {
  const { theme } = useTheme();
  const c = PALETTE[theme] || PALETTE.dark;

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={c.ambient} />
        <pointLight position={[4, 3, 4]}   intensity={c.point}       color={c.primary} />
        <pointLight position={[-4, -2, -3]} intensity={c.point * 0.7} color={c.accent} />

        <Suspense fallback={null}>
          <MouseScene>
            <Float speed={1.1} rotationIntensity={0.35} floatIntensity={1.0}>
              <CrystalCore colors={c} />
              <WireShell colors={c} />
              <WireShell2 colors={c} />
            </Float>
            <FloatingGems colors={c} />
          </MouseScene>
          <ParticleDust count={450} colors={c} />
        </Suspense>
      </Canvas>
    </div>
  );
}
