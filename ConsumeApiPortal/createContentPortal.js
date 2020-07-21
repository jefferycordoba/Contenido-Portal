const axios = require('axios');

let sendContentPortal = async (dataJson) => {

    dataJson.Hoja1.forEach(obj => {
            const instance = axios.create({
                baseURL: "https://dev.grupobancolombia.com:1443/mycontenthandler/wcmrest/ContentTemplate/16147970-72ee-425c-a243-e4d16c3b175d/new-content?mime-type=application/json",
                headers: {'Authorization': 'Basic Z2NhbGRlcm86R2NhbGRlcm8yMDE3Lg=='}
                });
        
    });
}