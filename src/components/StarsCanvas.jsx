import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Stars() {
  const ref = useRef();

  // Generate random positions for a larger area
  const [positions] = useState(() => {
    // 2000 points => array of length 6000
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      // Increase radius to 3 for more coverage
      const r = 3 * Math.cbrt(Math.random());
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i] = r * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  // Slow rotation for a gentle effect
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}   // Increase star size
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    // Use fixed so it covers the screen even if the page scrolls
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
        <Stars />
      </Canvas>
    </div>
  );
}
