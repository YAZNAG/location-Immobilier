const mongoose = require('mongoose');

const ContratSchema = new mongoose.Schema({
    locataire_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Locataire' },
    immobilier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Immobilier' },
    date_debut: Date,
    date_fin: Date,
    montant_loyer: Number
});

const Contrat = mongoose.model('Contrat', ContratSchema);

module.exports = Contrat;
