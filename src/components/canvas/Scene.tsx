"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Custom Shader for the glowing particles
const vertexShader = `
  attribute float size;
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  
  float createCircle(vec2 uv, vec2 center, float radius, float blur) {
    float d = distance(uv, center);
    return smoothstep(radius, radius - blur, d);
  }

  void main() {
    float strength = createCircle(gl_PointCoord, vec2(0.5), 0.5, 0.4);
    if (strength < 0.01) discard;
    
    vec3 finalColor = vColor * strength;
    gl_FragColor = vec4(finalColor, strength * 0.8);
  }
`;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particleCount = isMobile ? 800 : 3500;

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color("#FF7300"); // Premium Orange
    const color2 = new THREE.Color("#FFB070"); // Light Gold

    for (let i = 0; i < particleCount; i++) {
      const r = 20 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 1.5 + 0.5;
    }

    return [positions, colors, sizes];
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        transparent
        vertexColors
      />
    </points>
  );
}

function MouseParallax() {
  const { camera, pointer } = useThree();
  
  useFrame(() => {
    camera.position.x += (pointer.x * 5 - camera.position.x) * 0.05;
    camera.position.y += (pointer.y * 5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none mix-blend-screen bg-background">
      <Canvas
        camera={{ position: [0, 0, 40], fov: 75 }}
        dpr={[1, 2]} // Limit DPR to 2 for performance
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      >
        <fog attach="fog" args={["#09090b", 20, 100]} />
        <Particles />
        <MouseParallax />
      </Canvas>
    </div>
  );
}
