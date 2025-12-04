import React from 'react';
import './CustomSeparator.css';

const CustomSeparator = ({ type = "top", className = "" }) => {
  // 'top' means it's separating nav and hero (pointing down or flat bottom)
  // 'bottom' means it's separating sections (pointing up or wavy)
  
  return (
    <div className={`custom-separator ${type} ${className}`}>
     
      
      <div className="decorative-elements">
        {/* Trees */}
        <div className="tree tree-1">🎄</div>
        <div className="tree tree-2">🌲</div>
   
        
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
