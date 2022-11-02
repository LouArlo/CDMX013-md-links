const fs = require('fs');
//const path = require ('path');
const { absolutePath } = require('./absolutePath');
const { readFile } = require('./readFile');
const { readDir } = require('./readDir');
const { extFile } = require('./extFile');
const { validation } = require('./validation');
const [, , ...args] = process.argv
//const fetch = require('node-fetch');

const mdLinks = (routeP, validateP, statsP) => {
  let route = routeP;
  let validate = validateP;
  let stats = statsP;

  let pathAbsolute = absolutePath(route);
  //console.log(" ruta absoluta ==> ",pathAbsolute,route);

  let statsPath = fs.lstatSync(pathAbsolute);
  let auxLinks = [];
  // directory
  if (statsPath.isDirectory() == true) {
    if (!validate && !stats) {
      readDir(pathAbsolute).then(linksAll => {
        console.log(linksAll);
      })      
    }
    if (validate && !stats) {
      //console.log("status de directorio ", statsPath.isDirectory)
      readDir(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
        console.log(linksTodos);
      }))
    }
    if (stats && !validate) {
      readDir(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
        let fileSize = new Set();
        //let broken = linksTodos.map(linksTodos.message =='fail')
        fileSize.add(linksTodos);
        console.log("Total: ", linksTodos.length);
        console.log("Unique: ", fileSize.size); 
      }))
      
    }
    if (stats && validate) {
      readDir(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
        console.log(linksTodos);
        let fileSize = new Set();
        //let broken = linksTodos.map(linksTodos.message =='fail')
        fileSize.add(linksTodos);
        console.log("Total: ", linksTodos.length);
        console.log("Unique: ", fileSize.size); 
      }))
    }
  }
  else {
    // file
    let en = extFile(pathAbsolute);

    if (en === '.md') {
      if (!validate && !stats) {
        readFile(pathAbsolute).then(linksAll => {
          console.log(linksAll);
        });
      }
      if (validate && !stats) {
        readFile(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log(linksTodos);
        }));
      }
      if (stats && !validate) {
        readFile(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
          //console.log("sólo links", linksTodos.flat(1));
          let fileSize = new Set();
          //let broken = linksTodos.map(linksTodos.message =='fail')
          fileSize.add(linksTodos);
          console.log("Total: ", linksTodos.length);
          console.log("Unique: ", fileSize.size);
          //console.log("Broken: ", broken.length)
        }));             
      }
      if (stats && validate) {
        readFile(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log(linksTodos);
          let fileSize = new Set();
          //let broken = linksTodos.map(linksTodos.message =='fail')
          fileSize.add(linksTodos);
          console.log("Total: ", linksTodos.length);
          console.log("Unique: ", fileSize.size);
          //console.log("Broken: ", broken.length)
        }));
        console.log("en construcción todo file");
      }
    }
    else {
      console.log(" :( error, no es .md")
    }
  }
  // }
  //  else {
  //   console.log(" :( error, no existe path ", route)
  // } 
}

// ------- cli
let route = args[0];
let validate = false;
let stats = false;
if (fs.existsSync(args[0]) == true) {
  //console.log(" ruta válida ", args[0])  
  //console.log("cli ",args[0], args[1], args[2]);
  if (args.includes('--validate')) {
    validate = true;
  }
  if (args.includes('--stats')) {
    stats = true
  }
  mdLinks(route, validate, stats);

} else {
  console.log(" :( error, no existe path ")
}
 //console.log("cli ",route, validate, stats);

//-------fin cli
//mdLinks(process.argv[2]);
//mdLinks(route, validate, stats);
