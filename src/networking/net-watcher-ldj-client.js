"use strict";
// Use with 
// net-watcher-ldj-client.js
 
const net = require('net');
const ldj = require('./ldj');
const netClient = net.connect({port: 5432});
const ldjClient = ldj.connect(netClient);

ldjClient.on('message', (message) => {
    if (message.type === 'watching') {
        console.log(`Now watching: ${message.file}`);
    } else if (message.type = 'changed') {
        let date = new Date(message.timestamp);
        console.log(`File ${message.file} changed at ${date.toString()}`);
    } else {
        throw Error(`Unrecognized message type: ${message.type}`);
    }
})