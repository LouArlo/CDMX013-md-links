const fetch = require('node-fetch');

const onlyValidation =(link) =>{
    return new Promise((resolve, reject)=>{
        fetch(link)
        .then(resp=>resolve(resp.status))
        .catch(err =>reject('fail'))
        //.catch(err =>reject('fail'))
    })
}

module.exports={
    onlyValidation
}