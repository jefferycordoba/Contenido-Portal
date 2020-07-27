const axios = require('axios');

let sendContentPortal = (jsonArray) => {

    jsonArray.forEach(obj => {
            const instance = axios.create({
                baseURL: "https://dev.grupobancolombia.com:1443/mycontenthandler/wcmrest/ContentTemplate/16147970-72ee-425c-a243-e4d16c3b175d/new-content?mime-type=application/json",
                headers: {
                    'Authorization': 'Basic Z2NhbGRlcm86R2NhbGRlcm8yMDE3Lg==',
                    'Content-Type': 'application/json'
                },
                data: obj
                });
            let resp = instance.post();
            //debemos validar el contenido de la respuesta para poder validar cuando es un error
            if (resp.data.Results.length === 0){
                throw new Error ('Error al crear el contenido');
            }else{
                console.log("Respuesta: %j", resp);
            }
    });
}

module.exports = {
    sendContentPortal
}