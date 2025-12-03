import React, { useState } from "react";
import "./Tokenomics.css";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "99dkd8uWbAPF4yjKBU42mxd8BP9bJMybuGkyb6Hapump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="tokenomics-section" id="tokenomics">
      <div className="bg-snow"></div>
      <div className="tokenomics-container relative-content">
        <div className="header-group">
            <h1 className="tokenomics-title">Tokenomics</h1>
            <p className="tokenomics-subtitle">Santa's Treasury Distribution</p>
        </div>
        
        <div className="contract-address-wrapper">
            <div className="contract-address-container paper-texture">
                <div className="tape-strip"></div>
                <p className="contract-label">Contract Address:</p>
                <div className="address-row">
                    <input 
                        type="text" 
                        value={contractAddress} 
                        readOnly 
                        className="contract-input"
                    />
                    <button onClick={handleCopy} className="copy-btn">
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </div>

        <div className="tokenomics-cards">
          <div className="tokenomics-card paper-texture card-1">
             <div className="pin"></div>
            <div className="card-icon">🎁</div>
            <h3 className="card-title">Total Supply</h3>
            <p className="card-paragraph highlight">1,000,000,000</p>
            <p className="card-paragraph">Tokens minted for Christmas</p>
          </div>
          
          <div className="tokenomics-card paper-texture card-2">
             <div className="pin"></div>
            <div className="card-icon">🦌</div>
            <h3 className="card-title">Liquidity</h3>
            <p className="card-paragraph highlight">Burnt Forever</p>
            <p className="card-paragraph">Safe as the North Pole</p>
          </div>
          
          <div className="tokenomics-card paper-texture card-3">
             <div className="pin"></div>
            <div className="card-icon">🎅</div>
            <h3 className="card-title">Tax</h3>
            <p className="card-paragraph highlight">0% Buy / 0% Sell</p>
            <p className="card-paragraph">No grinch taxes here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
