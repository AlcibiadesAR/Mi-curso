// paso 1

let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

let peliculaMasVendida = peliculas.pop();

let convertirAMayusculas = (texto) => texto.toUpperCase();

peliculas.unshift(convertirAMayusculas(peliculaMasVendida));
console.log(peliculas);

// paso 2

let proximasPeliculas = "Counter-Strike, NOP, Vértigo, Nick, Avatar";

let arrayProximasPeliculas = proximasPeliculas.split(', ');

console.log(arrayProximasPeliculas);

let videojuego = arrayProximasPeliculas.shift();

let listaDePeliculas = (array1, array2) => (array1.concat(array2))

console.log(listaDePeliculas(peliculas, arrayProximasPeliculas))

