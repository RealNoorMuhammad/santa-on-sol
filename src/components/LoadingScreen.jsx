import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import santaRunningGif from '../assets/images/santa-running.gif';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide scrollbar while loading
    document.body.style.overflow = 'hidden';
    
    const duration = 5000; // 5 seconds total
    const interval = 30; // Update every 30ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            window.scrollTo(0, 0); // Ensure we start at the top
            document.body.style.overflow = ''; // Restore scrollbar
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${progress >= 100 ? 'fade-out' : ''}`}>
      {/* Stars Background */}
      <div className="loading-stars">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="loading-content">
        {/* Santa Running GIF */}
        <div className="santa-gif-container">
          <img src={santaRunningGif} alt="Santa Running" className="santa-loading-gif" />
          {/* Trailing magic dust */}
          <div className="magic-trail">
            {[...Array(8)].map((_, i) => (
              <span 
                key={i} 
                className="sparkle"
                style={{ animationDelay: `${i * 0.1}s` }}
              >✨</span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 className="loading-title">

          Santa is Coming

        </h1>

        {/* Progress Bar Container */}
        <div className="progress-container">
          {/* Candy Cane Progress Bar */}
          <div className="progress-bar-wrapper">
   
            
            <div className="progress-bar-track">
              <div 
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              >
                <div className="candy-stripes"></div>
              </div>
              
              {/* Santa Icon on Progress */}
              <div 
                className="progress-santa"
                style={{ left: `calc(${Math.min(progress, 95)}% - 15px)` }}
              >
                🎅
              </div>
            </div>
            
         
          </div>

          {/* Percentage Display */}
          <div className="progress-text">
            <span className="progress-percent">{Math.round(progress)}%</span>
            <span className="loading-message">
              {progress < 25 && "Feeding the reindeer..."}
              {progress >= 25 && progress < 50 && "Loading presents..."}
              {progress >= 50 && progress < 75 && "Checking the nice list..."}
              {progress >= 75 && progress < 100 && "Almost ready for takeoff!"}
              {progress >= 100 && "Ho Ho Ho! Let's go!"}
            </span>
          </div>
        </div>

      
      </div>

   
    
    </div>
  );
};

export default LoadingScreen;

