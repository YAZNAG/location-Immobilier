import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContratsLocation = () => {
  const [selectedType, setSelectedType] = useState('Appartement');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://votre-api.com/biens_immobiliers?type=${selectedType}`);
        setProperties(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedType]);

  return (
    <div className="container">
      <aside>
        <div className="sidebar">
          {/* Vos liens de navigation ici */}
        </div>
      </aside>
      <div className="row">
        <div className="row select-type">
          <div className="columns medium-1 small-12">
            <span className="select-type-back"></span>
            <span className="desc">Type de bien</span>
          </div>
          <div className="columns medium-12 small-12 assetType">
            <div className="picto-type picto-appartement" onClick={() => setSelectedType('Appartement')}>
              <span className="picto"></span>
              <span className="text" data-type="appartment">Appartement</span>
            </div>
            {/* Autres types de biens immobiliers */}
          </div>
        </div>
        <div className="select-type-bottom">
          {/* Options supplémentaires ici */}
        </div>
        <div>
          <h2>Biens immobiliers de type {selectedType}</h2>
          <table>
            <thead>
              <tr>
                <th>Adresse</th>
                <th>Ville</th>
                <th>Superficie</th>
                {/* Ajoutez d'autres colonnes en fonction de vos données */}
              </tr>
            </thead>
            <tbody>
              {properties.map(property => (
                <tr key={property._id}>
                  <td>{property.bien_immobilier.adresse}</td>
                  <td>{property.bien_immobilier.ville}</td>
                  <td>{property.bien_immobilier.superficie}</td>
                  {/* Ajoutez d'autres cellules en fonction de vos données */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContratsLocation;
