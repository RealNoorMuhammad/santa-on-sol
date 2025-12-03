import React from 'react';
import './CustomSeparator.css';

const CustomSeparator = ({ type = "top", className = "" }) => {
  // 'top' means it's separating nav and hero (pointing down or flat bottom)
  // 'bottom' means it's separating sections (pointing up or wavy)
  
  return (
    <div className={`custom-separator ${type} ${className}`}>
      <div className="snow-ground">
        {/* Wavy snow path */}
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="separator-wave"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="decorative-elements">
        {/* Trees */}
        <div className="tree tree-1">🎄</div>
        <div className="tree tree-2">🌲</div>
        <div className="tree tree-3">🎄</div>
        
        {/* Snowflakes */}
        <div className="snowflake s1">❄️</div>
        <div className="snowflake s2">❄️</div>
        <div className="snowflake s3">❄️</div>
        
        {/* Snowman */}
        <div className="snowman">☃️</div>
      </div>
    </div>
  );
};

export default CustomSeparator;
