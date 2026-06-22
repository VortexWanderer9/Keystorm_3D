import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useMousePosition } from '../../utils/hooks';

export const InteractiveKeyboard = () => {
  const groupRef = useRef();
  const mousePos = useMousePosition();

  useFrame(() => {
    if (groupRef.current) {
      const rotationX = (mousePos.y / window.innerHeight - 0.5) * 0.3;
      const rotationY = (mousePos.x / window.innerWidth - 0.5) * 0.4;

      groupRef.current.rotation.x += (rotationX - groupRef.current.rotation.x) * 0.08;
      groupRef.current.rotation.y += (rotationY - groupRef.current.rotation.y) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Keyboard Base */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[4, 0.3, 1.5]} />
        <meshStandardMaterial
          color="#141829"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Keycaps - Row 1 */}
      {[...Array(14)].map((_, i) => (
        <group key={`row1-${i}`} position={[-2.6 + i * 0.4, 0.2, 0.4]}>
          <mesh>
            <boxGeometry args={[0.35, 0.35, 0.35]} />
            <meshStandardMaterial
              color={`hsl(${i * 26}, 100%, 50%)`}
              metalness={0.95}
              roughness={0.08}
              emissive={`hsl(${i * 26}, 100%, 30%)`}
              emissiveIntensity={0.4}
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
      {[...Array(15)].map((_, i) => (
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
      particleRef.current.position.y = startY + Math.sin(state.clock.elapsedTime + index) * 0.3;
      particleRef.current.position.x = startX + Math.cos(state.clock.elapsedTime + index) * 0.2;
      particleRef.current.rotation.x += 0.008;
      particleRef.current.rotation.y += 0.012;
    }
  });

  return (
    <mesh ref={particleRef} position={[startX, startY, 0.5]}>
      <sphereGeometry args={[0.04, 12, 12]} />
      <meshStandardMaterial
        color={['#00ffff', '#ff00ff', '#00ff00'][index % 3]}
        emissive={['#00ffff', '#ff00ff', '#00ff00'][index % 3]}
        emissiveIntensity={0.9}
      />
    </mesh>
  );
};

export default InteractiveKeyboard;
