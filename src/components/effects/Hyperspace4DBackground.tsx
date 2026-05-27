import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "framer-motion";
import { useSmoothMouse } from "../../hooks/useSmoothMouse";

const CYAN = new THREE.Color("#22d3ee");
const VIOLET = new THREE.Color("#a78bfa");
const FUCHSIA = new THREE.Color("#e879f9");

type Vec4 = [number, number, number, number];

function buildTesseract(): { vertices: Vec4[]; edges: [number, number][] } {
  const vertices: Vec4[] = [];
  for (let i = 0; i < 16; i++) {
    vertices.push([
      i & 1 ? 1 : -1,
      i & 2 ? 1 : -1,
      i & 4 ? 1 : -1,
      i & 8 ? 1 : -1,
    ]);
  }
  const edges: [number, number][] = [];
  for (let i = 0; i < 16; i++) {
    for (let j = i + 1; j < 16; j++) {
      const diff =
        (vertices[i][0] !== vertices[j][0] ? 1 : 0) +
        (vertices[i][1] !== vertices[j][1] ? 1 : 0) +
        (vertices[i][2] !== vertices[j][2] ? 1 : 0) +
        (vertices[i][3] !== vertices[j][3] ? 1 : 0);
      if (diff === 1) edges.push([i, j]);
    }
  }
  return { vertices, edges };
}

function rotate4D(
  v: Vec4,
  aXY: number,
  aXZ: number,
  aXW: number,
  aYZ: number,
  aYW: number,
  aZW: number
): Vec4 {
  let [x, y, z, w] = v;

  let cos = Math.cos(aXY);
  let sin = Math.sin(aXY);
  [x, y] = [x * cos - y * sin, x * sin + y * cos];

  cos = Math.cos(aXZ);
  sin = Math.sin(aXZ);
  [x, z] = [x * cos - z * sin, x * sin + z * cos];

  cos = Math.cos(aXW);
  sin = Math.sin(aXW);
  [x, w] = [x * cos - w * sin, x * sin + w * cos];

  cos = Math.cos(aYZ);
  sin = Math.sin(aYZ);
  [y, z] = [y * cos - z * sin, y * sin + z * cos];

  cos = Math.cos(aYW);
  sin = Math.sin(aYW);
  [y, w] = [y * cos - w * sin, y * sin + w * cos];

  cos = Math.cos(aZW);
  sin = Math.sin(aZW);
  [z, w] = [z * cos - w * sin, z * sin + w * cos];

  return [x, y, z, w];
}

function project4Dto3D(v: Vec4, distance: number): THREE.Vector3 {
  const [x, y, z, w] = v;
  const factor = distance / (distance - w);
  return new THREE.Vector3(x * factor, y * factor, z * factor);
}

