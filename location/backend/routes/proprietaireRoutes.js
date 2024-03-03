const express = require('express');
const router = express.Router();
const Proprietaire = require('../models/proprietaire');

// Route pour récupérer tous les propriétaires
router.get('/proprietaires', async (req, res) => {
    try {
        const proprietaires = await Proprietaire.find();
        res.json(proprietaires);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouveau propriétaire
router.post('/proprietaires', async (req, res) => {
    const { nom, prenom, email, telephone, cin } = req.body;
    const proprietaire = new Proprietaire({
        nom,
        prenom,
        email,
        telephone,
        cin
    });

    try {
        const nouveauProprietaire = await proprietaire.save();
        res.status(201).json(nouveauProprietaire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route pour rechercher un propriétaire par cin
// Route pour rechercher un propriétaire par cin
router.post('/proprietaires/search', async (req, res) => {
    const { cin } = req.body;
    try {
        const proprietaire = await Proprietaire.findOne({ cin });
        if (proprietaire) {
            res.json(proprietaire); // Return proprietor details
        } else {
            res.status(404).json({ message: 'Proprietaire not found' });
        }
    } catch (error) {
        console.error('Error searching for proprietor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
