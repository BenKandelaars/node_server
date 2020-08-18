const
    fs = require('fs');
    stream = fs.createReadStream(process.argv[2]);

stream.on('data', (chunk) => {
    process.stdout.write(`${chunk} \n`);
});

stream.on('error', (err) => {
    process.stdout.write(
        `ERROR: ${err.message}  \n`
    );
});
