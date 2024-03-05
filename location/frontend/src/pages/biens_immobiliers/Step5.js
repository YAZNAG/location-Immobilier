import React from 'react';

const Step5 = ({ prevStep, formData }) => {
    const handlePrevious = () => {
        prevStep();
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/immobiliers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }

            // Gérer la soumission réussie
            console.log('Form data submitted successfully');
            // Afficher un message de confirmation à l'utilisateur si nécessaire
        } catch (error) {
            console.error('Error submitting form data:', error.message);
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

            {/* Informations sur le propriétaire */}
            <h3>Owner Information:</h3>
            <p>CIN du propriétaire: {formData?.CINProprieter}</p>
            <p>Nom du propriétaire: {formData?.nomProprieter}</p>
            <p>Prénom du propriétaire: {formData?.prenomProprieter}</p>

            <p>Téléphone du propriétaire: {formData?.telephoneProprieter}</p>

            <h3>Extra Charges:</h3>
            {formData && formData.extraCharges && Object.entries(formData.extraCharges).map(([charge, value]) => (
                <p key={charge}>{charge}: {value}</p>
            ))}

            <h3>Payment Information:</h3>
           
            <p>Type de banque: {formData?.selectedBank}</p>
            <p>RIB du propriétaire: {formData?.ribProprietaire}</p>
            <p>Total Amount: {formData?.totalAmount}</p>
           
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Step5;
