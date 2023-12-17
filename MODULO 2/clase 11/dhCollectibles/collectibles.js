/*Crear en la carpeta raíz del proyecto un archivo (collectibles.js). Este archivo será un
módulo propio, en el que debes construir una función (importar). Esta recibirá como
parámetro el nombre de la marca de las figuras coleccionables. Tendrá la responsabilidad
de leer el archivo en formato JSON y devolver un array de objetos de cada una de las
marcas que reciba.*/
let { readFileSync } = require("fs");
// Hot Toys
function importar(marca) {
  switch (marca) {
    case "Hot Toys":
      return JSON.parse(readFileSync("./figura1.JSON", "utf-8"));
    case "Bandai":
      return JSON.parse(readFileSync("./figura2.JSON", "utf-8"));
    case "Star Wars":
      return JSON.parse(readFileSync("./figura3.JSON", "utf-8"));
  }
}

module.exports = importar;



