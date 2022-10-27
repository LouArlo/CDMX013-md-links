const fs = require('fs');

const readFile = (pathInput) => {
  let arrayLinks = [];
  
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
    
    return auxarrayLinks;
  

}

module.exports = {
  readFile
}
