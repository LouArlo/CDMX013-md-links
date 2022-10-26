const fs = require('fs');
const path = require('path');
const { extFile } = require('./extFile');
//const pathInput = process.argv.slice(2);
const readFile = (pathInput) => {
  let arrayLinks = [];
  //let en = path.extname(pathInput[0]);
  let en = extFile(pathInput[0]);
  console.log(en);

  if (en === '.md') {
     arrayLinks = fs.readFileSync(pathInput[0], 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
    
      return arrayLinks;
    }
    

   else {
    return ('------------- El archivo no es .md-------------');
  }

}

module.exports = {
  readFile
}
