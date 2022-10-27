const fs = require('fs');
//const path = require ('path');
const { absolutePath } = require('./absolutePath');
const { readFile } = require('./readFile');
const { readDir } = require('./readDir');
const { extFile } = require('./extFile');

const pathInput = process.argv.slice(2);



if (fs.existsSync(pathInput[0]) == true) {
  //console.log("hola si existe")

  let pathAbsolute = absolutePath(pathInput)
  //console.log(" ruta absoluta ==> ",pathAbsolute);

  let statsPath = fs.lstatSync(pathAbsolute);

  if (statsPath.isDirectory() == true) {
    console.log(readDir(pathAbsolute));
  } 
  else 
  {
    let en = extFile(pathAbsolute);
    
    if (en === '.md') {
      console.log(readFile(pathAbsolute));
    } 
    else 
    { 
      console.log(" :( error, no es .md") 
    }
  } 
}
else 
{
  console.log(" :( error, no existe path ")
}

