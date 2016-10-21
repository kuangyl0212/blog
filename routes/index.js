var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('get /');
    res.send('get index')
});
router.post('/reg',function(req,res,next){
    console.log('POST /reg');
    res.send('post reg')
});
router.post('/post',function(req,res,next) {
    console.log('POST /post',req.body);
    res.send(req.body);
});

module.exports = router;
