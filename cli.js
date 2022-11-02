#!/usr/bin/env node
const fs = require('fs')
const { mdLinks } = require('./mdLinks');
const [,, ...args] = process.argv

let route =args[0];
let validate = false;
let stats = false;
if (fs.existsSync(args[0]) == true) {
    //console.log(" ruta válida ", args[0])  
    console.log("cli ",args[0], args[1], args[2]);
    if (args.includes('--validate')){
        validate=true;
    }
    if (args.includes('--stats')) {
        stats=true
    }
      
 } else {
        console.log(" :( error, no existe path ")
 }
 //console.log("parametros ", route, validate, stats);

 mdLinks(route, validate, stats);