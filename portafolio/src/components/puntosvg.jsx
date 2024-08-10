// PuntoSVG.jsx
import React from 'react';

const PuntoSVG = ({ isActive, color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill={isActive ? color : '#CCCCCC'} />
  </svg>
);

export default PuntoSVG;
