import React from 'react';
import axios from 'axios';
const Step5 = ({ prevStep, formData, ownerInfo, extraCharges, paymentInfo, submitForm }) => {
    const handlePrevious = () => {
      prevStep();
    };
  
    const handleSubmit = async () => {
        // Rassembler toutes les données pour la soumission
        const submissionData = {
          formData,
          ownerInfo,
          extraCharges,
          paymentInfo
        };
  
        try {
          // Envoyer les données à votre API en utilisant axios
          const response = await axios.post('http://localhost:5000/api/immobiliers', submissionData);
          console.log('Response from server:', response.data);
          // Afficher un message de succès ou rediriger l'utilisateur vers une autre page
        } catch (error) {
          console.error('Error submitting data:', error);
          // Afficher un message d'erreur à l'utilisateur
        }
      };
  
  return (
    <div>
      <h2>Step 5: Summary</h2>
      <h3>Summary of Form Data:</h3>
      <p>Nom: {formData?.nom}</p>
      <p>Adresse: {formData?.adresse}</p>
      <p>Description: {formData?.description}</p>
      <p>Type: {formData?.type}</p>
      <p>Taille: {formData?.taille}</p>
      <p>Prix de location: {formData?.prixLocation}</p>
      <p>Disponibilité: {formData?.disponibilite ? 'Disponible' : 'Non disponible'}</p>
      
      {/* Afficher les informations du propriétaire */}
      <h3>Owner Information:</h3>
      <p>Nom du propriétaire: {ownerInfo?.nom}</p>
      <p>Email du propriétaire: {ownerInfo?.email}</p>
      <p>Téléphone du propriétaire: {ownerInfo?.telephone}</p>
      
      {/* Afficher les charges supplémentaires */}
      <h3>Extra Charges:</h3>
      <ul>
        {extraCharges?.map((charge, index) => (
          <li key={index}>{charge}</li>
        ))}
      </ul>
      
      {/* Afficher les informations de paiement */}
      <h3>Payment Information:</h3>
      <p>Méthode de paiement: {paymentInfo?.method}</p>
      <p>Montant: {paymentInfo?.amount}</p>
      <p>Date de paiement: {paymentInfo?.date}</p>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step5;
