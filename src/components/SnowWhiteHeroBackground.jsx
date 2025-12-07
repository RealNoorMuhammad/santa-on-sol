import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SnowWhiteHeroBackground = () => {
  // Generate particles for a magical snow effect
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // start x position %
      scale: Math.random() * 0.5 + 0.5, // scale variation
      opacity: Math.random() * 0.5 + 0.3, // opacity variation
      duration: Math.random() * 15 + 10, // fall duration
      delay: Math.random() * 5, // start delay
    }));
  }, []);

  // Generate some larger "soft" flakes for depth
  const bigFlakes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `big-${i}`,
      x: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        // A magical winter gradient that stays light/white but adds depth
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 50%, #e6f4ff 100%)',
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(173, 216, 230, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Standard Snowflakes */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}%`, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`], // Gentle sway
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #fff, #dbeafe)', // White to very light blue
            borderRadius: '50%',
            filter: 'blur(1px)',
            boxShadow: '0 0 5px rgba(191, 219, 254, 0.5)',
            scale: p.scale,
          }}
        />
      ))}

      {/* Larger, softer flakes for parallax/depth */}
      {bigFlakes.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, x: `${p.x}%`, rotate: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
            x: [`${p.x}%`, `${p.x + (Math.random() * 20 - 10)}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(219,234,254,0.4) 100%)',
            borderRadius: '50%',
            filter: 'blur(4px)',
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default SnowWhiteHeroBackground;

