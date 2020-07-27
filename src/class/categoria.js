const unidecode = require('unidecode');
const Categoria =  class {
    entry = new Object();
    constructor(nmCatego,wcmId,tipo) {        
        this.entry.title = new Object();
        this.entry.title.lang = "es";
        this.entry.title.value = letracapital(nmCatego);
        this.entry.summary = new Object();
        this.entry.summary.lang = "es";
        this.entry.name = decode(nmCatego);
        this.entry.link = linkObject(wcmId,tipo);
    }
}

const letracapital = (str) => {
    return unidecode(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
};

const decode = (str) => {
    str = str.replace(/[.\s]/g,'')
    return 'cat' + letracapital(unidecode(str))
}

const linkObject = (wcmId,tipo) => {
    let link = new Object();
    link.rel = 'parent';
    link.lang = "es";
    link.label = "Padre";
    tipo === 1
    ? link.href = `/mycontenthandler/wcmrest/Taxonomy/${wcmId}`
    : link.href = `/mycontenthandler/wcmrest/Category/${wcmId}`
    return link
}

module.exports = { Categoria }

/*
let prueba = new Categoria('mipruebá','45218-4521',45);
console.log(prueba);
*/