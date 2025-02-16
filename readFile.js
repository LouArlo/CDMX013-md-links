const fs = require('fs');
const { getLinks } = require('./getLinks');


const readFile = (pathInput) => {
  let arrayLinks = [];
  
    let auxarrayLinks = [];
    let auxLink = "";

    //arrayLinks = fs.readFileSync(pathInput, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
    getLinks(pathInput);
    
    //----
    //arrayLinks.forEach((element) => {
      getLinks(pathInput).forEach((element) => {
      //console.log(element);
      auxLink = element.replace("](", "*");
      auxLink = auxLink.replace("[", "");
      auxLink = auxLink.replace(")", "");
      //console.log(auxLink);
      let begin = auxLink.indexOf('*');
      let object = {
        href: auxLink.slice(begin + 1),
        text: (auxLink.slice(0, begin)).slice(0,49),
        file: pathInput,
      };

      auxarrayLinks.push(object);

    })
    //validar http
    return new Promise (resolve => {
      resolve(auxarrayLinks);
    }) 

}

module.exports = {
  readFile
}
