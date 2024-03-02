const mongoose = require('mongoose');

const PaiementSchema = new mongoose.Schema({
    id_facture: { type: mongoose.Schema.Types.ObjectId, ref: 'Facture' },
    contrat_location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat' },
    date_paiement: Date,
    montant: Number
});

const Paiement = mongoose.model('Paiement', PaiementSchema);

module.exports = Paiement;
