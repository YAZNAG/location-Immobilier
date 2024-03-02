const express = require('express');
const router = express.Router();
const Facture = require('../models/facture');

// Route pour récupérer toutes les factures
router.get('/factures', async (req, res) => {
    try {
        const factures = await Facture.find();
        res.json(factures);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer une nouvelle facture
router.post('/factures', async (req, res) => {
    const facture = new Facture({
        contrat_location_id: req.body.contrat_location_id,
        date_facturation: req.body.date_facturation,
        montant_du_facture: req.body.montant_du_facture
    });

    try {
        const nouvelleFacture = await facture.save();
        res.status(201).json(nouvelleFacture);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer une facture, etc.
// router.put('/factures/:id', ...);
// router.delete('/factures/:id', ...);

module.exports = router;
