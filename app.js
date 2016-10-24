var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var wechat = require('./routes/wechat');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var config = require('./common/config');

var app = express();

// 数据库连接
mongoose.set('debug', true);
<<<<<<< HEAD
mongoose.connect('mongodb://' + config.dbAddress + ':' + config.dbPort + '/' + config.dbName);
=======
mongoose.connect('mongodb://localhost:24678/test');
>>>>>>> f8a547a02fce625d19061a50208b9d66966edb7f
var db = mongoose.connection;
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
  console.log('connected to db');
});

app.use(session({
  secret: config.cookieSecret,
  key: config.dbName,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 30},
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: 'mongodb://' + config.dbAddress + ':' + config.dbPort + '/' + config.dbName
  })
}));

// 你在逗我？用react还要什么模板引擎！
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// routes挂载到应用
app.use('/', routes);
app.use('/users', users);
app.use('/wechat',wechat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send( {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
