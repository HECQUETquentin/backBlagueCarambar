const express = require('express');
const router = express.Router();
const controller = require('../controller/index')

router.get("/findAllJokes", controller.findAllJokes)

router.get("/findJokeById/:id", controller.findJokeById)

router.get("/getRandomJoke", controller.getRandomJoke)

module.exports = router;