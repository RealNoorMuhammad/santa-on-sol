import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GlacierTransition = ({ isActive, onComplete, onCovered }) => {
  const overlayRef = useRef(null);

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Initial state
    tl.set(overlayRef.current, {
      yPercent: -100,
      opacity: 1,
      display: 'block'
    })
    
    // "Glacier" sliding down - slower, heavier feel
    .to(overlayRef.current, {
      yPercent: 0,
      duration: 1.5,
      ease: "power2.inOut",
    })
    // Trigger theme change here when screen is covered
    .call(() => {
      if (onCovered) onCovered();
    })
    // Slight pause to let the "cold" settle
    .to({}, { duration: 0.2 })
    // Fade out nicely to reveal the white theme underneath
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power1.out"
    })
    .set(overlayRef.current, {
      display: 'none'
    });

  }, [isActive]);

  return (
    <div 
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999, // Above everything
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 80%, #e0f2fe 100%)',
        pointerEvents: 'none', // Don't block clicks once invisible
        display: 'none',
        boxShadow: '0 10px 50px rgba(255, 255, 255, 0.5)' // Glow at the bottom edge
      }}
    >
      {/* Optional: Add some "frost" texture or leading edge decoration */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: 0,
        width: '100%',
        height: '100px',
        background: 'url(/src/assets/images/snowflakes.png)', // Reuse existing asset if possible or generic gradient
        opacity: 0.5,
        filter: 'blur(4px)'
      }} />
    </div>
  );
};

export default GlacierTransition;

