
const {getJsonFromExcel,visualizeJsonInConsole, mappingJsonAttributes} = require('./ExcelWork/excelToJson');

let jsonFile = getJsonFromExcel('./Content-Files/data.xlsx', 6, "A6", "BE57");
console.log(jsonFile);
//visualizeJsonInConsole(jsonFile);

let primerObjeto = jsonFile[0];
console.log("%j", primerObjeto);

let contentJson = mappingJsonAttributes(jsonFile);
//console.log(contentJson);
console.log(`numero de elementos de contentJson: ${contentJson.length}`);
console.log("%j",contentJson);

