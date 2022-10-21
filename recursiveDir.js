const fs = require('fs');
const path = require('path');

// const directoryName = process.argv[2];
// const routeDir = directoryName;

/* let stats = fs.lstatSync(openedDir);
if (!stats.isDirectory()){
  return ("la ruta no es un directorio");
} */
const routeDir = '../CDMX013-cipher';
const gettingDir = (routeDir) => {
  let arrayLinks = [];
  const fileDirent = fs.readdirSync(routeDir, { withFileTypes: true });
  console.log('este es el fileDirect => ', fileDirent);

  fileDirent.forEach((file) => {
    // console.log(file);
    // nsole.log(file);
    // subirlo a un array
    // } else {
    const stats = fs.lstatSync(file);
    const newPath = path.join(routeDir, file.name);
    // console.log("newPath ", newPath);
    // console.log(stats.isFile(), stats.isDirectory());
    if (stats.isDirectory()) {
      console.log(' nvo ', newPath);
      arrayLinks = [...arrayLinks, ...gettingDir(newPath)];
    } else {
      arrayLinks.push(newPath);
    }

    // empieza la recursividad con newPath
    // fileDirent = fs.readdirSync(newPath, { withFileTypes: true }); }

  // }
  // llama por primera vez
  });
  return arrayLinks;
};