//const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const { readFile } = require('./readFile');

//let arrayLinksFileMd = [];
let arrayPromises = []
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


  //console.log(arrayLinksFileMd);
   return new Promise(resolve => {
    // resolve(arrayLinksFileMd);
          //promiseall 
      gettingDir(routerDir).forEach((element) => {

        //let auxarrayLinks = readFile(element);
        //promise -> then
        const promesaDeArchivo = readFile(element)

        arrayPromises.push(promesaDeArchivo)
    
        //como convertir un array que contiene arrays en un unico array
        // console.log( [[1,[1,23]],[9,7],[1,2]].flat(1))
      })

      const resultadoPromesas = Promise.all(arrayPromises).then((resultado=>{
          
        const links = resultado.flat(1)

        return links
      }))
      
      resultadoPromesas.then((alllinks)=>{
        //console.log(alllinks)
        resolve(alllinks)
      })

  }) 

}
  module.exports = {
    readDir
  }

