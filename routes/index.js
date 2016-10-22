var express = require('express');
var router = express.Router();

var Post = require('../models/Post');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     console.log('get /111111');
//     Post.find(function (err, posts) {
//         if (err) return console.error(err);
//         res.send(posts);
//     })
    
// });
router.get('/home', function(req, res, next) {
    console.log('get /home');
    Post.find(function (err, posts) {
        if (err) return console.error(err);
        res.send(posts);
    })
});
router.post('/reg',function(req,res,next){
    console.log('POST /reg');
    res.send('post reg')
});
router.post('/post',function(req,res,next) {
    console.log('POST /post');
    var post = new Post({
        title: req.body.title,
        content: req.body.content,
    });
    post.save();
    res.send(req.body);
});

module.exports = router;
