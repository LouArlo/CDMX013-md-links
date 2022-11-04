const { readFile } = require('./readFile');
const { recursive } = require('./recursive');

const readDir = (routerDir) => {
  let arrayPromises = [];
  return new Promise(resolve => {

    recursive(routerDir).forEach((element) => {
      const promesaDeArchivo = readFile(element)
      arrayPromises.push(promesaDeArchivo)
    })

    const resultadoPromesas = Promise.all(arrayPromises).then((resultado => {
      const links = resultado.flat(1)
      return links
    }))

    resultadoPromesas.then((alllinks) => {
      resolve(alllinks)
    })

  })

}

module.exports = {
  readDir
}

