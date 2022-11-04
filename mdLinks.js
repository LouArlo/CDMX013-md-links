const fs = require('fs');
//const path = require ('path');
const { absolutePath } = require('./absolutePath');
const { readFile } = require('./readFile');
const { readDir } = require('./readDir');
const { extFile } = require('./extFile');
const { validation } = require('./validation');
const { stats } = require('./stats');
const [, , ...args] = process.argv
//const fetch = require('node-fetch');

const mdLinks = (routeP, validateP, statsP) => {
  let route = routeP;
  let validate = validateP;
  let statsOp = statsP;

  let pathAbsolute = absolutePath(route);
  //console.log(" ruta absoluta ==> ",pathAbsolute,route);

  let statsPath = fs.lstatSync(pathAbsolute);
  let canSet=[];
  let auxLinks = [];
  // directory
  if (statsPath.isDirectory() == true) {

    if (!validate && !statsOp) {
      readDir(pathAbsolute).then(linksAll => {
        console.log(linksAll);
      })      
    }

    if (validate && !statsOp) {
      //console.log("status de directorio ", statsPath.isDirectory)
      readDir(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
        console.log(linksTodos);
      }))
    }

    if (statsOp && !validate) {
     
      stats(pathAbsolute,"D");
      
    }

    if (statsOp && validate) {
      readDir(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {       
      }))
      stats(pathAbsolute,"D");
    }
  }
  else {
    // file
    let en = extFile(pathAbsolute);

    if (en === '.md') {
      
      if (!validate && !statsOp) {
        readFile(pathAbsolute).then(linksAll => {
          console.log(linksAll);
        });
      }

      if (validate && !statsOp) {
        readFile(pathAbsolute).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log(linksTodos);
        }));
      }

      if (statsOp && !validate) {     
          stats(pathAbsolute,"F");            
      }

      if (statsOp && validate) {
        readFile(pathAbsolute, canSet).then(linksAll => validation(linksAll).then(linksTodos => {
          console.log(linksTodos);
        })); 

        stats(pathAbsolute,'F');       
      }
    }
    else {
      console.log(" :( error, no es .md")
    }
  }
  
}

// ------- cli
let route = args[0];
let validate = false;
let statsOp = false;
if (fs.existsSync(args[0]) == true) {
  //console.log(" ruta válida ", args[0])  
  //console.log("cli ",args[0], args[1], args[2]);
  if (args.includes('--validate')) {
    validate = true;
  }
  if (args.includes('--stats')) {
    statsOp = true
  }
  mdLinks(route, validate, statsOp);

} else {
  console.log(" :( error, no existe path ")
}
 //console.log("cli ",route, validate, stats);

//-------fin cli
//mdLinks(process.argv[2]);
//mdLinks(route, validate, stats);
