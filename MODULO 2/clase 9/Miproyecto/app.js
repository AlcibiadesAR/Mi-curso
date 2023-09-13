let peliculas = require("./peliculas")

//console.log(peliculas);

// primera forma

peliculas.forEach((pelicula) => {
    console.log("Pelicula ID:", pelicula.id);
    console.log("nombre:", pelicula.nombre);
    console.log("rating:", pelicula.rating);
    console.log("awards:", pelicula.awards);
    console.log("length:", pelicula.length);
    console.log("price:", pelicula.price);
    console.log("genre:", pelicula.genre);
    console.log("----------------------\n")
});

// segunda forma
for(i = 0; i < peliculas.length; i++){
    console.log(peliculas[i].nombre)
}

console.log("\n")

// tercera forma
for( let x of peliculas){
    console.log(x.nombre);
}

console.log("\n")

const fs = require('fs');
const path = require('path'); // Importamos el módulo 'path' para manejar rutas

const rutaArchivo = path.join(__dirname, 'prueba.txt'); // Ruta completa al archivo

try {
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
    console.log(contenido);
} catch (error) {
    console.error("Ocurrió un error al leer el archivo:", error);
}
