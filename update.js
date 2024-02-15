const fs = require("fs");

const miObjeto_json = fs.readFileSync("./coche.json", "utf-8");
const miObjeto = JSON.parse(miObjeto_json);

miObjeto.rueda = 10;

//Modifica el objeto
fs.writeFileSync("./coche.json", JSON.stringify(miObjeto, null, 2)); 

/*
Añade el objeto en otra línea, sirve para sseguir añadiendo secuencialmente

fs.appendFileSync("./coche.json", JSON.stringify(miObjeto, null, 2)); 
*/
