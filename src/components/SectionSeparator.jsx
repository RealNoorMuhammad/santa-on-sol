import React from 'react';
import './SectionSeparator.css';
import desktopSep from '../assets/images/section-seperator-desktop.png';
import mobileSep from '../assets/images/section-seperator-mobile.png';

const SectionSeparator = ({ className = "" }) => {
  return (
    <div className={`section-separator ${className}`}>
      <img src={desktopSep} alt="Christmas Separator" className="separator-desktop" />
      <img src={mobileSep} alt="Christmas Separator" className="separator-mobile" />
    </div>
  );
};

export default SectionSeparator;

