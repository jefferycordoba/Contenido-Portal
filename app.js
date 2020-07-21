const {getJsonFromExcel,visualizeJsonInConsole} = require('./ExcelWork/excelToJson');

let jsonFile = getJsonFromExcel('./Content-Files/data.xlsx', 6, "A6", "BE57");

visualizeJsonInConsole(jsonFile);

