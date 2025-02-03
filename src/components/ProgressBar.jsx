import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, currentSection, totalSections }) => {
  const sectionNumbers = Array.from({ length: totalSections }, (_, i) => i + 1);

  return (
    <div className="progress-bar-container">
      <div className="progress-steps">
        {sectionNumbers.map(number => (
          <div key={number} className={`step-item ${number < currentSection ? 'completed' : ''} ${number === currentSection ? 'active' : ''}`}>
            <div className="step-number">{number}</div>
          </div>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
