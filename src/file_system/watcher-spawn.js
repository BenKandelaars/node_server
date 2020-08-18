const
    fs = require('fs');
    path = require('path');
    spawn = require('child_process').spawn;
    filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified');
}

fs.watchFile(filename, () => {
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes ...`);