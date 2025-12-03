import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap-section" id="roadmap">
       <div className="bg-snow"></div>
      <div className="roadmap-container relative-content">
        <div className="header-group">
            <h1 className="roadmap-title">Santa's Flight Plan</h1>
            <p className="roadmap-subtitle">Delivering Joy, One Block at a Time</p>
        </div>
        
        <div className="flight-plan-map-container">
            {/* The Map Background Area */}
            <div className="flight-path-line">
                <svg className="path-svg" viewBox="0 0 800 1000" preserveAspectRatio="none">
                    <path 
                        d="M 100 50 Q 400 200 700 100 T 100 400 T 700 700 T 400 950" 
                        fill="none" 
                        stroke="var(--color-holly-red)" 
                        strokeWidth="3" 
                        strokeDasharray="10,10"
                        className="animated-path"
                    />
                </svg>
            </div>

            <div className="flight-stop stop-1">
                <div className="map-pin">
                    <span className="pin-number">1</span>
                </div>
                <div className="stop-note paper-texture">
                    <div className="pin-head"></div>
                    <h3 className="stop-title">The Workshop</h3>
                    <p className="stop-details">Elves assembling the community. Website launch and contract deployment.</p>
                </div>
            </div>

            <div className="flight-stop stop-2">
                <div className="map-pin">
                    <span className="pin-number">2</span>
                </div>
                <div className="stop-note paper-texture">
                    <div className="pin-head"></div>
                    <h3 className="stop-title">Loading Sleigh</h3>
                    <p className="stop-details">Marketing campaigns, partnerships, and listing on CoinGecko/CMC.</p>
                </div>
            </div>

            <div className="flight-stop stop-3">
                <div className="map-pin">
                    <span className="pin-number">3</span>
                </div>
                <div className="stop-note paper-texture">
                     <div className="pin-head"></div>
                    <h3 className="stop-title">Takeoff</h3>
                    <p className="stop-details">CEX listings, major influencer partnerships, and 5,000 holders.</p>
                </div>
            </div>

            <div className="flight-stop stop-4">
                <div className="map-pin">
                    <span className="pin-number">4</span>
                </div>
                <div className="stop-note paper-texture">
                     <div className="pin-head"></div>
                    <h3 className="stop-title">Christmas Morning</h3>
                    <p className="stop-details">Global adoption, merchandise store, and charity donations.</p>
                </div>
            </div>

        </div><br/><br/>
      </div>
    </section>
  );
};

export default Roadmap;
