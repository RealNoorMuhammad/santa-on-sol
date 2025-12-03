import React from "react";
import "./RealSanta.css";
import pumpfunLapland from "../assets/images/pumpfun-lapland.png";
import santaClaus from "../assets/images/santa-claus.jpg";
import santaDeers from "../assets/images/santa-deers.png";

const RealSanta = () => {
  return (
    <section className="real-santa-section" id="real-santa">
      <div className="bg-snow"></div>
      <div className="real-santa-container relative-content">
        <div className="header-group">
            <h1 className="real-santa-title">The Real Santa</h1>
            <p className="real-santa-subtitle">Spreading Joy on the Blockchain</p>
        </div>
        
        <div className="real-santa-content">
          <div className="content-block block-text block-1 paper-texture">
            <div className="pin"></div>
            <h2 className="block-title">Santa's Mission</h2>
            <p className="block-paragraph">Bringing gifts to every wallet.</p>
            <p className="block-paragraph">Naughty or nice, we verify on-chain.</p>
            <p className="block-paragraph">Transparency is our reindeer.</p>
            <p className="block-paragraph">Join the sleigh ride to the moon!</p>
          </div>
          
          <div className="content-block block-image block-2">
            <div className="image-box polaroid">
              <img src={pumpfunLapland} alt="Pumpfun Lapland" />
              <span className="caption">Lapland HQ</span>
            </div>
          </div>
          
          <div className="content-block block-image block-3">
             <div className="image-box polaroid">
              <img src={santaClaus} alt="Santa Claus" />
              <span className="caption">The Big Guy</span>
            </div>
          </div>
          
          <div className="content-block block-text block-4 paper-texture">
             <div className="pin"></div>
            <h2 className="block-title">North Pole Network</h2>
            <p className="block-paragraph">Built on the North Pole Network.</p>
            <p className="block-paragraph">Powered by Christmas Spirit.</p>
            <p className="block-paragraph">Secure as a chimney.</p>
            <p className="block-paragraph">Ho Ho HODL!</p>
          </div>
        </div>
        
        <div className="santa-sleigh-decoration">
            <img src={santaDeers} alt="Santa Sleigh" />
        </div>
      </div>
    </section>
  );
};

export default RealSanta;
