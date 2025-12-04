import React from "react";
import "./LiveStream.css";
import candyCaneBorder from "../assets/images/candy-cane-border.png";

const LiveStream = () => {
  return (
    <section className="livestream-section" id="livestream">
      <div className="bg-snow"></div>
      
      {/* Floating decorations */}
      <div className="floating-ornament ornament-1">🎄</div>
      <div className="floating-ornament ornament-2">⭐</div>
      <div className="floating-ornament ornament-3">🎁</div>
      <div className="floating-ornament ornament-4">❄️</div>
      
      <div className="livestream-container relative-content">
        <div className="livestream-header">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE FROM Santa Claus Village
          </div>
          <h2 className="livestream-title">Santa Stream</h2>
          <p className="livestream-subtitle">Watch the magic happen in real-time! </p>
        </div>
        
        <div className="video-frame-wrapper">
          {/* Candy cane border frame */}
          <div className="candy-cane-frame">
            <img src={candyCaneBorder} alt="" className="candy-border-img" />
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/Cp4RRAEgpeU?list=TLGG22rTqBgJleMwMzEyMjAyNQ"
                title="Santa's Workshop Livestream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Corner decorations */}
          <div className="corner-decoration top-left">🔔</div>
          <div className="corner-decoration top-right">🔔</div>
          <div className="corner-decoration bottom-left">🎀</div>
          <div className="corner-decoration bottom-right">🎀</div>
        </div>
        
        <div className="stream-info">
          <div className="info-card">
            <span className="info-icon">🦌</span>
            <span className="info-text">Watch Santa prepare gifts</span>
          </div>
          <div className="info-card">
            <span className="info-icon">🎄</span>
            <span className="info-text">Live from the North Pole</span>
          </div>
          <div className="info-card">
            <span className="info-icon">✨</span>
            <span className="info-text">Christmas magic in action</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;

