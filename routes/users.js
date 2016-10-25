var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/reg', function(req,res,next) {
  var data = req.body;

  // 这个回调黑洞真是要命！！！ 想用Promise！！！！想用await！！！
  User.findOne({user_name: data.user_name},function(err,user){
    if (err) {
        res.send(new Error(err));
    } else {
      if (user) {
        console.log('user---',user);
        res.send({msg:"exist"})
      } else {

       User.findOne({email: data.email}, function(err,user){
           if (err) {
               res.send(new Error(err));
           } else {
               if (user) {res.send({msg: 'email_exist'})} else {
                   var newUser = new User({
                       user_name: data.user_name,
                       email: data.email,
                       password: data.password,
                   });
                   newUser.save();
                   res.send({msg: 'success'})
               }
           }
       })
      }
    }
  })

});

router.post('/login',function (req,res,next) {
    console.log('req',req.body);
    var data = req.body;
    User.findOne({email: data.email},function(err,user){
        "use strict";
        if (err) {
            res.send(new Error(err))
        } else {
            if (user) {
                if (user.password == data.password) {
                    // 登录成功的后端操作 todo
                    res.send({msg:'success'})
                } else {
                    res.send({msg: 'pass_err'})
                }
            } else {
                res.send({msg:'not_exist'})
            }
        }
    })
});

module.exports = router;
