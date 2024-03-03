import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep, handleFormDataChange, formData }) => {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [taille, setTaille] = useState('');
  const [prixLocation, setPrixLocation] = useState('');
  const [disponibilite, setDisponibilite] = useState(true);

  const handleNext = () => {
    // Mettre à jour l'état formData avec les données saisies
    handleFormDataChange({ nom, adresse, description, type, taille, prixLocation, disponibilite });
    // Passer à l'étape suivante
    nextStep();
  };

  const handlePrevious = () => {
    // Revenir à l'étape précédente
    prevStep();
  };

  return (
    <div>
      <h2>Étape 2: Saisir les informations sur la propriété</h2>
      <div>
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div>
        <label htmlFor="adresse">Adresse :</label>
        <input type="text" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label htmlFor="type">Type :</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">-- Sélectionner le type --</option>
          <option value="Appartement">Appartement</option>
          <option value="Maison">Maison</option>
          <option value="Stationnement">Stationnement</option>
          <option value="Espace commercial">Espace commercial</option>
          <option value="Terrain">Terrain</option>
        </select>
      </div>
      <div>
        <label htmlFor="taille">Taille :</label>
        <input type="text" id="taille" value={taille} onChange={(e) => setTaille(e.target.value)} />
      </div>
      <div>
        <label htmlFor="prixLocation">Prix de location :</label>
        <input type="number" id="prixLocation" value={prixLocation} onChange={(e) => setPrixLocation(e.target.value)} />
      </div>
      <div>
        <label htmlFor="disponibilite">Disponibilité :</label>
        <select id="disponibilite" value={disponibilite} onChange={(e) => setDisponibilite(e.target.value === 'true')}>
          <option value="true">Disponible</option>
          <option value="false">Non disponible</option>
        </select>
      </div>
      <button onClick={handlePrevious}>Précédent</button>
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
};

export default Step2;
