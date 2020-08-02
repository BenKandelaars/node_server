const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.write('hello world');
    console.log('Request came in')

    const options = {encoding: 'utf-8'};
    try {
        fs.readFile('src/misc/readme.txt', options, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.send(data);
        })
    } catch {}

    // res.end();
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
