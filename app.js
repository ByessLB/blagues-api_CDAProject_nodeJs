const express = require('express');
const app = express();
const cors = require('cors');
const blagueRoutes = require('./routes/blagues');
const { swaggerUi, swaggerDocs } = require('./config/swagger');
const db = require('./models');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware de gestion des erreurs
app.use(errorHandler);

// Routes
app.use('/api', blagueRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Démarrage du serveur
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log('Base de données synchonisée.');
        console.log(`Serveur démarré sur : http://localhost:${PORT}`);
    });

}).catch(error => {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
});