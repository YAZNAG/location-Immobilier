// immobilierRoutes.js

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

// Autres routes pour créer, mettre à jour, supprimer un bien immobilier, etc.
// router.post('/immobiliers', ...);
// router.put('/immobiliers/:id', ...);
// router.delete('/immobiliers/:id', ...);

module.exports = router;
