"use strict"

const fs = require('fs');
const net = require('net');
const filename = process.argv[2] || 'src/target.txt';

const server = net.createServer((conn) => {
    console.log('Subscriber connected');
    conn.write(`Now watching ${filename} for changes ... \n`);
    console.log('wrote back, old school http/0.9')

    let watcher = fs.watchFile(filename, () => {
        conn.write(`File ${filename} changed ${Date.now()} \n`);
        // conn.write(fs.readFileSync(filename));
    })

    conn.on('close', () => {
        console.log('Subscriber disconnected');
    })

    if (!filename) {
        throw Error('No target filename was specified');
    }
});

server.listen(5432, () => {
    console.log('Listening for subscribers...')
})
