const fs = require("fs");

const miObjeto_json = fs.readFileSync("./coche.json", "utf-8");
const miObjeto = JSON.parse(miObjeto_json);

console.log(miObjeto);

/*
Para acceder a un objeto dentro de ese mismo objeto

console.log(miObjeto.rueda);
*/