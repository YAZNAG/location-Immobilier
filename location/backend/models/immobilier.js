const mongoose = require('mongoose');

const ImmobilierSchema = new mongoose.Schema({
    adresse: String,
    type: String,
    proprietaire_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Proprietaire' }
});

const Immobilier = mongoose.model('Immobilier', ImmobilierSchema);

module.exports = Immobilier;
