'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, RoundedBox, Line } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import type { Group } from 'three';
import type { Brand } from '@/lib/products';

type Point = [number, number, number];

function quadraticPoints(p0: Point, p1: Point, p2: Point, segments = 24): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0];
    const y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1];
    const z = (1 - t) ** 2 * p0[2] + 2 * (1 - t) * t * p1[2] + t ** 2 * p2[2];
    pts.push([x, y, z]);
  }
  return pts;
}

function BrandMark({ brand }: { brand: Brand }) {
  const swoosh = useMemo(() => quadraticPoints([-0.55, -0.22, 0.37], [0.05, -0.02, 0.39], [0.68, -0.2, 0.37]), []);
  const streak = useMemo(() => quadraticPoints([-0.55, -0.26, 0.37], [0, -0.02, 0.39], [0.62, -0.14, 0.37]), []);

  if (brand === 'nike') {
    return <Line points={swoosh} color="#ffffff" lineWidth={4} />;
  }

  if (brand === 'adidas') {
    return (
      <group>
        {[-0.14, 0, 0.14].map((o, i) => (
          <Line key={i} points={[[-0.38 + o, -0.32, 0.37], [0.28 + o, -0.02, 0.39]]} color="#ffffff" lineWidth={3} />
        ))}
      </group>
    );
  }

  return <Line points={streak} color="#111111" lineWidth={4} />;
}

function Sneaker({ color, brand }: { color: string; brand: Brand }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group} rotation={[0, 0.5, 0]}>
      {/* sole */}
      <RoundedBox args={[2.3, 0.18, 0.85]} radius={0.06} smoothness={4} position={[0.05, -0.44, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#f2f2f2" roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[2.3, 0.05, 0.87]} radius={0.02} position={[0.05, -0.33, 0]} castShadow>
        <meshStandardMaterial color={color} roughness={0.4} />
      </RoundedBox>

      {/* heel / ankle collar, tallest point */}
      <RoundedBox args={[0.48, 0.46, 0.62]} radius={0.1} position={[-0.82, -0.1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.5} />
      </RoundedBox>

      {/* mid-foot upper */}
      <RoundedBox args={[1.5, 0.32, 0.72]} radius={0.1} position={[0.0, -0.2, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.55} />
      </RoundedBox>

      {/* toe box, tapered and lower */}
      <RoundedBox args={[0.62, 0.2, 0.58]} radius={0.12} position={[0.98, -0.3, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.55} />
      </RoundedBox>

      {/* tongue */}
      <RoundedBox args={[0.42, 0.3, 0.08]} radius={0.05} position={[0.12, 0.02, 0.3]} rotation={[0.35, 0, 0]} castShadow>
        <meshStandardMaterial color="#e5e5e5" roughness={0.7} />
      </RoundedBox>

      {/* laces */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[-0.14 + i * 0.16, -0.03 + i * 0.015, 0.32]} rotation={[0, 0, i % 2 === 0 ? 0.5 : -0.5]} castShadow>
          <boxGeometry args={[0.28, 0.035, 0.035]} />
          <meshStandardMaterial color="#dddddd" />
        </mesh>
      ))}

      <BrandMark brand={brand} />
    </group>
  );
}

interface Sneaker3DProps {
  color: string;
  brand: Brand;
}

export default function Sneaker3D({ color, brand }: Sneaker3DProps) {
  return (
    <Canvas shadows camera={{ position: [2.2, 1.8, 3.0], fov: 30 }} dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} />
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
        <Sneaker color={color} brand={brand} />
      </Float>
      <ContactShadows position={[0, -0.56, 0]} opacity={0.5} scale={6} blur={2.4} far={2} />
      <OrbitControls enablePan={false} minDistance={2.2} maxDistance={4.5} enableZoom />
    </Canvas>
  );
}
