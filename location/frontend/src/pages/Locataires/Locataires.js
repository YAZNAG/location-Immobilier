import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Locataires() {
  const [locataires, setlocataires] = useState([]);
  const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      cin: ''
  });
  const [showForm, setShowForm] = useState(false); // État pour contrôler l'affichage du formulaire

  useEffect(() => {
      axios.get('http://localhost:5000/api/locataires')
          .then(response => {
              setlocataires(response.data);
              console.log('Données des Locataires:', response.data);
          })
          .catch(error => {
              console.error('Erreur lors de la récupération des locataires:', error);
          });
  }, []);

  const modifierLocataire = (id) => {
      console.log(`Modifier locataire avec l'ID : ${id}`);
      // Mettez en œuvre la logique pour modifier le propriétaire ici
  };
  const supprimerLocataire = (id) => {
    // Vérifier si l'ID est valide
    if (!id) {
        console.error('ID de locataire invalide');
        return;
    }

    // Effectuer la requête HTTP DELETE vers votre API pour supprimer le propriétaire
    axios.delete(`http://localhost:5000/api/locataires/${id}`)
        .then(response => {
            console.log('Propriétaire supprimé avec succès:', response.data);
            // Rafraîchir la liste des propriétaires après la suppression
            axios.get('http://localhost:5000/api/locataires')
                .then(response => {
                    setlocataires(response.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des locataires:', error);
                });
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du locataire:', error);
        });
};

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/locataires', formData)
        .then(response => {
            console.log('Propriétaire ajouté avec succès:', response.data);
            setFormData({
                nom: '',
                prenom: '',
                email: '',
                telephone: '',
                cin: ''
            });
            // Rafraîchir la liste des propriétaires après l'ajout
            axios.get('http://localhost:5000/api/locataires')
                .then(response => {
                    setlocataires(response.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des locataires:', error);
                });
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout du locataire:', error);
        });
};


    return (
        <div className="container">
              <aside>
            <div className="sidebar">
                <a href="/"  >
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="/Prpriétaires" >
                    <span className="material-icons-sharp">people</span>
                    <h3>Proriétaires</h3>
                </a>
                <a href="/biens_immobiliers">
                    <span className="material-icons-sharp">home</span>
                    <h3>Biens Immobiliers</h3>
                </a>
                <a href="/locataires" className="active"  >
                    <span className="material-icons-sharp">person_add</span>
                    <h3>Locataires</h3>
                </a>
                <a href="/contrats_location">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Contrats De Location</h3>
                </a>
                <a href="/factures">
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Factures</h3>
                </a>
                <a href="/payement">
                    <span className="material-icons-sharp">credit_card</span>
                    <h3>Payement</h3>
                </a>
                <a href="/avis_depart">
                    <span className="material-icons-sharp">cancel</span>
                    <h3>Avis De Départ</h3>
                </a>
                <a href="/settings" >
                    <span className="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </a>
                <a href="/rapports">
                    <span className="material-icons-sharp">account_tree</span>
                    <h3>Rapports</h3>
                </a>
                <a href="/Logout" onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
                <form id="logout-form" action="" method="POST" style={{ display: 'none' }}>
                    {/* Remplacez @csrf par la valeur appropriée ou une chaîne statique */}
                    {/* @csrf */}
                </form>
            </div>
            </aside>
            <div className="main-content">
                {/* Afficher soit le formulaire d'ajout, soit la liste des propriétaires en fonction de showForm */}
                {showForm ? (
                    <div className="form-container">
                    <h2>Ajouter locataire</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required />
                        <input type="text" name="cin" value={formData.cin} onChange={handleChange} placeholder="CIN" required />
                        <button type="submit">Ajouter locataire</button>
                    </form>
                   </div>
                
                ) : (
                    <div>
                        <button className="Ajouter" onClick={() => setShowForm(true)}>Ajouter locataire</button>
                        <h2>Liste des locataires</h2>
                        <table className="locataires-table">
                            <thead>
                                <tr>
                                    <th>CIN</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locataires.map(locataire => (
                                    <tr key={locataire._id}>
                                        <td>{locataire.cin}</td>
                                        <td>{locataire.nom}</td>
                                        <td>{locataire.prenom}</td>
                                        <td>{locataire.email}</td>
                                        <td>{locataire.telephone}</td>
                                        <td>
                                               <a href="#" onClick={() => modifierLocataire(locataire._id)}>Modifier</a> <br>
                                               </br>
                                               <a href="#" onClick={() => supprimerLocataire(locataire._id)}>Supprimer</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Locataires;
