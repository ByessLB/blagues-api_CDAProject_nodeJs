const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Blagues API',
            version: '1.0.0',
            description: 'API pour les blagues de Carambar & Co',
        },
    },
    apis: ['./routes/*.js', './models/*.js'], // Chemin vers les fichiers d'annotations JsDocs
};

const specs = swaggerJsdoc(swaggerOptions);

module.exports = {
    swaggerUi,
    specs,
};