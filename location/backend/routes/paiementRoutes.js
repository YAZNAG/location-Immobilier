const express = require('express');
const router = express.Router();
const Paiement = require('../models/paiement');

// Route pour récupérer tous les paiements
router.get('/paiements', async (req, res) => {
    try {
        const paiements = await Paiement.find();
        res.json(paiements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouveau paiement
router.post('/paiements', async (req, res) => {
    const paiement = new Paiement({
        id_facture: req.body.id_facture,
        contrat_location_id: req.body.contrat_location_id,
        date_paiement: req.body.date_paiement,
        montant: req.body.montant
    });

    try {
        const nouveauPaiement = await paiement.save();
        res.status(201).json(nouveauPaiement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un paiement, etc.
// router.put('/paiements/:id', ...);
// router.delete('/paiements/:id', ...);

module.exports = router;
