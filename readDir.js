const fs = require('fs');
const path = require('path');
const { readFile } = require('./readFile');

let arrayLinksFileMd = [];
let arrayFileMd = [];
//const directoryName = process.argv[2];
//const routerDir = directoryName;
const readDir = (routerDir) => {
 
  // función recursiva
  const gettingDir = (anyDir) => {
    
    const fileDirent = fs.readdirSync(anyDir, { withFileTypes: true });

    //barrido de directprios
    fileDirent.forEach((file) => {
      //formando nueva ruta
      const newPath = path.join(anyDir, file.name);
      //validando si es directorio
      if (file.isDirectory()) {
        // ------------------------------ llamando así misma
        arrayFileMd = [...arrayFileMd, ...gettingDir(newPath)];
      } else {
        //llenando array de files con .md´s
        let en = path.extname(newPath);

        if (en === '.md') {
          arrayFileMd.push(newPath);
        }
      }
    }) 

    return arrayFileMd;
  }

  gettingDir(routerDir).forEach((element) => {

    let auxarrayLinks=readFile(element);

    arrayLinksFileMd = [...arrayLinksFileMd,...auxarrayLinks ];  
  }) 
  
 return (arrayLinksFileMd)
}

module.exports = {
  readDir
}

