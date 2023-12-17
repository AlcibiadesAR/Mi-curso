const fs = require("fs");

let mascotas = [
  {
    id: 1,
    nombre: "Tomy",
    tipo: "gato",
  },
  {
    id: 2,
    nombre: "Princesa",
    tipo: "gato",
  },
  {
    id: 3,
    nombre: "Hirishima",
    tipo: "cobayo",
  },
  {
    id: 4,
    nombre: "Florentino",
    tipo: "tortuga",
  },
  {
    id: 5,
    nombre: "Dorado",
    tipo: "Pez",
  },
];

let objetoJSON = JSON.stringify(mascotas);

// Escribir el objeto JSON en un archivo de forma asíncrona
fs.writeFile("./mascotas.JSON", objetoJSON, "utf-8", (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("Archivo escrito correctamente.");
  }
});

// Leer un objeto JSON de un archivo de forma asíncrona
fs.readFile("mascotas.JSON", "utf-8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
  } else {
    console.log("Contenido del archivo:");
    console.log(data);
  }
});
