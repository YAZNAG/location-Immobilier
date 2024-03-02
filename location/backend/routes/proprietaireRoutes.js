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
    const proprietaire = new Proprietaire({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        telephone: req.body.telephone,
        cin: req.body.cin
    });

    try {
        const nouveauProprietaire = await proprietaire.save();
        res.status(201).json(nouveauProprietaire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un propriétaire, etc.
// router.put('/proprietaires/:id', ...);
// router.delete('/proprietaires/:id', ...);

module.exports = router;
