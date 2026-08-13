import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Billboard, Text } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";
import { skills } from "../../data/content";

/* ── Group colour map (consistent across themes) ── */
const GROUP_COLORS = {
  "Languages":                "#A78BFA",
  "AI / GenAI":               "#22D3EE",
  "Backend":                  "#FB923C",
  "Mobile App Development":   "#34D399",
  "Frontend":                 "#F472B6",
  "Cloud & Tools":            "#FBBF24",
};
const fallbackColor = "#9CA3AF";

/* ── Flatten skills into a single array with group metadata ── */
function useSkillNodes() {
  return useMemo(() => {
    const items = skills.flatMap((g) =>
      g.items.map((name) => ({ name, group: g.group }))
    );
    const n = items.length;
    const golden = (1 + Math.sqrt(5)) / 2;
    const radius = 2.8;
    return items.map((item, i) => {
      const theta = (2 * Math.PI * i) / golden;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      return {
        ...item,
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ],
        color: GROUP_COLORS[item.group] || fallbackColor,
      };
    });
  }, []);
}

/* ── Glowing node sphere at each skill position ── */
function SkillNode({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.055, 8, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        toneMapped={false}
      />
    </mesh>
  );
}

/* ── Billboard text label next to node ── */
function SkillLabel({ position, name, color }) {
  return (
    <Billboard position={[position[0], position[1] + 0.16, position[2]]}>
      <Text fontSize={0.12} color={color} anchorX="center" anchorY="bottom" outlineWidth={0.005} outlineColor="#000000">
        {name}
      </Text>
    </Billboard>
  );
}

/* ── Connection lines between adjacent skills in the same group ── */
function GroupLines({ nodes }) {
  const lines = useMemo(() => {
    const grouped = {};
    nodes.forEach((n) => {
      if (!grouped[n.group]) grouped[n.group] = [];
      grouped[n.group].push(n);
    });

    const segs = [];
    Object.values(grouped).forEach((members) => {
      for (let i = 0; i < members.length - 1; i++) {
        segs.push({
          start: members[i].position,
          end: members[i + 1].position,
          color: members[i].color,
        });
      }
    });
    return segs;
  }, [nodes]);

  return (
    <>
      {lines.map((l, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...l.start, ...l.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={l.color} transparent opacity={0.12} />
        </line>
      ))}
    </>
  );
}

/* ── Auto-rotating group ── */
function RotatingGroup({ children }) {
  const ref = useRef();
  useFrame((_, d) => {
    ref.current.rotation.y += d * 0.06;
  });
  return <group ref={ref}>{children}</group>;
}

/* ── Central soft glow ── */
function CenterGlow({ theme }) {
  return (
    <mesh>
      <sphereGeometry args={[0.35, 16, 16]} />
      <meshBasicMaterial
        color={theme === "dark" ? "#8B5CF6" : "#7C3AED"}
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

/* ── Main export ── */
export default function Skills3D() {
  const { theme } = useTheme();
  const nodes = useSkillNodes();

  return (
    <div className="w-full h-[420px] sm:h-[500px]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={theme === "dark" ? 0.4 : 0.7} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />

        <Suspense fallback={null}>
          <RotatingGroup>
            {nodes.map((n, i) => (
              <group key={i}>
                <SkillNode position={n.position} color={n.color} />
                <SkillLabel position={n.position} name={n.name} color={n.color} />
              </group>
            ))}
            <GroupLines nodes={nodes} />
          </RotatingGroup>
          <CenterGlow theme={theme} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>

      {/* Colour legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 px-4">
        {Object.entries(GROUP_COLORS).map(([group, color]) => (
          <span key={group} className="inline-flex items-center gap-1.5 text-[11px] text-mist font-mono">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            {group}
          </span>
        ))}
      </div>
    </div>
  );
}
