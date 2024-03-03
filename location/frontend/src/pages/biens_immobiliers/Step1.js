import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css";
const Step1 = ({ nextStep }) => {
  const [cin, setCin] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/proprietaires/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cin }),
      });

      if (response.ok) {
        const data = await response.json();
        setPrenom(data.prenom);
        setNom(data.nom);
        setErrorMessage('');
        setSearched(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        setPrenom('');
        setNom('');
        setSearched(true);
      }
    } catch (error) {
      console.error('Error fetching proprietor information:', error);
      setErrorMessage('Error fetching proprietor information');
      setPrenom('');
      setNom('');
      setSearched(true);
    }
  };

  return (
    <div>
      <h2>Step 1: Search by Cin</h2>
      <input
        type="text"
        placeholder="Enter Cin"
        value={cin}
        onChange={(e) => setCin(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searched && (
        <div>
          {errorMessage ? (
            <div>
              <p>{errorMessage}</p>
              <Link to="/add-owner">Add New Owner</Link>
            </div>
          ) : (
            <div>
              {prenom && nom ? (
                <div>
                  <p>First Name: {prenom}</p>
                  <p>Last Name: {nom}</p>
                  <button onClick={nextStep}>Next</button>
                </div>
              ) : (
                <div>
                  <p>No proprietor found</p>
                  <Link to="/add-owner">Add New Owner</Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Step1;
