// This script creates a local socket connection
// As this would be isolated from access in a docker container, run it locally to use the example
const net = require('net');

const server = net.createServer((conn) => {
    console.log('Connection established');
    conn.write(`So your talking hey?`);

    conn.on('end', () => {
        console.log('Connection closed');
    })
});

server.listen('/tmp/watcher.sock', () => {
    console.log('Listening for subscribers');
})
