// Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.
let electrodomésticos = ["licuadora", "estufa", "nevera", "microondas", "arrocera", "lavadora"]

// Ejecutar sobre el array creado las siguientes acciones: Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
//manera de hacerlo 1
let indicesAcceso = [0, 1, 2, 3, 4, 5];

for (let indiceActual of indicesAcceso) {
  console.log(`Elemento en el índice ${indiceActual}: ${electrodomésticos[indiceActual]}`);
}
// manera de hacerlo 2
console.log(`Elemento en el índice 0 es: `+ electrodomésticos[0])

// Extraer el primer elemento del array y agregarlo al final del mismo.
let miArray1 = electrodomésticos.shift();
electrodomésticos.push(miArray1)

// Agregar al final del array dos (2) nuevos productos.
electrodomésticos.push("bocina", "television")
console.log(electrodomésticos);

// Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(electrodomésticos.length);

// Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado no existe”.
let elementoBuscado = electrodomésticos.includes("horno") ? ("Producto Encontrado") : ("El producto buscado no existe")
    console.log(elementoBuscado)

// Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
console.log(electrodomésticos.join(","));

// Determinar la cantidad de elementos que posee la cadena de texto obtenida.
let textoObtenido = ("estufa,nevera,microondas,arrocera,lavadora,licuadora,bocina,television")
console.log(textoObtenido.length)

// Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
let reemplazo = (textoObtenido, buscar, cambiar) => textoObtenido.replace(buscar, cambiar);
console.log(reemplazo(textoObtenido, "arrocera", "cafetera"))

// Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.
let nuevoTextoObtenido = ("estufa,nevera,microondas,cafetera,lavadora,licuadora,bocina,television")
console.log(nuevoTextoObtenido.split(","));