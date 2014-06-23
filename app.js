
/**
 * Module dependencies.
 */

var express = require('express');

var http = require('http');
var path = require('path');
var config=require('./config').config;
var SessionStore = require('session-mongoose')(express);

var app = express();

// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//session
app.use(express.cookieParser());
app.use(express.cookieSession({secret : config.session_secret}))
app.use(express.session({
    secret:config.session_secret,
    cookie:{maxAge:config.session_maxAge},
    store:new SessionStore({
        url: config.db,
        interval: 120000
    })
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

//express错误处理中间件
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500,'something broke');
});

//router
require('./router')(app);

//捕获异常(抛出所有异常)
process.on('uncaughtException',function(err){
    console.log('Caught exception:'+err);
});

//express错误处理中间件
//app.use(function(err, req, res, next){
//    console.error(err.stack);
//    res.send(500,'something broke');
//});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io=require('socket.io').listen(server);
var users={};
io.sockets.on('connection',function(socket){
    console.log("Connection :"+socket.id);
    socket.emit('news', { hello: 'welcome!' });
    users[socket.id]=socket;
    socket.on('message',function(message){
        console.log("Received message from"+socket.id+"- message"+" :"+message.userName+"="+message.message);
        for(var sid in users){
            var nowSoc=users[sid];
            if(sid!=socket.id){
                console.log('------------------------------');
                nowSoc.emit("message",message);
            }
        }
    });

    socket.on('disconnect',function(){
        console.log("Connection "+socket.id+" terminated");
    });
});
