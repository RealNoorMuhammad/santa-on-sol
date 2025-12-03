import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content relative-content">
        <div className="hero-badge">Welcome to the North Pole</div>
        <h1 className="big-title">
          Santa's Official <br />
         
        </h1>
        <h3 className="medium-title">Join the festive revolution!</h3>
        <div className="hero-cta-wrapper">
          <button className="hero-buy-btn">
            <span className="btn-content">
              <span className="desktop-text">Get Your Gift Now</span>
              <span className="mobile-text">Gift Now</span>
            </span>
            <div className="btn-shine"></div>
          </button>
          <p className="cta-subtext">Live on Pump.fun</p>
          <br/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
