import React, { useState } from 'react';

const Step3 = ({ nextStep, prevStep, handleFormDataChange, formData, type }) => {
  const [extraCharges, setExtraCharges] = useState([]);

  const handleNext = () => {
    handleFormDataChange({ extraCharges });
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

  const handleChargeChange = (charge) => {
    if (extraCharges.includes(charge)) {
      setExtraCharges(extraCharges.filter((item) => item !== charge));
    } else {
      setExtraCharges([...extraCharges, charge]);
    }
  };

  const renderExtraCharges = () => {
    switch (type) {
      case 'Maison':
        return (
          <div>
            <h3>House Charges</h3>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Lawn Care')}
                onChange={() => handleChargeChange('Lawn Care')}
              />
              Lawn Care
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Homeowner Association Fees')}
                onChange={() => handleChargeChange('Homeowner Association Fees')}
              />
              Homeowner Association Fees
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Property Maintenance')}
                onChange={() => handleChargeChange('Property Maintenance')}
              />
              Property Maintenance
            </label>
          </div>
        );
      case 'Appartement':
        return (
          <div>
            <h3>Apartment Charges</h3>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Condo Fees')}
                onChange={() => handleChargeChange('Condo Fees')}
              />
              Condo Fees
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Property Tax')}
                onChange={() => handleChargeChange('Property Tax')}
              />
              Property Tax
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Insurance')}
                onChange={() => handleChargeChange('Insurance')}
              />
              Insurance
            </label>
          </div>
        );
      case 'Espace commercial':
        return (
          <div>
            <h3>Commercial Space Charges</h3>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Commercial Property Tax')}
                onChange={() => handleChargeChange('Commercial Property Tax')}
              />
              Commercial Property Tax
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Maintenance of Common Areas')}
                onChange={() => handleChargeChange('Maintenance of Common Areas')}
              />
              Maintenance of Common Areas
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Security Services')}
                onChange={() => handleChargeChange('Security Services')}
              />
              Security Services
            </label>
          </div>
        );
      case 'Terrain':
        return (
          <div>
            <h3>Land Charges</h3>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Property Tax')}
                onChange={() => handleChargeChange('Property Tax')}
              />
              Property Tax
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Landscaping')}
                onChange={() => handleChargeChange('Landscaping')}
              />
              Landscaping
            </label>
            <label>
              <input
                type="checkbox"
                checked={extraCharges.includes('Utilities')}
                onChange={() => handleChargeChange('Utilities')}
              />
              Utilities
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Step 3: Additional Charges</h2>
      {renderExtraCharges()}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step3;
