var express = require('express');
var router = express.Router();
var wechat = require('wechat');

var config = {
    token: 'shiehoahjsihjoij',
    appid: 'wx408d87c441b93c8b',
    encodingAESKey: 'iTcRoLbShXA9wmizV1X3M2d0xcWEUJ47feMN6RIIiXa'
};

/* GET wechat listing. */
router.get('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    console.log('get wechat');
    // var message = req.weixin;
    res.reply('Hello');
}));
router.post('/', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    console.log('post /wechat',message);
    if (message.FromUserName == 'osbCwuG8hoCX4ziilltist2-wWI8') {
        res.reply('我知道你是杜智杰');
    } else {
        if (message.FromUserName == 'osbCwuPuUqWYPf4yEnDz3OvohD8Y') {
            res.reply('自己人');
        }
    }
    res.reply('Hello');
}));

module.exports = router;