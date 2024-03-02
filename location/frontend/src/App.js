import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Prpriétaires from './pages/Prpriétaires/Prpriétaires';
import BiensImmobiliers from './pages/biens_immobiliers/biens_immobiliers';
import Locataires from './pages/Locataires/Locataires';
// import ContratsLocation from './pages/contrats_location/contrats_location';
// import Factures from './pages/factures/factures';
import Payement from './pages/payement/payement';
// import AvisDepart from './pages/avis_depart/avis_depart';
// import Settings from './pages/settings/settings';
// import Rapports from './pages/rapports/rapports';


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/Prpriétaires" element={<Prpriétaires />} />
                <Route path="/biens_immobiliers" element={<BiensImmobiliers />} />
                <Route path="/locataires" element={<Locataires />} />
                <Route path="/payement" element={<Payement />} />
                 {/* <Route path="/contrats_location" element={<ContratsLocation />} /> 
                 <Route path="/factures" element={<Factures />} />
                  
                 <Route path="/avis_depart" element={<AvisDepart />} />  
               <Route path="/settings" element={<Settings />} /> 
                <Route path="/rapports" element={<Rapports />} />   */} 
                
            </Routes>
        </Router>
    );
}

export default App;
