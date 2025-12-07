import React from "react";
import "./HeroSection.css";
import SnowWhiteHeroBackground from "./SnowWhiteHeroBackground";

const HeroSection = ({ isSnowWhiteTheme }) => {
  return (
    <section className="hero-section">
      {isSnowWhiteTheme && <SnowWhiteHeroBackground />}
      <div className="hero-content relative-content">
        <div className="hero-badge">Official Santa Claus Coin</div>
        <h1 className="big-title">
          $SANTA <br />
         
        </h1>
        <h3 className="medium-title">All creator rewards are used to buy gifts for kids in need</h3>
        <div className="hero-cta-wrapper">
          <a href="https://dexscreener.com/solana/3h3sQKtJvss3enWoqiucKXNDTGgHf1bGXC7mkmeWKiRM" target="_blank" rel="noopener noreferrer" className="hero-buy-btn">
            <span className="btn-content">
              <span className="desktop-text">JOIN THE MOVEMENT</span>
              <span className="mobile-text">Buy Now</span>
            </span>
            <div className="btn-shine"></div>
          </a>
          <p className="cta-subtext">Live on Pump.fun</p>
          <br/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
