import React, { useState } from 'react';
import axios from 'axios'; // Assurez-vous d'avoir axios installé dans votre projet
import './biens_immobiliers.css'; // Importez votre fichier CSS contenant les styles

const Immobil = () => {
    const [titel, setTitel] = useState('');
    const [biensImmobiliers, setBiensImmobiliers] = useState([]);

    const handleAppartementClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biens-immobiliers?type=Appartement');
            setTitel('Appartements');
            setBiensImmobiliers(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    const handleMaisonClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biens-immobiliers?type=Maison');
            setTitel('Maisons');
            setBiensImmobiliers(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    const handleTerrainClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biens-immobiliers?type=Terrain');
            setTitel('Terrains');
            setBiensImmobiliers(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    const handleEspaceCommercialClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biens-immobiliers?type=Espace Commercial');
            setTitel('Espaces Commerciaux');
            setBiensImmobiliers(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    const handleStationnementClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/biens-immobiliers?type=Stationnement');
            setTitel('Stationnements');
            setBiensImmobiliers(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    return (
        <div className="container">
        <aside>
            <div className="sidebar">
                <a href="/"  >
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="/Prpriétaires">
                    <span className="material-icons-sharp">people</span>
                    <h3>Proriétaires</h3>
                </a>
                <a href="/biens_immobiliers" className="active">
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
        <div className="All_page">
            <div className="option_cards">
                <div className="card" onClick={handleAppartementClick}>
                    <svg fill="#ffffff" viewBox="-9.22 0 122.88 122.88" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>apartment</title><path d="M3.55,119.32H0v3.56H92.49v-3.56h-2v-17a1.22,1.22,0,0,0-1.22-1.22H75.54a1.22,1.22,0,0,0-1.22,1.22v17H48.47V95.23a1.63,1.63,0,0,0-1.63-1.62H19.94a1.63,1.63,0,0,0-1.63,1.62v24.09H0V2.6A2.79,2.79,0,0,1,.82.85h0a2.84,2.84,0,0,1,2-.84H63.93a2.82,2.82,0,0,1,2,.84l.13.13a2.83,2.83,0,0,1,.72,1.89V34.57H102a2.39,2.39,0,0,1,1.69.7h0a2.36,2.36,0,0,1,.7,1.68v84.29a1.63,1.63,0,0,1-1.63,1.63H92.49v-3.56H101V38H66.79v81.34H63.23V3.56H3.55V119.32Zm84.54,0H76.76V103.5H88.09v15.82ZM85.45,45h8.81c.07,0,.13.1.13.22v5.71c0,.1-.06.21-.13.21H85.45c-.07,0-.13-.09-.13-.21V45.22c0-.12.06-.22.13-.22Zm0,39.6h8.81c.07,0,.13.1.13.21v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V84.81c0-.11.06-.21.13-.21Zm-14.85,0h8.8c.08,0,.14.1.14.21v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V84.81c0-.11.06-.21.14-.21ZM85.45,71.4h8.81c.07,0,.13.1.13.22v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V71.62c0-.13.06-.22.13-.22Zm0-13.2h8.81c.07,0,.13.1.13.22v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V58.42c0-.12.06-.22.13-.22ZM70.6,45h8.8c.08,0,.14.1.14.22v5.71c0,.1-.06.21-.14.21H70.6c-.08,0-.14-.09-.14-.21V45.22c0-.12.06-.22.14-.22Zm0,26.4h8.8c.08,0,.14.1.14.22v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V71.62c0-.13.06-.22.14-.22Zm0-13.2h8.8c.08,0,.14.1.14.22v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V58.42c0-.12.06-.22.14-.22ZM45.21,119.32H21.57V96.86H45.21v22.46ZM12.13,12.52h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27Zm32.94,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27Zm-16.47,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27ZM12.13,33.28h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27Zm32.94,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27Zm-16.47,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27ZM12.13,74.8h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H12.13a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27Zm32.94,0h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H45.07a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27Zm-16.47,0h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H28.6a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27ZM12.13,54h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V54.31a.27.27,0,0,1,.27-.27Zm32.94,0h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V54.31a.27.27,0,0,1,.27-.27ZM28.6,54h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V54.31A.27.27,0,0,1,28.6,54Z"></path></g></svg>
                    <span>Appartements</span>
                </div>
                <div className="card" onClick={handleMaisonClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 22H22" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path> <path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path> <path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path> <path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path> <path d="M19.0001 7L18.9701 4H14.5701" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span>Maisons</span>
                </div>
                <div className="card" onClick={handleTerrainClick}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.5 5.7C2.5 4.57989 2.5 4.01984 2.71799 3.59202C2.90973 3.21569 3.21569 2.90973 3.59202 2.71799C4.01984 2.5 4.5799 2.5 5.7 2.5H18.3C19.4201 2.5 19.9802 2.5 20.408 2.71799C20.7843 2.90973 21.0903 3.21569 21.282 3.59202C21.5 4.01984 21.5 4.5799 21.5 5.7V18.3C21.5 19.4201 21.5 19.9802 21.282 20.408C21.0903 20.7843 20.7843 21.0903 20.408 21.282C19.9802 21.5 19.4201 21.5 18.3 21.5H5.7C4.57989 21.5 4.01984 21.5 3.59202 21.282C3.21569 21.0903 2.90973 20.7843 2.71799 20.408C2.5 19.9802 2.5 19.4201 2.5 18.3V5.7Z" stroke="#ffffff" stroke-linecap="round"></path> <path d="M12.5 15.0294C12.5 17.1878 10.3603 18.704 9.42687 19.2628C9.16233 19.4211 8.83767 19.4211 8.57313 19.2628C7.63974 18.704 5.5 17.1878 5.5 15.0294C5.5 12.9118 7.19587 11.5 9 11.5C10.8667 11.5 12.5 12.9118 12.5 15.0294Z" stroke="#ffffff"></path> <path d="M18.5 21.5L12.5 6.5" stroke="#ffffff"></path> <path d="M21.5 4.5L2.5 8.5" stroke="#ffffff"></path> <circle cx="9" cy="15" r="1" fill="#ffffff"></circle> </g></svg>
                    <span>Terrains</span>
                </div>
                <div className="card" onClick={handleEspaceCommercialClick}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 22V11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 22V11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16.5278 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <span>Espaces Commerciaux</span>
                </div>
                <div className="card" onClick={handleStationnementClick}>
                    <svg fill="#ffffff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"></path><path d="M376.538 230.746v573.44c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-573.44c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path><path d="M555.302 503.974c73.517 0 133.12-59.603 133.12-133.12 0-72.104-58.456-130.56-130.56-130.56h-140.36v263.68h137.8zm0 40.96h-158.28c-11.311 0-20.48-9.169-20.48-20.48v-304.64c0-11.311 9.169-20.48 20.48-20.48h160.84c94.726 0 171.52 76.794 171.52 171.52 0 96.139-77.941 174.08-174.08 174.08z"></path></g></svg>
                    <span>Stationnements</span>
                </div>
            </div>
            <div className="table">
                <h2>{titel}</h2>
                
                <table>
    <thead>
        <tr>
            <th>Titre</th>
            <th>Adresse</th>
            <th>Prix</th>
            <th>Surface</th>
        </tr>
    </thead>
    <tbody>
        {biensImmobiliers.map((bien,index) => (
            <tr key={index}>
                <td>{bien.nom}</td>
                <td>{bien.adresse}</td>
                <td>{bien.prix_location}</td>
                <td>{bien.taille}</td>
            </tr>
        ))}
    </tbody>
</table>

            </div>
        </div>
        </div>
    );
};

export default Immobil;
