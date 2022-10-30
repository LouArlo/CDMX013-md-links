
const fetch = require('node-fetch');

//const links = 'https://regexr.com/';
//process.argv[2];

const validation = (links) => {
    let object = {};
    // console.log("recibiendo en validaciones ", links);
    return new Promise(resolve => {

        const arrayPromisValidation = [];

        links.forEach((link) => {

            //const promisValidation = fetch(link.href)
            fetch(link.href).then(validation => {
                console.log(validation.status, validation.statusText);
                //arrayPromisValidation.push(validation);
            })
                .catch(error => {
                    console.log(error.code);
                });
            
            /*let object = {
                href: auxLink.slice(begin + 1),
                text: auxLink.slice(0, begin),
                file: pathInput,
                
            }*/
            //arrayPromisValidation.push(validation);    
            const resultPromises = Promise.all(arrayPromisValidation).then((resultado => {
                // por si fuera necesario aplanarlo
                return resultado
            }))
            resultPromises.then((alllinks) => {
                    resolve(alllinks)
                })
                /* links    
                const URL = 'https://regexr.com/';
                fetch(URL).then(validation => {
                    console.log(validation.status, validation.statusText);
                });
                console.log('https://regexr.com/', URL); */
            })
    })
}

//console.log(validation(links));

module.exports = {
    validation
}