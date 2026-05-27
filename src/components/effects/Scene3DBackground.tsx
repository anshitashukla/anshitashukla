import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useSmoothMouse } from "../../hooks/useSmoothMouse";

function ParticleField({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 2400;
    const pts = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.08;
    if (ref.current) {
      ref.current.rotation.y = t + (mouse.x - 0.5) * 0.4;
      ref.current.rotation.x = (mouse.y - 0.5) * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64748b"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

function FloatingRings({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.x = (mouse.y - 0.5) * 0.25;
    group.current.rotation.y = t * 0.12 + (mouse.x - 0.5) * 0.35;
  });

  return (
    <group ref={group}>
      {[2.2, 3.1, 4].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2 + i * 0.15, 0, 0]}>
          <torusGeometry args={[radius, 0.012, 8, 120]} />
          <meshBasicMaterial color={i === 1 ? "#38bdf8" : "#6366f1"} transparent opacity={0.22 - i * 0.04} />
        </mesh>
      ))}
    </group>
  );
}

function AmbientScene({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <ParticleField mouse={mouse} />
      <FloatingRings mouse={mouse} />
    </>
  );
}

const Scene3DBackground = () => {
  const mouse = useSmoothMouse(0.05);

  return (
    <div className="scene-3d-bg" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <AmbientScene mouse={mouse} />
        </Suspense>
      </Canvas>
      <div className="scene-3d-vignette" />
    </div>
  );
};

export default Scene3DBackground;
