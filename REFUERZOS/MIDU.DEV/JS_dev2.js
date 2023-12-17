function calcularProbabilidadDeBuenaNota(tiempoEstudio, dificultadExamen) {
    // Suponemos que más tiempo de estudio y menos dificultad aumentan las posibilidades
    const factorTiempoEstudio = 10;
    const factorDificultadExamen = 2;

    // Calculamos la probabilidad en base a los factores y valores dados
    const probabilidad = Math.min(100, tiempoEstudio * factorTiempoEstudio + (10 - dificultadExamen) * factorDificultadExamen);

    return probabilidad;
}

const tiempoEstudio = 5; // Horas de estudio
const dificultadExamen = 7; // Escala del 1 al 10 (siendo 10 la mayor dificultad)

const probabilidadBuenaNota = calcularProbabilidadDeBuenaNota(tiempoEstudio, dificultadExamen);
console.log(`La probabilidad de sacar una buena nota es: ${probabilidadBuenaNota.toFixed(2)}%`);

/*Existen varios métodos en JavaScript que te permiten, específicamente, buscar dentro de un Array. Estos métodos incluyen indexOf, some, every, find, findIndex e includes.*/
let trabajador= ['🧑‍🚒','👮','🧑‍⚕️','🧑‍🏫']

//indexOf: ¿En qué posición está el elemento?
let posicionDelTrabajador = trabajador.indexOf('🧑‍⚕️')
console.log(posicionDelTrabajador);

//includes: ¿El elemento existe en el Array?
let existe = trabajador.includes('🧑‍🏫')
console.log(existe);

//some: ¿Alguno de los elementos cumple con la condición?
let tieneA = trabajador.some(trabajo => trabajo === '👮');
console.log(tieneA);

/*const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number > 3
})
console.log(tieneNumeroMayorA5)*/

//every: ¿Todos los elementos cumplen con la condición?
let todosCumplen1 = trabajador.every(trabaja => trabaja  === '👮')
console.log(todosCumplen1);

/*let trabajo =['👮','👮','👮','👮']
let todosCumplen2 = trabajo.every(trabaja => trabaja ==='👮')
console.log(todosCumplen2);*/

//find: Devuelve el primer elemento que cumple con la condición
let numberNegativo = [2,-4,8]
let encuentra = numberNegativo.find(number => number  < 0)
console.log(encuentra);

//findIndex: Devuelve el índice del primer elemento que cumple con la condición
let encuentraIndice = numberNegativo.findIndex(number => number  < 0)
console.log(encuentraIndice);

 //endsWith
 function acabanEnA(words) {
    // tu código aquí
    return words.every(cadena => cadena.endsWith('a'))
  }
  let word1 = ['ana','taza','casa']
  let resultado1= acabanEnA(word1)
  console.log(resultado1);

  let word2 = ['campana','oso','carro']
  let resultado2= acabanEnA(word2)
  console.log(resultado2);

  // charCodeAt()
  let text = "A"
  let unicodeValue = text.charCodeAt(0)
  console.log("El valor Unicode de '" + text + "' es: " + unicodeValue);
  
  //sort
let numero = [10,9,8,7,6,5,4,3,2,1];
numero.sort((b, a) => b-a)
console.log(numero);

//operador de propagación (...)
let numeros = [5, 10, 2, 25, 7]
const copiaNumeros = [...numeros]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)
console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros)
  
// ejercicio practico
//METODO 1
function sortAbsoluteNumbers(numbers) {
  // Obtiene los valores absolutos de los números originales
  let absolute = numbers.map(Math.abs);

  // Ordena los valores absolutos en orden ascendente
  absolute.sort((a, b) => a - b);

  return absolute;
}

let numbers = [-2,-1,0];
console.log(sortAbsoluteNumbers(numbers));


// METODO 2
  
  function sortAbsoluteNumbers(numbers) {
    // tu código 
      let absoluteValues = numbers.map(Math.abs);
      let combinedAbsolute = numbers.map((num, index)=> ({original: num, absolute: absoluteValues[index]}));
          combinedAbsolute.sort((a,b) => a.absolute - b.absolute)
    let sortedNumbers = combinedAbsolute.map(item => item.original)
      return sortedNumbers
    }
    console.log(sortAbsoluteNumbers([-2, -1, 0])); 

    //Transformación de Arrays en JavaScript

  // filter
  //ejemplo 1
  let number = [1,2,3,4,5,6,7,8,9,10];
  let impar = number.filter( impars => impars % 2 !== 0)
  console.log(impar);

  //ejemplo 2
  const string = ['Panamá','Argentina', 'Mexico', 'Alemania', 'Perú','Venezuela']
  const texto = string.filter(letra => letra.includes('a') )
    console.log(texto);

  //map
  //ejemplo 1
  const numero1= [2,4,6,8,10];
  const duplicado = numero1.map(numero => numero * 2)
  console.log(duplicado);
   
  //ejemplo 2
  const palabras = ['Panamá','Argentina', 'Mexico', 'Alemania', 'Perú','Venezuela'];
  const longitud = palabras.map(texto => texto.length);
  console.log(longitud);

  //ejemplo extra 2
// Supongamos que tienes un array de objetos llamado ropa
const ropa = [
  { tipo: 'Camisa', precio: 25.99 },
  { tipo: 'Pantalón', precio: 39.99 },
  { tipo: 'Zapatos', precio: 59.99 },
  // ... otras prendas de ropa
];

// Agregar un 7% de ITBMS a los precios de la ropa
const ropaConITBMS = ropa.map(prenda => ({ ...prenda, precioConITBMS: Math.round(prenda.precio + 7) }));

// Mostrar el nuevo array con ropa y su precio con ITBMS
console.log(ropaConITBMS);

  //map + filter
  const numerosImpares = [1,2,3,4,5,6,7,8,9,10];
  const impares = numerosImpares.filter(numero => numero % 2 !== 0);
  const duplicar = impares.map( number => number * 2 ) 
  console.log(duplicar);

  //reduce
  const numerosPares = [1,2,3,4,5,6,7,8,9,10];
  const reduce = numerosPares.reduce((acumulador, actual) =>{
    const pares = actual % 2 === 0;
    const doble = actual * 2;
    const mayor = actual > 5
    if(pares && mayor){
      return acumulador.concat(doble)
    } else {
      return acumulador
    }
  },[])

  console.log(reduce);

   //ejercicio pactico
   /*Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice. Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.*/
   
   function buscaPalabras(words, word) {
    let indice = words.indexOf(word);
    console.log("Índice de la palabra buscada:", indice);
    
    let filtrado = words.filter((palabra) => palabra.length > indice);;
    return filtrado;
  }
  
  console.log(buscaPalabras(['uva','pera','manzana','sandia'],'sandia'))
  
 //ejemplo extra1
// Supongamos que tienes un array de objetos llamado productos
const productos = [
  { nombre: 'autoRojo', precio: 2500 },
  { nombre: 'autoAzul', precio: 3500 },
  { nombre: 'autoAmarillo', precio: 4000 },
  { nombre: 'autoVerde', precio: 3000}
];
// Filtrar productos con precio mayor a 3000
const productosFiltrados = productos.filter(producto => producto.precio >= 3000);

// Mostrar el nuevo array con productos filtrados
console.log(productosFiltrados);


