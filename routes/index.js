var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Irma Rahma Yati'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Irma Rahma Yati'})
})

module.exports = router;