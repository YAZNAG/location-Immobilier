import React, { useState } from 'react';

const Step4 = ({ nextStep, prevStep, handleFormDataChange, formData }) => {
  const [modePaiement, setModePaiement] = useState('');
  const [frequencePaiement, setFrequencePaiement] = useState('');
  const [montantPaiement, setMontantPaiement] = useState('');

  const handleNext = () => {
    // Update formData state with the entered payment details
    handleFormDataChange({ modePaiement, frequencePaiement, montantPaiement });
    // Move to the next step
    nextStep();
  };

  const handlePrevious = () => {
    // Move to the previous step
    prevStep();
  };

  return (
    <div>
      <h2>Step 4: Payment Details</h2>
      <div>
        <label htmlFor="modePaiement">Payment Mode:</label>
        <input type="text" id="modePaiement" value={modePaiement} onChange={(e) => setModePaiement(e.target.value)} />
      </div>
      <div>
        <label htmlFor="frequencePaiement">Payment Frequency:</label>
        <input type="text" id="frequencePaiement" value={frequencePaiement} onChange={(e) => setFrequencePaiement(e.target.value)} />
      </div>
      <div>
        <label htmlFor="montantPaiement">Payment Amount:</label>
        <input type="number" id="montantPaiement" value={montantPaiement} onChange={(e) => setMontantPaiement(e.target.value)} />
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step4;
