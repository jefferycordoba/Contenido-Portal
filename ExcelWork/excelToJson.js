'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const jsonTemplate = require('../Json-Template/template.json');

let getJsonFromExcel = (filePath, header, rangeBegin, RangeFinal) => {

    const dataJson = excelToJson({
        source: fs.readFileSync(filePath),
        header:{
            rows: header
        },
        range: `${rangeBegin}:${RangeFinal}`,
        columnToKey: {
            '*': '{{columnHeader}}'
        }
        
    });
    return dataJson.Hoja1;
} 

let visualizeJsonInConsole = (dataJson) =>  {
    let count = 0;
    dataJson.forEach(obj => {
        count++;
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key} : ${value}`);
        });
        console.log('-------------------');
    });
    console.log("cantidad de objetos dentro del json data");
    console.log(count);
}

let mappingJsonAttributes = (dataJson) => {
    let JsonContent = [];
    dataJson.forEach(obj => {
        let templateJson = jsonTemplate;
        templateJson.entry.title.value = obj.CATEGORIAS
        JsonContent.push(templateJson);
        
    });
    return JsonContent;
}

module.exports = {
    getJsonFromExcel,
    visualizeJsonInConsole,
    mappingJsonAttributes
}