var http = require('http');
var express = require('express');
var socket = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socket(server);


app.get('/', function(request, response){
    response.sendFile(__dirname+'/views/index.html');
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('Message: '+msg);
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

server.listen(3000, function(){
    console.log('Listening on port: 3000');
});