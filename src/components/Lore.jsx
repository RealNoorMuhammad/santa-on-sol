import React from "react";
import "./Lore.css";

const Lore = () => {
  return (
    <section className="lore-section" id="lore">
       <div className="bg-snow"></div>
      <div className="lore-container">
        <div className="header-group">
            <h1 className="lore-title">The Chronicles of Santa</h1>
            <p className="lore-subtitle">A Tale of Magic and Blockchain</p>
        </div>
        
        <div className="story-book-container">
            <div className="story-content paper-texture">
                <div className="corner-decoration top-left"></div>
    
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
                
                <p className="story-text">
                    For centuries, Santa Claus delivered joy using ancient magic and reindeer power. But as the world went digital, Santa realized he needed an upgrade to keep up with the modern age. The elves at the North Pole began working on a top-secret project—a new kind of ledger that was transparent, immutable, and powered by pure Christmas spirit.
                </p>
                <p className="story-text">
                    Thus, <strong>Santa Coin</strong> was born.
                </p>
                <p className="story-text">
                    Built on the securest blockchain known to elf-kind, it ensures that every transaction spreads cheer and every holder gets a guaranteed spot on the Nice List. It's not just a currency; it's a movement to decentralize giving and bring the magic of Christmas to the entire world.
                </p>
                <p className="story-text">
                    Now, with the help of his community, Santa is ready to take his sleigh ride to the moon, delivering gifts and green candles to all the good boys and girls of the crypto verse.
                </p>
                
                <div className="signature-section">
                    <p className="signature">Santa Claus</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Lore;

