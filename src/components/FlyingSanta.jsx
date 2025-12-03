import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import santaDeers from '../assets/images/santa-deers.png';

const FlyingSanta = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const currentScroll = window.scrollY;
      const tokenomicsSection = document.getElementById('tokenomics');
      
      if (!tokenomicsSection) return;

      // Get the position where tokenomics ends relative to the document
      const tokenomicsBottom = tokenomicsSection.offsetTop + tokenomicsSection.offsetHeight;
      
      // Show when scrolled more than 100px
      // Hide when scrolled past the end of tokenomics section
      if (currentScroll > 100 && currentScroll < tokenomicsBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Use the motion value subscription for better performance than native scroll listener if possible,
    // but for simple state toggles, checking on change is fine.
    const unsubscribe = scrollY.on("change", updateVisibility);

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.img
          src={santaDeers}
          alt="Flying Santa"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0.5 } }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 15, 
            mass: 1,
            duration: 1.5
          }}
          style={{
            position: 'fixed',
            bottom: '20%',
            left: '0',
            width: '300px', // Adjust based on image aspect ratio
            maxWidth: '40%', // Responsive constraint
            zIndex: 40, // Behind the navbar but above content
            pointerEvents: 'none', // Allow clicking through
            filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.3))'
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default FlyingSanta;

