"use strict"

const fs = require('fs');
const net = require('net');
const filename = process.argv[2] || 'src/target.txt';

const server = net.createServer((conn) => {
    console.log('Subscriber connected');

    conn.write(JSON.stringify({
        type: 'watching',
        file: filename,
    }) + '\n');

    console.log('wrote back, old school http/0.9')

    let watcher = fs.watchFile(filename, () => {
        console.log('File changed');
        conn.write(JSON.stringify({
            type: 'changed',
            file: filename,
            timestamp: (new Date()).toString()
        }) + '\n')
    });

    conn.on('end', () => {
        console.log('Subscriber connected ended');
    });

    conn.on('close', () => {
        console.log('Subscriber disconnected');
    });

    if (!filename) {
        throw Error('No target filename was specified');
    }
});

server.listen(5432, () => {
    console.log('Listening for subscribers...')
})
