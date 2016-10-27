var express = require('express');
var router = express.Router();

var Post = require('../models/Post');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('get /111111',req.session);
    // Post.find(function (err, posts) {
    //     if (err) return console.error(err);
    //     res.send(posts);
    // })
    
});
router.get('/home', function(req, res, next) {
    // console.log('get /home',req.session);
    Post
        .find()
        // 首页只获取标题 这样做是因为 如果获取全部内容的话 不排除内容量十分巨大 造成阻塞
        .select('title createTime')
        // 按时间排序
        .sort('-createTime')
        .exec(function (err, posts) {
            if (err) return console.error(err);
            res.send(posts);
        })
});

router.get('/article',function (req,res,next) {
    console.log('req',req.query);
    var id = req.query.id;
    Post.findOne({_id: id},function (err, post) {
        if (err) return console.error(err);
        res.send(post);
    })
});
router.post('/post',function(req,res,next) {
    // console.log('POST /post',req.session);
    var post = new Post({
        title: req.body.title,
        content: req.body.content,
        createTime: req.body.createTime,
    });
    post.save();
    res.send(req.body);
});

module.exports = router;
