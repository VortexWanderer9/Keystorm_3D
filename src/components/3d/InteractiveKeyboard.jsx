import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useMousePosition } from '../../utils/hooks';

export const InteractiveKeyboard = () => {
  const groupRef = useRef();
  const mousePos = useMousePosition();

  useFrame(() => {
    if (groupRef.current) {
      const rotationX = (mousePos.y / window.innerHeight - 0.5) * 0.4;
      const rotationY = (mousePos.x / window.innerWidth - 0.5) * 0.6;

      groupRef.current.rotation.x += (rotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (rotationY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Keyboard Base */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[4, 0.3, 1.5]} />
        <meshStandardMaterial
          color="#141829"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Keycaps - Row 1 */}
      {[...Array(14)].map((_, i) => (
        <group key={`row1-${i}`} position={[-2.6 + i * 0.4, 0.2, 0.4]}>
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshStandardMaterial
              color={`hsl(${i * 26}, 100%, 50%)`}
              metalness={0.9}
              roughness={0.1}
              emissive={`hsl(${i * 26}, 100%, 30%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}

      {/* Keycaps - Row 2 */}
      {[...Array(14)].map((_, i) => (
        <group key={`row2-${i}`} position={[-2.6 + i * 0.4, 0.2, 0]}>
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshStandardMaterial
              color={`hsl(${(i * 26 + 130) % 360}, 100%, 50%)`}
              metalness={0.9}
              roughness={0.1}
              emissive={`hsl(${(i * 26 + 130) % 360}, 100%, 30%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}

      {/* Keycaps - Row 3 */}
      {[...Array(14)].map((_, i) => (
        <group key={`row3-${i}`} position={[-2.6 + i * 0.4, 0.2, -0.4]}>
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshStandardMaterial
              color={`hsl(${(i * 26 + 260) % 360}, 100%, 50%)`}
              metalness={0.9}
              roughness={0.1}
              emissive={`hsl(${(i * 26 + 260) % 360}, 100%, 30%)`}
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </group>
  );
};

const FloatingParticle = ({ index }) => {
  const particleRef = useRef();
  const startY = Math.random() * 2 - 1;
  const startX = Math.random() * 4 - 2;

  useFrame((state) => {
    if (particleRef.current) {
      particleRef.current.position.y = startY + Math.sin(state.clock.elapsedTime + index) * 0.5;
      particleRef.current.position.x = startX + Math.cos(state.clock.elapsedTime + index) * 0.3;
      particleRef.current.rotation.x += 0.01;
      particleRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={particleRef} position={[startX, startY, 0.5]}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial
        color={['#00ffff', '#ff00ff', '#00ff00'][index % 3]}
        emissive={['#00ffff', '#ff00ff', '#00ff00'][index % 3]}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
};

export default InteractiveKeyboard;
