const {getJsonFromExcel,visualizeJsonInConsole, mappingJsonAttributes} = require('./ExcelWork/excelToJson');

let jsonFile = getJsonFromExcel('./Content-Files/data.xlsx', 6, "A6", "BE57");

visualizeJsonInConsole(jsonFile);

let primerObjeto = jsonFile[0];
console.log("%j", primerObjeto);

let contentJson = mappingJsonAttributes(jsonFile);
console.log("%j", contentJson);
console.log(`numero de elementos de contentJson: ${contentJson.length}`);
//visualizeJsonInConsole(contentJson);


