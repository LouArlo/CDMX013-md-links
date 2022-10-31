
// const fetch = require('node-fetch');
const {onlyValidation} = require('./onlyValidation.js')
//const links = 'https://regexr.com/';
//process.argv[2];

const validation = (links) => {
    //console.log("recibiendo en validaciones ", links);

    let alllinkstoValidate = links.map(link=>{
        return onlyValidation(link.href).then(respuesta=>{
             link.status=respuesta
             if (respuesta<300){
              link.message= 'ok'
             } else {
                link.message= 'fail'
             }
             // stauts code
             return link
        }).catch(err=>{
            link.status=err
            
            // status code
             return link
        })
       
    })
    return new Promise((resolve,reject)=>{
       Promise.all(alllinkstoValidate).then(fin=>{
        resolve(fin)
       })
    })

   /*
    let arrayPromisValidation = [];

    return new Promise(resolve => {
        links.forEach((link) => {
           
            let message = '';
            fetch(link.href).then(validation => {
                if (validation.statusText != 'OK') {
                    message = 'fail'
                } else {
                    message = 'ok'
                }
                
                let object = {
                    href: link.href,
                    text: link.text,
                    file: link.file,
                    mess: message,
                    satus: validation.status,
                };
                arrayPromisValidation.push(object);
            })
                .catch(error => {
                    console.log(error.code);
                });
            console.log(arrayPromisValidation);
           
            const resultPromises = Promise.all(arrayPromisValidation).then((resultado => {
               
                return resultPromises;
            }))
            resultPromises.then((alllinks) => {
                resolve(alllinks)
            })
        })
    })*/
}


module.exports = {
    validation
}