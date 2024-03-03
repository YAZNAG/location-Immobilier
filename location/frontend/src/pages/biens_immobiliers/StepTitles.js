import React from 'react';
import "./css/style.css";
const StepTitles = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Information de Proprieter ' },
    { number: 2, title: 'Immibilier infos' },
    { number: 3, title: 'Extra charge' },
    { number: 4, title: 'Payement' },
    { number: 5, title: 'Validation' },
  ];

  return (
    <div className="step-titles">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`step-title ${step.number === currentStep ? 'active' : ''}`}
        >
          <span className="step-number">{step.number}</span>
          <span className="step-text">{step.title}</span>
        </div>
      ))}
    </div>
  );
};

export default StepTitles;