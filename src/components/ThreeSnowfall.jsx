import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const SnowParticles = ({ count = 1500, color }) => {
  const mesh = useRef();
  const mouse = useRef(new THREE.Vector3(9999, 9999, 0)); // Mouse position in 3D space
  const { viewport, camera } = useThree();

  // Track mouse position and convert to 3D world coordinates
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates to -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Project to 3D plane at z=0 (approximate particle depth)
      const vector = new THREE.Vector3(x, y, 0);
      vector.unproject(camera);
      
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      
      mouse.current.copy(pos);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);
  
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.01; // vx
      velocities[i * 3 + 1] = -Math.random() * 0.03 - 0.01; // vy
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01; // vz
    }
    
    return { positions, velocities };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    const geom = mesh.current.geometry;
    const currentPositions = geom.attributes.position.array;
    const repulsionRadius = 3.0; // Distance to affect particles
    const repulsionStrength = 0.05; // How strong the push is
    
    for (let i = 0; i < count; i++) {
      let px = currentPositions[i * 3];
      let py = currentPositions[i * 3 + 1];
      let pz = currentPositions[i * 3 + 2];
      
      // Interaction with mouse
      const dx = px - mouse.current.x;
      const dy = py - mouse.current.y;
      // Simple 2D distance check for performance (ignoring Z mostly for interaction feel)
      const distSq = dx * dx + dy * dy; 
      
      if (distSq < repulsionRadius * repulsionRadius) {
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / repulsionRadius) * repulsionStrength;
        
        // Push away
        if (dist > 0.01) {
          velocities[i * 3] += (dx / dist) * force;
          velocities[i * 3 + 1] += (dy / dist) * force;
        }
      }

      // Apply velocities
      currentPositions[i * 3] += velocities[i * 3];
      currentPositions[i * 3 + 1] += velocities[i * 3 + 1];
      currentPositions[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Damping (friction) to return to normal fall speed
      velocities[i * 3] *= 0.98;
      velocities[i * 3 + 1] = THREE.MathUtils.lerp(velocities[i * 3 + 1], -Math.random() * 0.03 - 0.01, 0.02); 
      velocities[i * 3 + 2] *= 0.98;

      // Wrap around screen
      if (currentPositions[i * 3 + 1] < -10) {
        currentPositions[i * 3 + 1] = 10;
        currentPositions[i * 3] = (Math.random() - 0.5) * 20;
        currentPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        // Reset velocity on respawn
        velocities[i * 3] = (Math.random() - 0.5) * 0.01;
        velocities[i * 3 + 1] = -Math.random() * 0.03 - 0.01;
      }
    }
    
    geom.attributes.position.needsUpdate = true;
    mesh.current.rotation.y += 0.0005;
  });

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 32, 32);
    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }, []);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color={color}
        map={texture}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        alphaTest={0.01}
      />
    </points>
  );
};

const ThreeSnowfall = ({ theme }) => {
  const snowColor = theme === 'snow-white' ? '#2563eb' : '#ffffff'; 

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 50,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: 'none' }}
        // Re-enable events for this internal component logic, 
        // but canvas itself is pointer-events: none so it doesn't block clicks on DOM.
        // Actually, to track mouse across window we used window listener, 
        // so we don't strictly need R3F events on the canvas for this.
        events={null} 
      >
        <SnowParticles count={1500} color={snowColor} />
      </Canvas>
    </div>
  );
};

export default ThreeSnowfall;
