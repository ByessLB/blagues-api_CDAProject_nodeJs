const express = require('express');
const app = express();
const cors = require('cors');
const blagueRoutes = require('./routes/blagues');
const { swaggerUi, swaggerDocs } = require('./config/swagger');
const db = require('./models');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
    origin: 'https://byesslb.github.io/blagues-api_CDAProject_frontend_ReactJs/',
}));
app.use(express.json());

// Middleware de gestion des erreurs
app.use(errorHandler);

// Routes
app.use('/api', blagueRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// "force: false" Assure que les models soit synchro avec la bdd chaque demarrage d'application en gardant les données existantes
// alors que "force: true" supprimera et recréera toutes les tables à chaque demarrage sans données
db.sequelize.sync({ force: false }).then(() => {
    // Démarrage du serveur
    app.listen(PORT, () => {
        console.log('Base de données synchonisée.');
        console.log(`Serveur démarré sur : http://localhost:${PORT}`);
        console.log(`Serveur démarré sur : https://blagues-api.onrender.com`);
    });

}).catch(error => {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
});