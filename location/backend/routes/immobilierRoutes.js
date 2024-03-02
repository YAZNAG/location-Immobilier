const express = require('express');
const router = express.Router();
const Immobilier = require('../models/immobilier');

// Route pour récupérer tous les biens immobiliers
router.get('/immobiliers', async (req, res) => {
    try {
        const immobiliers = await Immobilier.find();
        res.json(immobiliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouveau bien immobilier
router.post('/immobiliers', async (req, res) => {
    const immobilier = new Immobilier({
        adresse: req.body.adresse,
        type: req.body.type,
        proprietaire_id: req.body.proprietaire_id
    });

    try {
        const nouveauImmobilier = await immobilier.save();
        res.status(201).json(nouveauImmobilier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un bien immobilier, etc.
// router.put('/immobiliers/:id', ...);
// router.delete('/immobiliers/:id', ...);

module.exports = router;
