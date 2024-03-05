// ImmobilierModel.js
const mongoose = require('mongoose');

const ImmobilierSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Appartement', 'Maison', 'Stationnement', 'Espace commercial', 'Terrain'],
        required: true
    },
    taille: {
        type: Number,
        required: true
    },
    prixLocation: {
        type: Number,
        required: true
    },
    disponibilite: {
        type: Boolean,
        default: true
    },
    proprietaireCin: {
        type: String,
        required: true
    },
    // Nouveaux champs ajoutés pour prendre en charge les informations sur les frais supplémentaires et le mode de paiement
    extraCharges: [{
        charge: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    }],
    selectedBank: {
        type: String,
        required: true
    },
    ribProprietaire: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
});

const Immobilier = mongoose.model('Immobilier', ImmobilierSchema);

module.exports = Immobilier;
