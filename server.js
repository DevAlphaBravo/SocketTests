var WebSocketServer = require("ws").Server;
var http = require("http");
var express = require("express");
var app = express();
var port = process.env.PORT || 6978;

app.use(express.static("/"));

var server = http.createServer(app);
server.listen(port);

console.log("Server is listening on port 6978");

var clients = [];

var wss = new WebSocketServer({server: server});
console.log("Server is running...");

wss.on("connection", function(ws) {
    clients.add(ws);
    ws.send("handshake_successful");
});