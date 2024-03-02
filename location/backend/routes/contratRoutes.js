const express = require('express');
const router = express.Router();
const Contrat = require('../models/contrat');

// Route pour récupérer tous les contrats de location
router.get('/contrats', async (req, res) => {
    try {
        const contrats = await Contrat.find();
        res.json(contrats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un nouveau contrat de location
router.post('/contrats', async (req, res) => {
    const contrat = new Contrat({
        locataire_id: req.body.locataire_id,
        immobilier_id: req.body.immobilier_id,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        montant_loyer: req.body.montant_loyer
    });

    try {
        const nouveauContrat = await contrat.save();
        res.status(201).json(nouveauContrat);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un contrat, etc.
// router.put('/contrats/:id', ...);
// router.delete('/contrats/:id', ...);

module.exports = router;
