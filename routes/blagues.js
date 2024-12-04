const express = require('express');
const controller  = require('../controllers/blaguesController');
const router = express.Router();

// Swagger pour une description global de l'API
/**
 * @swagger
 * components:
 *    schemas:
 *       Blague:
 *          type: object
 *          required:
 *             - question
 *             - reponse
 *          properties:
 *             id:
 *               type: integer
 *               description: identifiant blague
 *             question:
 *               type: string
 *               description: question de la blague
 *             reponse:
 *               type: string
 *               description: réponse de la blague
 *             example:
 *               id: 1
 *               question: "Quelle est la femelle du hamster ?"
 *               reponse: "L'Amsterdam"
 */

// Swagger pour "ajouterBlague"
/**
 * @swagger
 * /ajouterBlague:
 *    post:
 *      summary: Ajouter une blague
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Blague'
 *              example:
 *                 question: "Quelle est la femelle du hamster ?"
 *                 reponse: "L'Amsterdam"
 *      responses:
 *       200:
 *         description: Succès ! La blague a été ajoutée !
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Blague'
 */
// Ajouter une blague en BDD via postman
router.post('/ajouterBlague', controller.ajouterBlague);

//Swagger pour "blagues"
/**
 * @swagger
 * /blagues:
 *    get:
 *      summary: Récupérer toutes les blagues
 *      responses:
 *         200:
 *           description: Succès ! Les blagues ont été récupérées !
 *           content:
 *              application/json:
 *                 schema:
 *                    type: array
 *                    items:
 *                      type: object
 */
// Récupérer toutes les blagues
router.get('/blagues', controller.toutesBlagues);

// Swagger pour "blagues/:id"
/**
 * @swagger
 * /blagues/{id}:
 *    get:
 *      summary: Récupérer une blague par son id
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: L'identifiant de la blague
 *      responses:
 *          200:
 *            description: Succès ! La blague a été retourné !
 *            content:
 *              application/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                      type: object
 */
// Récupérer une blague par son id
router.get('/blagues/:id', controller.uneBlague);

// Swagger pour "random"
/**
 * @swagger
 * /random:
 *    get:
 *      summary: Récupérer une blague au hasard
 *      responses:
 *        200:
 *           description: Succès ! La blague a été retourné !
 *           content:
 *              application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                      question:
 *                         type: string
 *                      reponse:
 *                         type: string
 */
// Récupérer une blague au hasard
router.get('/random', controller.blagueAleatoire);

module.exports = router;