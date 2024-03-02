const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
    contrat_location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Contrat' },
    date_facturation: Date,
    montant_du_facture: Number
});

const Facture = mongoose.model('Facture', FactureSchema);

module.exports = Facture;
