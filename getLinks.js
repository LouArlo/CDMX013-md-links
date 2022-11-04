const fs = require('fs');

const getLinks = (pathInput) => {
    
    let arrayLinks = [];
    
    arrayLinks = fs.readFileSync(pathInput, 'utf8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
    //----  obteniendo linkks
    return arrayLinks
}
module.exports = {
    getLinks
}