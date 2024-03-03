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
    extraCharges: [{
        type: String
    }],
    paymentInfo: {
        method: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
});

const Immobilier = mongoose.model('Immobilier', ImmobilierSchema);

module.exports = Immobilier;
