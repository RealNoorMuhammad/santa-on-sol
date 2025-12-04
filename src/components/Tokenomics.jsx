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
            <h1 className="tokenomics-title">Contract Address</h1>
            <p className="tokenomics-subtitle">The Official Santa Token</p>
        </div>
        
        <div className="contract-address-wrapper prominent">
            <div className="contract-address-container paper-texture">
                <div className="tape-strip"></div>
                <div className="decoration-corner top-left">🎄</div>
                <div className="decoration-corner top-right">🎄</div>
                
                <p className="contract-label">Copy & Paste to Buy:</p>
                <div className="address-row">
                    <input 
                        type="text" 
                        value={contractAddress} 
                        readOnly 
                        className="contract-input"
                    />
                    <button onClick={handleCopy} className="copy-btn">
                        {copied ? "Copied!" : "Copy Address"}
                    </button>
                </div>
                
             
            </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
