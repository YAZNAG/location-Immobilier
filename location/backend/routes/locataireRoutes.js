const express = require('express');
const router = express.Router();
const Locataire = require('../models/locataire');

// Route pour récupérer tous les locataires
router.get('/locataires', async (req, res) => {
    try {
        const locataires = await Locataire.find();
        res.json(locataires);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouveau locataire
router.post('/locataires', async (req, res) => {
    const locataire = new Locataire({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        telephone: req.body.tele,
        cin: req.body.cin
    });

    try {
        const nouveauLocataire = await locataire.save();
        res.status(201).json(nouveauLocataire);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un locataire, etc.
// router.put('/locataires/:id', ...);
// router.delete('/locataires/:id', ...);

module.exports = router;
