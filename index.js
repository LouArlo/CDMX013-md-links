const fs = require('fs');
//const path = require ('path');
const { absolutePath } = require('./absolutePath');
const { readFile } = require('./readFile');
const { readDir } = require('./readDir');
const { extFile } = require('./extFile');
const { validation } = require('./validation');
//const fetch = require('node-fetch');

const mdLinks = (route) => {
  if (fs.existsSync(route) == true) {
    //console.log("hola si existe", route);

    let pathAbsolute = absolutePath(route);
    //console.log(" ruta absoluta ==> ",pathAbsolute,route);

    let statsPath = fs.lstatSync(pathAbsolute);
    let auxLinks = [];
    if (statsPath.isDirectory() == true) {
      //console.log("status de directorio ", statsPath.isDirectory)
      readDir(pathAbsolute).then(linksAll =>validation(linksAll).then(linksTodos=> {
        console.log("validaciones  ", linksTodos );
      }))
      
    }
    else {
      let en = extFile(pathAbsolute);

      if (en === '.md') {
        readFile(pathAbsolute).then(linksAll =>validation(linksAll).then(linksTodos=> {
          console.log ("validaciones de file ", linksTodos );
      }));
      }
      else {
        console.log(" :( error, no es .md")
      }
    }
  }
  else {
    console.log(" :( error, no existe path ", route)
  }
}

mdLinks(process.argv[2]);
