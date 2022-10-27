const fs = require('fs');
const path = require('path');
const { extFile } = require('./extFile');
//const pathInput = process.argv.slice(2);
const readFile = (pathInput) => {
  let arrayLinks = [];
  //let arrayLinksFileMd = [];
  //let en = extFile(pathInput);
  //console.log(en);
  //if (en === '.md') {
    let auxarrayLinks = [];
    let auxLink = "";

    arrayLinks = fs.readFileSync(pathInput, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);

    arrayLinks.forEach((element) => {
      //console.log(element);
      auxLink = element.replace("](", "*");
      auxLink = auxLink.replace("[", "");
      auxLink = auxLink.replace(")", "");
      //console.log(auxLink);
      let begin = auxLink.indexOf('*');
      let object = {
        file: pathInput,
        href: auxLink.slice(begin + 1),
        text: auxLink.slice(0, begin),
      };

      auxarrayLinks.push(object);

    })
    //return arrayLinksFileMd;
    return auxarrayLinks;
  //} else {
    //return ('------------- El archivo no es .md-------------');
  //};



}

module.exports = {
  readFile
}
