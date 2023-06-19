const express = require('express');
const router = express.Router();
const data = require('../db/data');

router.get("/findAllJokes", (req, res) => {
    res.json({data});
})

router.get("/findJokeById/:id", (req, res) => {
    const id = req.params.id;

    const result = data.filter(joke => joke.id == id);

    if(result.length == 0){
        res.json({message: "Pas de question attitrée"});
    }else{
        res.json({result});
    }
})

router.get("/getRandomJoke", (req, res) => {
    const numMax = data.length;
    const number = Math.floor(Math.random()*numMax);

    const result = data[number];
    res.json({result});
})

module.exports = router;