const fs = require('fs');

module.exports = function () {
   return fs.readFile()
    /*return fs.readFile( (err, files) => {
        if (err) {
            throw err;
        } else {
           // process.stdout.write(files.join("\n"));
            //process.stdout.write("prompt > ");
        }
    });*/
};