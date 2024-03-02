const express = require('express');
const router = express.Router();
const Immobilier = require('../models/immobilier');

// Route pour récupérer tous les biens immobiliers
router.get('/biens-immobiliers', async (req, res) => {
    try {
        const biensImmobiliers = await Immobilier.find();
        res.json(biensImmobiliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouveau bien immobilier
router.post('/biens-immobiliers', async (req, res) => {
    const immobilier = new Immobilier({
        adresse: req.body.adresse,
        type: req.body.type,
        proprietaire_id: req.body.proprietaire_id
    });

    try {
        const nouveauBienImmobilier = await immobilier.save();
        res.status(201).json(nouveauBienImmobilier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un bien immobilier, etc.
// router.put('/biens-immobiliers/:id', ...);
// router.delete('/biens-immobiliers/:id', ...);

module.exports = router;
