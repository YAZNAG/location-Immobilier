const mongoose = require('mongoose');

const LocataireSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    telephone: String,
    cin: { type: String, required: true, unique: true }
});

const Locataire = mongoose.model('Locataire', LocataireSchema);

module.exports = Locataire;
