const fs = require('fs');
const axios = require('axios');

function handleOut(text, out){
    if(out){
        fs.writeFile(out, text, 'utf', function(err, data){
            if(err){
                console.log(`Couldn't write ${out}: ${err}`);
                process.kill(22)
            }
            console.log(text)
        })
    }
}



function cat(path){
    fs.readFile(path, 'utf8', function (err, data){
        if (err) {
            console.log('Error is:', err);
            process.kill(1)
        }
        console.log(data)
    });
    
};

async function webCat(url){
    try{let web = await axios.get(url);
    console.log(web)
    }
    catch (error){
        console.log('The error is as follows: ',error)
    }
};

 if(path){
     if(path.slice(0,4) =='http'){
         webCat(path)
     } else {
         cat(path)
     }
 }





 let path;
let out;

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
  webCat(path, out);
} else {
  cat(path, out);
}