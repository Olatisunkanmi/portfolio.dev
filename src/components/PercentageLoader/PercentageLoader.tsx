// src/components/PercentageLoader.tsx
import React, { useState, useEffect } from 'react';
import './PercentageLoader.scss'; // Import the styles

const PercentageLoader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const incrementPercentage = () => {
      setPercentage((prev) => Math.min(prev + 1, 100));
    };

    const intervalId = setInterval(incrementPercentage, 300); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-bar font-sans" style={{ width: `${percentage}%` }}></div>
      <p>{percentage}%</p>
    </div>
  );
};

export default PercentageLoader;