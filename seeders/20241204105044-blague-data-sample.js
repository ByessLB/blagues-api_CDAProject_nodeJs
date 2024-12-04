'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blagues', [
      {
        question: 'Quelle est la femelle du hamster ?',
        reponse: 'L\'Amsterdam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Que dit un oignon quand il se cogne ?',
        reponse: 'Aïe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Quel est l\'animal le plus heureux ?',
        reponse: 'Le hibou, parce que sa femme est chouette.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Pourquoi le football c\'est rigolo ?',
        reponse: 'Parce que Thierry en rit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Quel est le sport le plus fruité ?',
        reponse: 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Que se fait un Schtroumpf quand il tombe ?',
        reponse: 'Un Bleu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Quel est le comble pour un marin ?',
        reponse: 'Avoir le nez qui coule',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Qu\'est ce que les enfants usent le plus à l\'école ?',
        reponse: 'Le professeur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Quel est le sport le plus silencieux ?',
        reponse: 'Le para-chuuuut',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Quel est le comble pour un joueur de bowling ?',
        reponse: 'C\'est de perdre la boule',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blagues', null, {});
  }
};