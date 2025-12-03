import React, { useEffect, useState } from 'react';
import './Snowfall.css';
import snowflakeImg from '../assets/images/social-btn-background.png';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Create snowflakes with random properties
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position %
      animationDuration: 5 + Math.random() * 10, // Random speed between 5s and 15s
      animationDelay: Math.random() * 5, // Random delay
      opacity: 0.3 + Math.random() * 0.7, // Random opacity
      size: 10 + Math.random() * 20, // Random size between 10px and 30px
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            opacity: flake.opacity,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundImage: `url(${snowflakeImg})`
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
