const fs = require('fs');

fs.readFile('target.txt', (err, data) => {
    console.log('err: ', typeof err);
    if (err) {
        throw err;
    }
    console.log(data.toString());
});