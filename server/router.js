var express = require('express');
var router = express.Router();
var url = require('url')
var homehot1 = require('./data/home/homehot1')
var homehot2 = require('./data/home/homehot2')

router.get('/homehot1', function(req, res){
    var city = url.parse(req.url, true).query.city;
    console.log(city);
    res.send(homehot1);
})

router.get('/homehot2', function(req, res){
    var city = url.parse(req.url, true).query.city;
    console.log(city);
    res.send(homehot2);
})


module.exports = router;

