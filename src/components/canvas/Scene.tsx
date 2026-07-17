"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
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

function generateParticles(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const color1 = new THREE.Color("#FF7300"); // Premium Orange
  const color2 = new THREE.Color("#FFB070"); // Light Gold

  for (let i = 0; i < count; i++) {
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

  return { positions, colors, sizes };
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [particlesData, setParticlesData] = useState({
    positions: new Float32Array(0),
    colors: new Float32Array(0),
    sizes: new Float32Array(0),
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const timeout = setTimeout(() => {
      handleResize();
    }, 0);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const particleCount = isMobile ? 800 : 3500;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticlesData(generateParticles(particleCount));
  }, [isMobile]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  if (particlesData.positions.length === 0) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesData.positions.length / 3}
          args={[particlesData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesData.colors.length / 3}
          args={[particlesData.colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesData.sizes.length}
          args={[particlesData.sizes, 1]}
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
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 5 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 5 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none mix-blend-screen bg-background">
      <Canvas
        camera={{ position: [0, 0, 40], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      >
        <fog attach="fog" args={["#09090b", 20, 100]} />
        <Particles />
        <MouseParallax />
      </Canvas>
    </div>
  );
}
