// src/pages/Locataires.js
import React from 'react';

function settings() {
    return (
        <div className="container">
        <aside>
            <div className="sidebar">
                <a href="/" >
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="/Prpriétaires">
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
                <a href="/settings" className="active">
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
    </div>
    );
}

export default settings;
