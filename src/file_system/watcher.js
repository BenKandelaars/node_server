const fs = require('fs');

fs.watchFile('./src/misc/readme.txt', function() {
    console.log('Readme.txt just changed!');
});

console.log(process.cwd());
console.log('Now watching readme.txt');