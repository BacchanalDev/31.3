const fs = require('fs');
const process = require('process');




function cat(path){
    fs.readFile(path, 'utf8', function (err, data){
        if (err) {
            console.log('Error is:', err);
            process.kill(1)
        }
        console.log(data)
    });
};

console.log(cat(process.argv[2]))



