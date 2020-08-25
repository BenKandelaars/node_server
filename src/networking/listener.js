"use strict"

const net = require('net');
const server = net.createServer((conn) => {
    console.log('connection made');
});

server.listen(5432);