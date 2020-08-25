"use strict";

const net = require('net');
const server = net.createServer((conn) => {
    console.log('Subscriber connected');

    // send the first chuck immediately
    conn.write(
        '{"type": "changed", "file": "targ'
    );

    // after a one second delay, send the other chunk
    let timer = setTimeout(() => {
        conn.write('et.txt", "timestamp": 320398479123784}' + '\n');
    }, 1000);

    // clear timer when the connection ends
    conn.on('end', () => {
        clearTimeout(timer);
        console.log('Subscriber disconnected');
    });
});

server.listen(5432, () => {
    console.log('Test server listening for subscribers...');
})