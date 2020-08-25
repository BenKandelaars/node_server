const fs = require('fs');

fs.readFile('src/target.txt', (err, data) => {
    console.log('err: ', typeof err);
    if (err) {
        throw err;
    }
    console.log(data.toString());
});