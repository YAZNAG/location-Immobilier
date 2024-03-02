module.exports = {
    // Configuration de la base de données MongoDB
    mongoURI: 'mongodb://localhost:27017/location', // URL de connexion à MongoDB

    // Configuration du serveur
    port: process.env.PORT || 5000, // Port sur lequel le serveur va écouter

    // Autres configurations
    // ...
};
