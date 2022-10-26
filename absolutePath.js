const path = require ('path');

const absolutePath = (pathInput) => {
    if (!path.isAbsolute(pathInput[0])){
        return path.resolve(pathInput[0]);
    } else {
        return pathInput;
    }
}

module.exports= {
    absolutePath
}