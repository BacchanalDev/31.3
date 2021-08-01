const fs = require('fs');
const axios = require('axios');





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
