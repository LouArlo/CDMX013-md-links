const path = require ('path');

const extFile = (pathInput) => {
       return path.extname(pathInput);
}

module.exports = {
    extFile
}
