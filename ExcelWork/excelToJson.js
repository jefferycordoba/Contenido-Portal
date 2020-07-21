'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

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
    return dataJson;
} 

let visualizeJsonInConsole = (dataJson, sheetName) =>  {
    let count = 0;
    dataJson.Hoja1.forEach(obj => {
        count++;
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key} : ${value}`);
        });
        console.log('-------------------');
    });
    console.log("cantidad de objetos dentro del json data");
    console.log(count);
}


module.exports = {
    getJsonFromExcel,
    visualizeJsonInConsole
}