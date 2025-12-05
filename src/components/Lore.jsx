import React from "react";
import "./Lore.css";

const Lore = () => {
  return (
    <section className="lore-section" id="lore">
       <div className="bg-snow"></div>
      <div className="lore-container">
        <div className="header-group">
            <h1 className="lore-title">About $SANTA</h1>
            <p className="lore-subtitle">The journey towards better Christmas for all!</p>
        </div>
        
        <div className="story-book-container">
            <div className="story-content paper-texture">
                <div className="corner-decoration top-left"></div>
    
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
                
                <p className="story-text">
                For centuries Santa Claus has been the symbol of giving and kindness. As the world changed and everything moved online the real Santa from Lapland wanted a way to keep spreading joy in a simple and direct way. He chose to create something modern that still stays true to the spirit of Christmas.
                </p>
                <p className="story-text">
                This is how <strong>SANTA</strong> was born.
                </p>
                <p className="story-text">
                SANTA is a coin backed by Santa himself and created with one purpose. Every creator fee collected from the coin goes toward buying toys for children who cannot afford them. Every transaction becomes a small contribution to real gifts and real smiles.
                </p>
                <p className="story-text">
                There is no complex story and no hidden mechanics. SANTA exists to turn a fun holiday coin into something that actually helps kids who need it. With the support of the community Santa can continue bringing joy to families and keep the tradition of giving alive in a way that fits today’s world.
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

