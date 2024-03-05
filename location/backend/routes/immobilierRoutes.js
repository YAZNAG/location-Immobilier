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
        // Utilisez les données reçues dans le corps de la requête pour créer un nouvel objet immobilier
        nom: req.body.nom,
        adresse: req.body.adresse,
        description: req.body.description,
        type: req.body.type,
        taille: req.body.taille,
        prixLocation: req.body.prixLocation,
        disponibilite: req.body.disponibilite,
        CINProprieter: req.body.CINProprieter,
        nomProprieter: req.body.nomProprieter,
        prenomProprieter: req.body.prenomProprieter,
        telephoneProprieter: req.body.telephoneProprieter,
        extraCharges: req.body.extraCharges,
        selectedBank: req.body.selectedBank,
        ribProprietaire: req.body.ribProprietaire,
        totalAmount: req.body.totalAmount
    });

    try {
        const newImmobilier = await immobilier.save();
        res.status(201).json(newImmobilier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Autres routes pour mettre à jour, supprimer un bien immobilier, etc.
// router.put('/immobiliers/:id', ...);
// router.delete('/immobiliers/:id', ...);

module.exports = router;
