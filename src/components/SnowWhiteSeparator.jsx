import React from 'react';

const SnowWhiteSeparator = () => {
  return (
    <div style={{
      width: '100%',
      height: '80px',
      position: 'relative',
      marginTop: '-40px',
      marginBottom: '-40px',
      zIndex: 5,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(211, 47, 47, 0.1) 20%, rgba(211, 47, 47, 0.3) 50%, rgba(211, 47, 47, 0.1) 80%, transparent 100%)',
        transform: 'translateY(-50%)'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: '#ffffff',
        padding: '0 20px',
      }}>
        <span style={{ fontSize: '20px', color: '#D32F2F', opacity: 0.6 }}>❄️</span>
        <span style={{ fontSize: '14px', color: '#D32F2F', opacity: 0.4 }}>•</span>
        <span style={{ fontSize: '20px', color: '#D32F2F', opacity: 0.8 }}>❄️</span>
        <span style={{ fontSize: '14px', color: '#D32F2F', opacity: 0.4 }}>•</span>
        <span style={{ fontSize: '20px', color: '#D32F2F', opacity: 0.6 }}>❄️</span>
      </div>
    </div>
  );
};

export default SnowWhiteSeparator;








