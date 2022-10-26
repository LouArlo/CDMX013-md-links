const fs = require('fs');
const path = require('path');

//const directoryName = process.argv[2];
//const routerDir = directoryName;
const readDir = (routerDir) => {
  let arrayLinksFileMd = [];

  if (routerDir == undefined) {
    console.log("----------ruta invalida---------");
    return;
  }

  // función recursiva
  const gettingDir = (anyDir) => {
    let arrayFileMd = [];

    const fileDirent = fs.readdirSync(anyDir, { withFileTypes: true });

    //barrido de directprios
    fileDirent.forEach((file) => {
      //formando nueva ruta
      const newPath = path.join(anyDir, file.name);
      //validando si es directorio
      if (file.isDirectory()) {
        // proceso de recursividad
        arrayFileMd = [...arrayFileMd, ...gettingDir(newPath)];
      } else {
        //llenando array de files con .md´s
        let en = path.extname(newPath);
        if (en === '.md') {
          //console.log(" en array ",en);
          arrayFileMd.push(newPath);
        }
      }
    });
    return arrayFileMd;
  }
  //console.log("arrayFileMd ---",gettingDir(routerDir));
  link = "";
  let routerOnefile = gettingDir(routerDir);
  //console.log("nuevo router ",routerOnefile);

  // Abrir y trabajar cada file .md
  for (let i = 0; i < routerOnefile.length; i++) {
    //abriendo cada .md
    //console.log(routerOnefile[i]);
    const fileObj = fs.readFileSync(routerOnefile[i], 'utf8').split('\r\n');
    //console.log("nueva file ", fileObj);
    for (let m = 0; m < fileObj.length; m++) {
      // console.log("linea de link  de file ", fileObj[m]);
      let link = fileObj[m].match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
      if (link !== null || link !== 0) {
        let object = {
          file: routerOnefile[i],
          href: fileObj[m].match(/\((https?:\/\/.+)\)/gi),
          text: fileObj[m].match(/\[(.+)\]/gi),
        };
        //console.log("link ",link, object);
        arrayLinksFileMd.push(object);
      }
    }
  }

  //consologuear el array de lnks obtenido
  //console.log("primera salida de info sin options -->", arrayLinksFileMd);
  return (arrayLinksFileMd)
}

module.exports = {
  readDir
}

