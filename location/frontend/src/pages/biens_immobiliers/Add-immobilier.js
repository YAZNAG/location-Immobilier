// Dans le composant MultiStepForm
import React, { useState } from 'react';
import StepTitles from './StepTitles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import './css/style.css';

const AddImmobiliers = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const submitForm = (submissionData) => {
    // Insérez ici le code pour soumettre les données à votre API
    console.log("Données soumises :", submissionData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 nextStep={nextStep} handleFormDataChange={handleFormDataChange} formData={formData} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} handleFormDataChange={handleFormDataChange} formData={formData} />;
      case 3:
        return <Step3 nextStep={nextStep} prevStep={prevStep} handleFormDataChange={handleFormDataChange} formData={formData} />;
      case 4:
        return <Step4 nextStep={nextStep} prevStep={prevStep} handleFormDataChange={handleFormDataChange} formData={formData} />;
      case 5:
        return <Step5 prevStep={prevStep} formData={formData} submitForm={submitForm} />;
      default:
        return null;
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
    <div className="multi-step-form">
      <StepTitles currentStep={currentStep} />
      <div className="render-step">{renderStep()}</div>
    </div>
    </div>
  );
};

export default AddImmobiliers;
