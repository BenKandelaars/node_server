const fs = require('fs');
fs.writeFile('src/target.txt', 'a witty message', (err) => {
    if (err) {
        throw err;
    }
    console.log('File saved!');
})