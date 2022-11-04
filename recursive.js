const fs = require('fs');
const path = require('path');


  // función recursiva
  const recursive = (anyDir) => {
    let arrayFileMd = [];
    const fileDirent = fs.readdirSync(anyDir, { withFileTypes: true });

    //barrido de directprios
    fileDirent.forEach((file) => {
      //formando nueva ruta
      const newPath = path.join(anyDir, file.name);
      //validando si es directorio
      if (file.isDirectory()) {
        // ------------------------------ llamando así misma
        arrayFileMd = [...arrayFileMd, ...recursive(newPath)];
      } else {
        //llenando array de files con .md´s
        let en = path.extname(newPath);

        if (en === '.md') {
          arrayFileMd.push(newPath);
        }
      }
    })

    return arrayFileMd;
  }

  module.exports = {
    recursive
  }