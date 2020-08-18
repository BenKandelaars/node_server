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
    let output = '';

    ls.stdout.on('data', (chunk) => {
        console.log((() => chunk.toString())());
        output += chunk.toString();
    });
    ls.on('close', () => {
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);

    })
});

console.log(`Now watching ${filename} for changes ...`);