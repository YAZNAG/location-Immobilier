import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Prpriétaires.css';
import { Link } from 'react-router-dom';

function Prpriétaires() {
  const [proprietaires, setProprietaires] = useState([]);
  const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      cin: ''
  });
  const [showForm, setShowForm] = useState(false); // État pour contrôler l'affichage du formulaire

  useEffect(() => {
      axios.get('http://localhost:5000/api/proprietaires')
          .then(response => {
              setProprietaires(response.data);
              console.log('Données des propriétaires:', response.data);
          })
          .catch(error => {
              console.error('Erreur lors de la récupération des propriétaires:', error);
          });
  }, []);

  const modifierProprietaire = (id) => {
      console.log(`Modifier propriétaire avec l'ID : ${id}`);
      // Mettez en œuvre la logique pour modifier le propriétaire ici
  };
  const supprimerProprietaire = (id) => {
    // Vérifier si l'ID est valide
    if (!id) {
        console.error('ID de propriétaire invalide');
        return;
    }

    // Effectuer la requête HTTP DELETE vers votre API pour supprimer le propriétaire
    axios.delete(`http://localhost:5000/api/proprietaires/${id}`)
        .then(response => {
            console.log('Propriétaire supprimé avec succès:', response.data);
            // Rafraîchir la liste des propriétaires après la suppression
            axios.get('http://localhost:5000/api/proprietaires')
                .then(response => {
                    setProprietaires(response.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des propriétaires:', error);
                });
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du propriétaire:', error);
        });
};

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/proprietaires', formData)
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
            axios.get('http://localhost:5000/api/proprietaires')
                .then(response => {
                    setProprietaires(response.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des propriétaires:', error);
                });
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout du propriétaire:', error);
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
                <a href="/Prpriétaires" className="active">
                    <span className="material-icons-sharp">people</span>
                    <h3>Proriétaires</h3>
                </a>
                <a href="/biens_immobiliers">
                    <span className="material-icons-sharp">home</span>
                    <h3>Biens Immobiliers</h3>
                </a>
                <a href="/locataires"  >
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
                    <h2>Ajouter Propriétaire</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" required />
                        <input type="text" name="cin" value={formData.cin} onChange={handleChange} placeholder="CIN" required />
                        <button type="submit">Ajouter Propriétaire</button>
                    </form>
                   </div>
                
                ) : (
                    <div>
                        <button className="Ajouter" onClick={() => setShowForm(true)}>Ajouter Propriétaire</button>
                        <h2>Liste des Propriétaires</h2>
                        <table className="proprietaires-table">
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
                                {proprietaires.map(proprietaire => (
                                    <tr key={proprietaire._id}>
                                        <td>{proprietaire.cin}</td>
                                        <td>{proprietaire.nom}</td>
                                        <td>{proprietaire.prenom}</td>
                                        <td>{proprietaire.email}</td>
                                        <td>{proprietaire.telephone}</td>
                                        <td>
                                               <a href="#" onClick={() => modifierProprietaire(proprietaire._id)}>Modifier</a> <br>
                                               </br>
                                               <a href="#" onClick={() => supprimerProprietaire(proprietaire._id)}>Supprimer</a>
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

export default Prpriétaires;
