// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// // register a listener
// logger.on("messagedLogged", (arg) => {
// 	console.log("Listener called", arg) ;
// });

// logger.log("message");


const http = require('http');

// server is an EventEmitter
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write("hello world!");
		res.end();
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});

server.on("connection", (socket) => {
	console.log("New Connection...");
});

server.listen(3000);

console.log("Listening on port 3000...");

