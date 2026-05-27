import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface SceneProps {
  mouse: { x: number; y: number };
}

const VIOLET = "#818cf8";
const CYAN = "#38bdf8";
const FUCHSIA = "#6366f1";
const SCREEN_BG = "#0a0a12";

function useCodeScreenTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = SCREEN_BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const lines: { text: string; color: string }[] = [
      { text: "// api/server.ts", color: "#64748b" },
      { text: "import express from 'express'", color: CYAN },
      { text: "const app = express()", color: "#e2e8f0" },
      { text: "app.use(cors())", color: FUCHSIA },
      { text: "await db.connect(URI)", color: VIOLET },
      { text: "export default app", color: "#a5f3fc" },
    ];

    ctx.font = '500 15px "JetBrains Mono", monospace';
    lines.forEach((line, i) => {
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 24, 36 + i * 28);
    });

    ctx.fillStyle = "rgba(34, 211, 238, 0.15)";
    ctx.fillRect(20, 210, 200, 3);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

function Laptop({ position = [0, 0, 0] as [number, number, number] }) {
  const codeTexture = useCodeScreenTexture();

  return (
    <group position={position} rotation={[0, -0.35, 0]}>
      <RoundedBox args={[2.6, 0.14, 1.7]} radius={0.04} position={[0, -0.08, 0.12]}>
        <meshStandardMaterial color="#94a3b8" metalness={0.75} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.12, 0.08, 1.7]} radius={0.02} position={[0, 0.02, -0.72]}>
        <meshStandardMaterial color="#cbd5e1" metalness={0.65} roughness={0.35} />
      </RoundedBox>
      <group position={[0, 0.72, -0.35]} rotation={[-0.55, 0, 0]}>
        <RoundedBox args={[2.5, 1.55, 0.07]} radius={0.03}>
          <meshStandardMaterial color="#64748b" metalness={0.55} roughness={0.4} />
        </RoundedBox>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[2.2, 1.35]} />
          <meshBasicMaterial
            map={codeTexture ?? undefined}
            color={codeTexture ? undefined : SCREEN_BG}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function ServerRack({ position = [0, 0, 0] as [number, number, number] }) {
  const units = [0, 1, 2];
  return (
    <group position={position}>
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[0.85, 0.08, 0.55]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.75} roughness={0.35} />
      </mesh>
      {units.map((u) => (
        <group key={u} position={[0, -0.35 + u * 0.42, 0]}>
          <RoundedBox args={[0.72, 0.32, 0.48]} radius={0.02}>
            <meshStandardMaterial color="#64748b" metalness={0.7} roughness={0.4} />
          </RoundedBox>
          {[0.28, 0.12, -0.08].map((z, i) => (
            <mesh key={i} position={[0.38, 0, z]}>
              <boxGeometry args={[0.04, 0.06, 0.04]} />
              <meshStandardMaterial
                color={i === 0 ? CYAN : i === 1 ? VIOLET : "#4ade80"}
                emissive={i === 0 ? CYAN : i === 1 ? VIOLET : "#4ade80"}
                emissiveIntensity={1.2}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function Database({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.4, 0]}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 1.1, 32]} />
        <meshStandardMaterial
          color="#94a3b8"
          metalness={0.85}
          roughness={0.25}
          emissive={VIOLET}
          emissiveIntensity={0.25}
        />
      </mesh>
      {[0.35, 0, -0.35].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.56, 0.04, 12, 32]} />
          <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.4} metalness={1} />
        </mesh>
      ))}
      <mesh position={[0, 0.62, 0]}>
        <cylinderGeometry args={[0.2, 0.35, 0.25, 16]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function CloudCluster({ position = [0, 0, 0] as [number, number, number] }) {
  const blobs: [number, number, number, number][] = [
    [0, 0, 0, 0.45],
    [-0.35, 0.1, 0.1, 0.32],
    [0.38, -0.05, -0.08, 0.36],
    [0.1, 0.2, -0.2, 0.28],
  ];
  return (
    <group position={position}>
      {blobs.map(([x, y, z, s], i) => (
        <mesh key={i} position={[x, y, z]} scale={s}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#e2e8f0"
            transparent
            opacity={0.35}
            metalness={0.1}
            roughness={0.4}
            emissive={CYAN}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function CpuChip({ position = [0, 0, 0] as [number, number, number] }) {
  const pins = useMemo(() => {
    const list: [number, number][] = [];
    for (let i = -4; i <= 4; i++) {
      list.push([i * 0.1, 0.42]);
      list.push([i * 0.1, -0.42]);
      list.push([0.42, i * 0.1]);
      list.push([-0.42, i * 0.1]);
    }
    return list;
  }, []);

  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0.3]}>
      <mesh>
        <boxGeometry args={[0.9, 0.08, 0.9]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.55, 0.02, 0.55]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive={VIOLET}
          emissiveIntensity={0.35}
          wireframe
        />
      </mesh>
      {pins.map(([x, z], i) => (
        <mesh key={i} position={[x, -0.06, z]}>
          <boxGeometry args={[0.04, 0.1, 0.04]} />
          <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function GitNetwork({ position = [0, 0, 0] as [number, number, number] }) {
  const nodes: [number, number, number][] = [
    [-0.8, 0.3, 0],
    [0, 0.6, 0.2],
    [0.9, 0.2, -0.1],
    [0.2, -0.5, 0.15],
    [-0.5, -0.2, -0.2],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 0],
    [2, 3],
  ];

  return (
    <group position={position}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a], nodes[b]]}
          color={CYAN}
          lineWidth={1.5}
          transparent
          opacity={0.7}
        />
      ))}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={i === 1 ? FUCHSIA : VIOLET}
            emissive={i === 1 ? FUCHSIA : VIOLET}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      <mesh position={[1.05, 0.55, 0]}>
        <boxGeometry args={[0.35, 0.08, 0.02]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function CodeBrackets({ position = [0, 0, 0] as [number, number, number] }) {
  const bar = (x: number, y: number, h: number, rot: number) => (
    <mesh position={[x, y, 0]} rotation={[0, 0, rot]}>
      <boxGeometry args={[0.08, h, 0.08]} />
      <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.6} metalness={0.8} />
    </mesh>
  );

  return (
    <group position={position} scale={0.9}>
      <group position={[-0.35, 0, 0]}>
        {bar(-0.12, 0, 0.7, 0)}
        {bar(-0.05, 0.32, 0.22, -0.4)}
        {bar(-0.05, -0.32, 0.22, 0.4)}
      </group>
      <group position={[0.35, 0, 0]}>
        {bar(0.12, 0, 0.7, 0)}
        {bar(0.05, 0.32, 0.22, 0.4)}
        {bar(0.05, -0.32, 0.22, -0.4)}
      </group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.12, 0.08]} />
        <meshStandardMaterial color={FUCHSIA} emissive={FUCHSIA} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function TerminalWindow({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.5, -0.1]}>
      <RoundedBox args={[1.4, 0.95, 0.06]} radius={0.04}>
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 0.38, 0.04]}>
        <boxGeometry args={[1.38, 0.12, 0.02]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      {[-0.35, -0.15, 0.05].map((x, i) => (
        <mesh key={i} position={[x, 0.38, 0.05]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial
            color={["#ef4444", "#eab308", "#22c55e"][i]}
            emissive={["#ef4444", "#eab308", "#22c55e"][i]}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.04]}>
        <planeGeometry args={[1.2, 0.65]} />
        <meshBasicMaterial color={SCREEN_BG} toneMapped={false} />
      </mesh>
      <mesh position={[-0.35, -0.05, 0.045]}>
        <boxGeometry args={[0.5, 0.04, 0.01]} />
        <meshBasicMaterial color={CYAN} toneMapped={false} />
      </mesh>
      <mesh position={[-0.2, -0.18, 0.045]}>
        <boxGeometry args={[0.75, 0.04, 0.01]} />
        <meshBasicMaterial color={VIOLET} toneMapped={false} />
      </mesh>
    </group>
  );
}

function EngineeringWorld({ mouse }: SceneProps) {
  const worldRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 1.1, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 0.65, 0.04);
    state.camera.lookAt(0, 0.1, 0);

    if (worldRef.current) {
      worldRef.current.rotation.y = THREE.MathUtils.lerp(
        worldRef.current.rotation.y,
        mouse.x * 0.18,
        0.05
      );
      worldRef.current.rotation.x = THREE.MathUtils.lerp(
        worldRef.current.rotation.x,
        mouse.y * 0.08,
        0.05
      );
      worldRef.current.position.y = Math.sin(t * 0.4) * 0.06;
    }
  });

  return (
    <group ref={worldRef}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <Laptop position={[0.2, -0.15, 0]} />
      </Float>

      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
        <ServerRack position={[-2.8, -0.5, -0.6]} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.45}>
        <Database position={[2.6, -0.35, -0.8]} />
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.55}>
        <CloudCluster position={[0.5, 1.85, -1.2]} />
      </Float>

      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <CpuChip position={[-1.6, 0.9, 0.4]} />
      </Float>

      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <GitNetwork position={[2.2, 0.75, 0.2]} />
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.7}>
        <CodeBrackets position={[-2.1, 1.1, 0.6]} />
      </Float>

      <Float speed={1.9} rotationIntensity={0.25} floatIntensity={0.5}>
        <TerminalWindow position={[2.5, 1.2, 0.5]} />
      </Float>
    </group>
  );
}

function SceneContent({ mouse }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} color="#f8fafc" />
      <pointLight position={[6, 4, 6]} intensity={0.7} color="#818cf8" />
      <pointLight position={[-6, -2, 4]} intensity={0.55} color="#38bdf8" />
      <EngineeringWorld mouse={mouse} />
    </>
  );
}

const InteractiveScene = ({
  mouse,
  className = "",
}: {
  mouse: { x: number; y: number };
  className?: string;
}) => (
  <div className={`absolute inset-0 ${className}`}>
    <Canvas
      camera={{ position: [0, 0.2, 9], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneContent mouse={mouse} />
      </Suspense>
    </Canvas>
  </div>
);

export default InteractiveScene;
