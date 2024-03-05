import React, { useState } from 'react';

const Step4 = ({ nextStep, prevStep, handleFormDataChange, formData }) => {
  const [montantPaiement, setMontantPaiement] = useState(formData.montantPaiement || '');
  const [selectedBank, setSelectedBank] = useState(formData.selectedBank || '');
  const [ribProprietaire, setRibProprietaire] = useState(formData.ribProprietaire || '');

  const calculateTotalAmount = () => {
    const prixLocation = parseFloat(formData.prixLocation) || 0;
    const totalCharges = calculateTotalCharges();
    const montantChargeInclus = prixLocation + totalCharges;
    const montantTotal = montantChargeInclus + (montantChargeInclus * 0.05); // Ajouter 5% des charges
    return montantTotal;
  };

  const calculateTotalCharges = () => {
    let total = 0;
    for (const charge in formData.extraCharges) {
      total += parseFloat(formData.extraCharges[charge]) || 0;
    }
    return total;
  };

  const handleNext = () => {
    const totalAmount = calculateTotalAmount();
    handleFormDataChange({ 
      ...formData,
      montantPaiement: montantPaiement,
      selectedBank: selectedBank,
      ribProprietaire: ribProprietaire,
      totalAmount: totalAmount
    });
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

  return (
    <div>
      <h2>Étape 4: Détails de paiement</h2>
      <div>
        <label htmlFor="selectedBank">Type de banque:</label>
        <select value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
          <option value="">Sélectionnez la banque</option>
          <option value="CIH">CIH</option>
          <option value="BMCE">BMCE</option>
          <option value="BARID BANK">BARID BANK</option>
          {/* Ajoutez d'autres options pour d'autres banques */}
        </select>
      </div>
      <div>
        <label htmlFor="ribProprietaire">RIB du propriétaire (24 chiffres):</label>
        <input type="text" id="ribProprietaire" value={ribProprietaire} onChange={(e) => setRibProprietaire(e.target.value)} />
      </div>
      <div>
        <label>Montant total: {calculateTotalAmount()}</label>
      </div>
      <button onClick={handlePrevious}>Précédent</button>
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
};

export default Step4;
