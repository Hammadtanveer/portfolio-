import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Core() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.05;
  });
  return (
    <Icosahedron ref={meshRef} args={[1.4, 4]}>
      <MeshDistortMaterial
        color="#8B5CF6"
        emissive="#22D3EE"
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.4}
        distort={0.35}
        speed={1.6}
        wireframe={false}
      />
    </Icosahedron>
  );
}

function WireShell() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y -= delta * 0.08;
  });
  return (
    <Icosahedron ref={ref} args={[2.05, 1]}>
      <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.18} />
    </Icosahedron>
  );
}

export default function HeroOrb() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 4]} intensity={2} color="#8B5CF6" />
        <pointLight position={[-4, -2, -3]} intensity={1.5} color="#22D3EE" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
            <Core />
            <WireShell />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
