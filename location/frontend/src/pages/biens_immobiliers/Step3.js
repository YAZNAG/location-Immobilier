import React, { useState } from 'react';

const Step3 = ({ nextStep, prevStep, handleFormDataChange, formData }) => {
  const [extraCharges, setExtraCharges] = useState({});
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  const handlePrevious = () => {
    prevStep();
  };

  const handlePropertyTypeChange = (propertyType) => {
    setSelectedPropertyType(propertyType);
    setExtraCharges({}); 
  };

  const handleChargeChange = (charge, value) => {
    const updatedCharges = { ...extraCharges, [charge]: parseFloat(value) || 0 };
    setExtraCharges(updatedCharges);
  };

  const calculateTotalCharges = (charges) => {
    let total = 0;
    for (const charge in charges) {
      total += charges[charge];
    }
    return total;
  };

  const saveAndNext = () => {
    // Mettre à jour l'état formData avec les charges supplémentaires
    const updatedFormData = { 
      ...formData,
      extraCharges: extraCharges,
      totalExtraCharges: calculateTotalCharges(extraCharges)
    };
    handleFormDataChange(updatedFormData);
    // Passer à l'étape suivante
    nextStep();
  };

  return (
    <div>
      <h2>Step 3: Additional Charges</h2>
      <label>
        Property Type:
        <select value={selectedPropertyType} onChange={(e) => handlePropertyTypeChange(e.target.value)}>
          <option value="">Select</option>
          <option value="Maison">Maison</option>
          <option value="Appartement">Appartement</option>
          <option value="Espace commercial">Espace commercial</option>
          <option value="Terrain">Terrain</option>
          <option value="Stationnement">Stationnement</option>
        </select>
      </label>
      {selectedPropertyType && (
        <div>
          {/* Affichage des charges supplémentaires en fonction du type de propriété sélectionné */}
          {selectedPropertyType === 'Maison' && (
    <div>
        <h3>House Charges</h3>
        
        <label>
            Electricity:
            <input
                type="text"
                value={extraCharges['Electricity'] || ''}
                onChange={(e) => handleChargeChange('Electricity', e.target.value)}
            />
        </label>
        <label>
            Water:
            <input
                type="text"
                value={extraCharges['Water'] || ''}
                onChange={(e) => handleChargeChange('Water', e.target.value)}
            />
        </label>
        <label>
            Property Tax:
            <input
                type="text"
                value={extraCharges['Property Tax'] || ''}
                onChange={(e) => handleChargeChange('Property Tax', e.target.value)}
            />
        </label>
        <label>
            Syndicate Fees:
            <input
                type="text"
                value={extraCharges['Syndicate Fees'] || ''}
                onChange={(e) => handleChargeChange('Syndicate Fees', e.target.value)}
            />
        </label>
        <label>
            Bank Credit:
            <input
                type="text"
                value={extraCharges['Bank Credit'] || ''}
                onChange={(e) => handleChargeChange('Bank Credit', e.target.value)}
            />
        </label>
        <label>
            Real Estate Agent:
            <input
                type="text"
                value={extraCharges['Real Estate Agent'] || ''}
                onChange={(e) => handleChargeChange('Real Estate Agent', e.target.value)}
            />
        </label>
        <label>
            Notary:
            <input
                type="text"
                value={extraCharges['Notary'] || ''}
                onChange={(e) => handleChargeChange('Notary', e.target.value)}
            />
        </label>
        
    </div>
)}

{selectedPropertyType === 'Appartement' && (
    <div>
        <h3>Appartement Charges</h3>
        
        <label>
            Electricity:
            <input
                type="text"
                value={extraCharges['Electricity'] || ''}
                onChange={(e) => handleChargeChange('Electricity', e.target.value)}
            />
        </label>
        <label>
            Water:
            <input
                type="text"
                value={extraCharges['Water'] || ''}
                onChange={(e) => handleChargeChange('Water', e.target.value)}
            />
        </label>
        <label>
            Property Tax:
            <input
                type="text"
                value={extraCharges['Property Tax'] || ''}
                onChange={(e) => handleChargeChange('Property Tax', e.target.value)}
            />
        </label>
        <label>
            Syndicate Fees:
            <input
                type="text"
                value={extraCharges['Syndicate Fees'] || ''}
                onChange={(e) => handleChargeChange('Syndicate Fees', e.target.value)}
            />
        </label>
        <label>
            Bank Credit:
            <input
                type="text"
                value={extraCharges['Bank Credit'] || ''}
                onChange={(e) => handleChargeChange('Bank Credit', e.target.value)}
            />
        </label>
        <label>
            Real Estate Agent:
            <input
                type="text"
                value={extraCharges['Real Estate Agent'] || ''}
                onChange={(e) => handleChargeChange('Real Estate Agent', e.target.value)}
            />
        </label>
        <label>
            Notary:
            <input
                type="text"
                value={extraCharges['Notary'] || ''}
                onChange={(e) => handleChargeChange('Notary', e.target.value)}
            />
        </label>
        {/* Ajoutez d'autres champs pour les frais de la maison */}
    </div>
)}
 {selectedPropertyType === 'Espace commercial' && (
    <div>
        <h3>Espace commercial Charges</h3>
        
        <label>
            Electricity:
            <input
                type="text"
                value={extraCharges['Electricity'] || ''}
                onChange={(e) => handleChargeChange('Electricity', e.target.value)}
            />
        </label>
        <label>
            Water:
            <input
                type="text"
                value={extraCharges['Water'] || ''}
                onChange={(e) => handleChargeChange('Water', e.target.value)}
            />
        </label>
        <label>
            Property Tax:
            <input
                type="text"
                value={extraCharges['Property Tax'] || ''}
                onChange={(e) => handleChargeChange('Property Tax', e.target.value)}
            />
        </label>
        <label>
            Syndicate Fees:
            <input
                type="text"
                value={extraCharges['Syndicate Fees'] || ''}
                onChange={(e) => handleChargeChange('Syndicate Fees', e.target.value)}
            />
        </label>
        <label>
            Bank Credit:
            <input
                type="text"
                value={extraCharges['Bank Credit'] || ''}
                onChange={(e) => handleChargeChange('Bank Credit', e.target.value)}
            />
        </label>
        <label>
            Real Estate Agent:
            <input
                type="text"
                value={extraCharges['Real Estate Agent'] || ''}
                onChange={(e) => handleChargeChange('Real Estate Agent', e.target.value)}
            />
        </label>
        <label>
            Notary:
            <input
                type="text"
                value={extraCharges['Notary'] || ''}
                onChange={(e) => handleChargeChange('Notary', e.target.value)}
            />
        </label>
        
    </div>
)}
 {selectedPropertyType === 'Terrain' && (
    <div>
        <h3>Terrain Charges</h3>
        
       
        <label>
            Property Tax:
            <input
                type="text"
                value={extraCharges['Property Tax'] || ''}
                onChange={(e) => handleChargeChange('Property Tax', e.target.value)}
            />
        </label>
        <label>
            Syndicate Fees:
            <input
                type="text"
                value={extraCharges['Syndicate Fees'] || ''}
                onChange={(e) => handleChargeChange('Syndicate Fees', e.target.value)}
            />
        </label>
        <label>
            Bank Credit:
            <input
                type="text"
                value={extraCharges['Bank Credit'] || ''}
                onChange={(e) => handleChargeChange('Bank Credit', e.target.value)}
            />
        </label>
        <label>
            Real Estate Agent:
            <input
                type="text"
                value={extraCharges['Real Estate Agent'] || ''}
                onChange={(e) => handleChargeChange('Real Estate Agent', e.target.value)}
            />
        </label>
        <label>
            Notary:
            <input
                type="text"
                value={extraCharges['Notary'] || ''}
                onChange={(e) => handleChargeChange('Notary', e.target.value)}
            />
        </label>
       
    </div>
)}
 {selectedPropertyType === 'Stationnement' && (
    <div>
        <h3>Stationnement Charges</h3>
        <label>
            Property Tax:
            <input
                type="text"
                value={extraCharges['Property Tax'] || ''}
                onChange={(e) => handleChargeChange('Property Tax', e.target.value)}
            />
        </label>
        <label>
            Syndicate Fees:
            <input
                type="text"
                value={extraCharges['Syndicate Fees'] || ''}
                onChange={(e) => handleChargeChange('Syndicate Fees', e.target.value)}
            />
        </label>
        <label>
            Bank Credit:
            <input
                type="text"
                value={extraCharges['Bank Credit'] || ''}
                onChange={(e) => handleChargeChange('Bank Credit', e.target.value)}
            />
        </label>
        <label>
            Real Estate Agent:
            <input
                type="text"
                value={extraCharges['Real Estate Agent'] || ''}
                onChange={(e) => handleChargeChange('Real Estate Agent', e.target.value)}
            />
        </label>
        <label>
            Notary:
            <input
                type="text"
                value={extraCharges['Notary'] || ''}
                onChange={(e) => handleChargeChange('Notary', e.target.value)}
            />
        </label>
        {/* Ajoutez d'autres champs pour les frais de la maison */}
    </div>
)}
        </div>
      )}
      <label>Total Charges: {calculateTotalCharges(extraCharges)}</label>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={saveAndNext}>Next</button>
    </div>
  );
};

export default Step3;
