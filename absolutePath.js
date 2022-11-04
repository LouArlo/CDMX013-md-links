const path = require ('path');

const absolutePath = (pathInput) => {
    if (!path.isAbsolute(pathInput)) {
        return path.resolve(pathInput);
    } else {
        return pathInput;
    }
}

module.exports= {
    absolutePath
}