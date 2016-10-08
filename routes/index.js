var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My WebSite' });
  console.log('get');
});
router.post('/reg',function(req,res,next){
	console.log('req.body',req.body);
    res.send(req.body);
});

module.exports = router;
