import React from "react";
import "./SantaSeparator.css";
import santaDeers from "../assets/images/santa-deers.png";

const SantaSeparator = ({ className = "" }) => {
  return (
    <div className={`santa-separator ${className}`}>
      <div className="santa-stripe"></div>
      <div className="santa-center">
        <span className="santa-label">Santa’s Sleigh Is En Route</span>
        <img src={santaDeers} alt="Santa sleigh" className="santa-sleigh" />
      </div>
      <div className="santa-stripe"></div>
    </div>
  );
};

export default SantaSeparator;