function Tesseract({
  scale = 1.4,
  opacity = 0.85,
  color = CYAN,
  speed = 1,
  wOffset = 0,
}: {
  scale?: number;
  opacity?: number;
  color?: THREE.Color;
  speed?: number;
  wOffset?: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useSmoothMouse(0.05);
  const { vertices, edges } = useMemo(() => buildTesseract(), []);

  const linePairs = useMemo(
    () =>
      edges.map(([a, b]) => ({
        a,
        b,
        hue: a / 16,
      })),
    [edges]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    const mx = (mouse.x - 0.5) * 2;
    const my = (mouse.y - 0.5) * 2;

    const aXY = t * 0.35 + mx * 0.4;
    const aXZ = t * 0.28 + my * 0.35;
    const aXW = t * 0.42 + mx * 0.55 + wOffset;
    const aYZ = t * 0.22;
    const aYW = t * 0.38 + my * 0.45;
    const aZW = t * 0.31 + (mx + my) * 0.2;

    const projected = vertices.map((v) => {
      const r = rotate4D(v, aXY, aXZ, aXW, aYZ, aYW, aZW);
      return project4Dto3D(r, 3.2).multiplyScalar(scale);
    });

    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const line = child as THREE.Object3D & { geometry?: THREE.BufferGeometry };
        const pair = linePairs[i];
        if (!pair || !line.geometry) return;
        const pos = line.geometry.getAttribute("position") as THREE.BufferAttribute;
        const pA = projected[pair.a];
        const pB = projected[pair.b];
        pos.setXYZ(0, pA.x, pA.y, pA.z);
        pos.setXYZ(1, pB.x, pB.y, pB.z);
        pos.needsUpdate = true;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {linePairs.map((pair, i) => (
        <Line
          key={i}
          points={[
            [0, 0, 0],
            [0.01, 0.01, 0.01],
          ]}
          color={color}
          lineWidth={1.2}
          transparent
          opacity={opacity * (0.6 + pair.hue * 0.4)}
        />
      ))}
    </group>
  );
}

function HyperParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const mouse = useSmoothMouse(0.04);
  const count = 3200;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 28;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 12;

      const mix = Math.random();
      const c = mix < 0.33 ? CYAN : mix < 0.66 ? VIOLET : FUCHSIA;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const mx = (mouse.x - 0.5) * 2;
    const my = (mouse.y - 0.5) * 2;
    ref.current.rotation.y = t * 0.015 + mx * 0.12;
    ref.current.rotation.x = my * 0.08;
    ref.current.position.z = Math.sin(t * 0.3) * 0.5;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WarpGrid() {
  const gridRef = useRef<THREE.Group>(null!);
  const mouse = useSmoothMouse(0.06);
  const scrollRef = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    scrollRef.current += 0.02;
    if (gridRef.current) {
      gridRef.current.position.z = (scrollRef.current % 1) * 4 - 2;
      gridRef.current.rotation.z = (mouse.x - 0.5) * 0.04;
      gridRef.current.position.y = -3 + Math.sin(t * 0.5) * 0.15;
    }
  });

  const lines = useMemo(() => {
    const result: [THREE.Vector3, THREE.Vector3][] = [];
    const size = 24;
    const step = 1.2;
    for (let i = -size; i <= size; i += step) {
      result.push([
        new THREE.Vector3(-size, 0, i),
        new THREE.Vector3(size, 0, i),
      ]);
      result.push([
        new THREE.Vector3(i, 0, -size),
        new THREE.Vector3(i, 0, size),
      ]);
    }
    return result;
  }, []);

  return (
    <group ref={gridRef} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -3, 0]}>
      {lines.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#22d3ee"
          lineWidth={0.5}
          transparent
          opacity={0.12 + (i % 5) * 0.015}
        />
      ))}
    </group>
  );
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null!);
  const mouse = useSmoothMouse(0.05);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.x = t * 0.08 + (mouse.y - 0.5) * 0.3;
      group.current.rotation.y = t * 0.12 + (mouse.x - 0.5) * 0.4;
    }
  });

  return (
    <group ref={group} position={[0, 0, -6]}>
      {[3.5, 5, 6.5, 8].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.4]}>
          <torusGeometry args={[r, 0.012, 8, 128]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#a78bfa" : "#22d3ee"}
            transparent
            opacity={0.15 - i * 0.02}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent() {
  const mouse = useSmoothMouse(0.05);
  const scrollProgress = useRef(0);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (v) => {
    scrollProgress.current = v;
  });

  useFrame((state) => {
    const mx = (mouse.x - 0.5) * 2;
    const my = (mouse.y - 0.5) * 2;
    const scroll = scrollProgress.current;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mx * 1.8, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -my * 1.2 + 0.5, 0.04);
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      10 - scroll * 4,
      0.03
    );
    state.camera.lookAt(0, 0, -2);
  });

  return (
    <>
      <color attach="background" args={["#030014"]} />
      <fog attach="fog" args={["#030014", 8, 38]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 4]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-5, -2, 6]} intensity={0.8} color="#22d3ee" />

      <Stars radius={60} depth={40} count={2500} factor={3.5} saturation={0.6} fade speed={0.6} />

      <HyperParticleField />
      <WarpGrid />
      <FloatingRings />

      <Tesseract scale={1.6} color={CYAN} speed={1} wOffset={0} />
      <group position={[4, 1.5, -3]} scale={0.55}>
        <Tesseract scale={1.2} color={VIOLET} speed={1.3} wOffset={1.2} opacity={0.6} />
      </group>
      <group position={[-4.5, -1, -2]} scale={0.4}>
        <Tesseract scale={1.1} color={FUCHSIA} speed={0.9} wOffset={2.4} opacity={0.5} />
      </group>
    </>
  );
}

const Hyperspace4DBackground = () => (
  <div className="hyperspace-bg fixed inset-0 -z-10" aria-hidden>
    <div className="hyperspace-vignette pointer-events-none absolute inset-0 z-[1]" />
    <div className="hyperspace-noise pointer-events-none absolute inset-0 z-[2]" />
    <Canvas
      camera={{ position: [0, 0.5, 10], fov: 55 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  </div>
);

export default Hyperspace4DBackground;
