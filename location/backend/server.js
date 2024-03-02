const express = require('express');
const mongoose = require('mongoose');
const proprietaireRoutes = require('./routes/proprietaireRoutes');
const immobilierRoutes = require('./routes/immobilierRoutes');
const locataireRoutes = require('./routes/locataireRoutes'); 
const cors = require('cors');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());

// Routes API
app.use('/api', proprietaireRoutes); // Routes pour les propriétaires
app.use('/api', immobilierRoutes); // Routes pour les biens immobiliers
app.use('/api', locataireRoutes); // Routes pour les locataires

// Connecter à MongoDB
mongoose.connect('mongodb://localhost:27017/location', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connecté à MongoDB');
}).catch(err => {
    console.error('Erreur de connexion à MongoDB:', err.message);
    process.exit(1); // Quitte l'application en cas d'échec de connexion à la base de données
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
