const { Blague } = require('../models');
const { sequelize } = require('../models');

// Ajouter une blague
exports.ajouterBlague = async (req, res) => {
    try {
        const blague = await Blague.create(req.body);
        res.status(201).json(blague);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'ajout de la blague.' });
    }
};

// Récupérer toutes les blagues
exports.toutesBlagues = async (req, res) => {
    try {
        const blagues = await Blague.findAll();
        res.status(200).json(blagues);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des blagues. ' });
    }
};

// Récupérer une blague par son ID
exports.uneBlague = async (req, res) => {
    try {
        const { id } = req.params;
        const blague = await Blague.findByPk(id);
        if (!blague) {
            res.status(404).json({ error: 'Blague non trouvée.' });
        } else {
            res.status(200).json(blague);
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la blague' });
    }
};

// Récupérer une blague aléatoire
exports.blagueAleatoire = async (req, res) => {
    try {
        const blague = await Blague.findOne({ order: sequelize.random() });
        res.status(200).json(blague);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la blague aléatoire' });
    }
};