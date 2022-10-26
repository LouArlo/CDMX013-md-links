const fs = require('fs');
//const path = require ('path');
const { absolutePath } = require('./absolutePath');
const { readFile } = require ('./readFile');
const { readDir } = require ('./readDir');

const pathInput = process.argv.slice(2);

console.log(absolutePath(pathInput));

// if para direccionar a File o Directory
if (fs.lstatSync(absolutePath(pathInput)).isDirectory() == true) {
  //console.log(" es un DIRECTORIO-----------");
    console.log(readDir(pathInput[0]));
}else
  {
    //console.log(" es un ARCHIVO-----------");
    console.log(readFile (pathInput));
  } 
    
   // else { console.log("----ruta erronea---- ") }


  //fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()
  //console.log(fs.lstatSync(absolutePath(pathInput)).isDirectory()); //,fs.lstatSync(pathInput[0]).isDirectory());