const fs = require('fs');
const path = require('path');

const pathInput = process.argv.slice(2);

// console.log(pathInput);
en = path.extname(pathInput[0]);
//console.log(en);
if (en === '.md') {
  bf = fs.readFileSync(pathInput[0], 'utf8').split('\n');
  console.log(bf);
} else {
  console.log('------------- El archivo no es .md-------------');
}