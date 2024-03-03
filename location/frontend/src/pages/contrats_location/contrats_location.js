import React, { useState } from 'react';


const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nom: '',
        adresse: '',
        description: '',
        type: '',
        taille: '',
        prixLocation: '',
        disponibilite: true,
        charges: [],
        equipements: [],
        paiements: [],
        fraisRetard: [],
        chargesPubliques: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire
        console.log(formData);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h2>Étape 1: Informations générales</h2>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                        {/* Ajoutez les autres champs pour l'étape 1 */}
                        <button onClick={nextStep}>Suivant</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2>Étape 2: Détails supplémentaires</h2>
                        <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} placeholder="Adresse" />
                        {/* Ajoutez les autres champs pour l'étape 2 */}
                        <button onClick={prevStep}>Précédent</button>
                        <button onClick={nextStep}>Suivant</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2>Étape 3: Confirmation</h2>
                        <p>Vérifiez les détails et soumettez le formulaire :</p>
                        {/* Affichez un résumé des informations saisies */}
                        <button onClick={prevStep}>Précédent</button>
                        <button onClick={handleSubmit}>Soumettre</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="multistep-form">
            {renderStep()}
        </div>
    );
};

export default MultiStepForm;
