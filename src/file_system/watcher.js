const fs = require('fs');

fs.watchFile('src/target.txt', function() {
    console.log('Readme.txt just changed!');
});

console.log(process.cwd());
console.log('Now watching readme.txt');