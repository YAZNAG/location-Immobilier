const mongoose = require('mongoose');

const ProprietaireSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    telephone: String,
    cin: { type: String, required: true, unique: true }
});

const Proprietaire = mongoose.model('Proprietaire', ProprietaireSchema);

module.exports = Proprietaire;
