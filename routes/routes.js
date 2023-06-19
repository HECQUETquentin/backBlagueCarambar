const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

/**
 * @swagger
 * /api/v1/findAllJokes:
 *  get:
 *    description: affichage de la totalité des blagues de la base
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/findAllJokes", controller.findAllJokes)

/**
 * @swagger
 * /api/v1/findJokeById:
 *  get:
 *    description: affichage d'une blague en fonction de son id
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/findJokeById/:id", controller.findJokeById)

/**
 * @swagger
 * /api/v1/getRandomJoke:
 *  get:
 *    description: affichage d'une blague dans celle inscrite dans la base
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/getRandomJoke", controller.getRandomJoke)

module.exports = router;