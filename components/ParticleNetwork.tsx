'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 150;
const MAX_DISTANCE = 3.5;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Initialize particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 15;
      const vx = (Math.random() - 0.5) * 0.015;
      const vy = (Math.random() - 0.5) * 0.015;
      const vz = (Math.random() - 0.5) * 0.015;
      temp.push({ position: new THREE.Vector3(x, y, z), velocity: new THREE.Vector3(vx, vy, vz) });
    }
    return temp;
  }, []);

  const pointPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const linePositions = useMemo(() => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3), []);
  const lineColors = useMemo(() => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3), []);

  const color1 = new THREE.Color('#ff4d00'); // portfolio-orange
  const color2 = new THREE.Color('#262626'); // portfolio-border / dark gray

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    let linePosIndex = 0;
    let lineColorIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Update position
      p.position.add(p.velocity);

      // Bounce off boundaries
      if (Math.abs(p.position.x) > 15) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 15) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 10) p.velocity.z *= -1;

      // Update points array
      pointPositions[i * 3] = p.position.x;
      pointPositions[i * 3 + 1] = p.position.y;
      pointPositions[i * 3 + 2] = p.position.z;

      // Check connections to other particles
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const p2 = particles[j];
        const dist = p.position.distanceTo(p2.position);

        if (dist < MAX_DISTANCE) {
          const alpha = 1.0 - (dist / MAX_DISTANCE);
          
          linePositions[linePosIndex++] = p.position.x;
          linePositions[linePosIndex++] = p.position.y;
          linePositions[linePosIndex++] = p.position.z;

          linePositions[linePosIndex++] = p2.position.x;
          linePositions[linePosIndex++] = p2.position.y;
          linePositions[linePosIndex++] = p2.position.z;

          // Interpolate color based on distance
          const lerpedColor = color2.clone().lerp(color1, alpha);
          
          lineColors[lineColorIndex++] = lerpedColor.r;
          lineColors[lineColorIndex++] = lerpedColor.g;
          lineColors[lineColorIndex++] = lerpedColor.b;
          
          lineColors[lineColorIndex++] = lerpedColor.r;
          lineColors[lineColorIndex++] = lerpedColor.g;
          lineColors[lineColorIndex++] = lerpedColor.b;
        }
      }
    }

    // Update geometry buffers
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, linePosIndex), 3));
    linesRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(lineColors.slice(0, lineColorIndex), 3));
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    if(linesRef.current.geometry.attributes.color) {
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={pointPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#b0b0b0" transparent opacity={0.6} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

export default function ParticleNetwork() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
