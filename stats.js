const { readFile } = require('./readFile');
const { getLinks } = require('./getLinks');
const { validation } = require('./validation');
const { recursive } = require('./recursive');

const stats = (pathInput, letter) => {
    
    function myBrokens(pathInput) {
        let canSet = new Set(getLinks(pathInput));
        
        readFile(pathInput).then(linksAll => validation(linksAll).then(linksTodos => {
            //--------obtener links broken
            let contFail = 0;
            linksTodos.forEach(link => {
                if (link.message == 'fail' || link.status == 'fail') {
                    contFail += 1;
                }
            })
            //------- obtener links total    })
            console.log("File: ", pathInput)
            console.log('Total: ', linksAll.length);
            console.log("Unique: ", canSet.size);
            console.log('Broken: ', contFail);
            return;
        }))
    }
    

    if (letter == 'F') {
        myBrokens(pathInput);
        
    } else {
        recursive(pathInput).forEach((element) => {
         //   const promesaDeArchivo = readFile(element)
         myBrokens(element)
            //arrayPromises.push(promesaDeArchivo)
          })
    }
}
module.exports = {
    stats
}