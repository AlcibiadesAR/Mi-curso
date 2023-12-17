//condicional if
let finDeSemana = 'Sabado';
let clima = 'soleado';

if (finDeSemana === 'Sabado' && clima === 'soleado') {
    console.log('Comeremos barquillo');
} else if (finDeSemana === 'Domingo' && clima === 'soleado') {
    console.log('Comeremos helado');
} else {
    console.log('No comeremos helado');
}
//bucles con while
let cuentaDeNiños = 0; // Declaración e inicialización de la variable que llevará la cuenta de niños.
// Inicio del bucle while. El bucle continuará mientras la cuentaDeNiños sea menor o igual a 9.
while (cuentaDeNiños <= 9) {
    cuentaDeNiños = cuentaDeNiños + 1;     // Incrementa la cuenta de niños en 1 en cada iteración del bucle.
    console.log(cuentaDeNiños + ' niño'); // Imprime en la consola el número actual de niños y la palabra 'niño'.
}
// if-else + while
// Declaración e inicialización de las variables que llevarán la cuenta de niños y niñas.
let cuentaDeNiños1 = 0;
let cuentaDeNiñas1 = 0;

// Inicio del bucle while. El bucle continuará mientras la suma de niños y niñas sea menor a 10.
while (cuentaDeNiños1 + cuentaDeNiñas1 < 10) {
    // Verifica si ya se han contado 5 niños.
    if (cuentaDeNiños1 < 5) {
        // Incrementa la cuenta de niños en 1 si aún no se han contado 5 niños.
        cuentaDeNiños1 = cuentaDeNiños1 + 1;
        console.log(cuentaDeNiños1 + ' niño');
    } else {
        // Incrementa la cuenta de niñas en 1 si ya se contaron 5 niños.
        cuentaDeNiñas1 = cuentaDeNiñas1 + 1;
        console.log(cuentaDeNiñas1 + ' niña');
    }
}
// while - break - continue
let drinkCoffee = 0

while (drinkCoffee < 10) {
  drinkCoffee = drinkCoffee + 1
  
  if (drinkCoffee === 8) { break }
  if (drinkCoffee === 5) { continue }

  console.log('café☕')
}
// Bucle con Do while
let repartirSoda = 0
do {
    repartirSoda = repartirSoda + 1
    console.log(`Una soda para el invitado número ${repartirSoda}`);
} while (repartirSoda  < 10)
// Bucle con for
for (let conteo = 10; conteo >= 0; conteo--) {
    console.log(conteo === 0 ? '¡Despegue! 🚀' : 'Faltan ' + conteo + ' segundos para el despegue');
}

// for - break - continue
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0
  if (esPar) {
    continue
  }
  // Solo mostramos este consola.log si es impar
  console.log(i)
  // Salimos del bucle al llegar al 10
  if (i === 10) {
    break
  }
}
// for anidados
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j
      console.log(i + ' x ' + j + ' = ' + resultado)
    }
  }
 
// switch
const dia = new Date().getDay();
switch (dia) {
    case 1:
    case 3:
        console.log('¡Hoy tienes clases, conectate a zoom!');
        break;
    case 2:
    case 4:
    case 5:
        console.log('¡Hoy no tienes clases, aprovecha a terminar tus tareas!');
        break;
    case 6: 
        console.log('¡Hoy no tienes clases, pero es sábado, Ve a la playa!');
        break;
    default:
        console.log('¡Hoy no tienes clases, pero es domingo, ve a la iglesia!');
        break;
}

// funciones
function NumeroAleatorio() {
    const random = Math.random();
    const multiplied = random * 10;
    const rounded = Math.floor(multiplied)
    const result = rounded + 1

    return result
}
console.log(NumeroAleatorio());

// parametros
function CocinarEnMicroondas(plato, tiempo, potencia) {
    if (plato === '🐥' && tiempo === 2 && potencia === 6) {
        return '🍗'; 
    } else{
       return  '⚠️ '+ '¡Hubo un error!, verifica los procedimientos paso a paso'
    }
}

console.log(CocinarEnMicroondas('🐥', 2, 6))

// Function Expression
const jugar = function(soccer){
    return console.log('Hoy jugare '+ soccer);
}
jugar('soccer');

// arrow function
const recorrido = (velocidad, tiempo) => velocidad * tiempo

console.log('iba en mi 🚗 a una velocidad de 80 km/h por 2 horas la distanca reocrrida que tuve es de '+ recorrido(80, 2) + ' km');

// recursividad
// ejemplo 1
function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) { return } 
  
    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
}
cuentaAtras(2)

// ejemplo 2
function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
      return 1
    } else {
      // Si el número es mayor que 1, llamamos a la función
      return n * factorial(n - 1)
    }
  }
  
  console.log(factorial(5)) 
  console.log(factorial(3)) 
  
  // ejemplo 3
  function recursive(n) {
  if (n === 0) {
    return 0
  } else {
    return n + recursive(n - 1)
  }
}

console.log(recursive(4));

// array
const supermercado = ['🍗', '🥩', '🍚', '🥪', '🥚']

supermercado[2] = '🌭'
supermercado[4] = '🥛'
 console.log(supermercado);

 // métodos de array

 //length (longitud del array)
 //ejemplo 1
 console.log(supermercado);
 console.log(supermercado.length);
//ejemplo 2
supermercado.length = 3
 console.log(supermercado)

 // push (agrega un elemento al final)
 console.log(supermercado.push('🥞'));
 console.log(supermercado);

 //pop (elimina el ultimo elemento)
 console.log(supermercado.pop());
 console.log(supermercado);

 // shift (elimina el primer elemento)
 console.log(supermercado.shift());
 console.log(supermercado);

 //unshift (agrega un elemento al principio)
 console.log(supermercado.unshift('🍕'));
 console.log(supermercado);

 //concatenar arrays

 // concat
 let supermercado2 = ['🍞','🌮','🍩','🍪']
 let supermercadoNuevo = supermercado.concat(supermercado2)
 console.log(supermercadoNuevo);

 //spread operator
 let nuevoSupermercado = [...supermercado, ...supermercado2];
 console.log(nuevoSupermercado);

 // ejercicio práctico
 function procesarPedido(pedidos) {
  // tu código aquí
  let usuario = pedidos.shift()
  pedidos.unshift('bebida')
  pedidos.push(usuario)
  return pedidos
}
let pedidosOriginal = ['cliente1','arroz con pollo', 'sopa', 'spaguetti']
pedidosOriginal[0] = 'Maria'
let pedidosProcesado = procesarPedido(pedidosOriginal)
console.log(pedidosProcesado);

//Iteración de Arrays en JavaScript
//con while
let frutas1 = ['🍎', '🍌', '🍓']
let i = 0 
while (i < frutas1.length) {
  console.log(frutas1[i]) 
  i++ 
}
// con for
let frutas2 = ['🍎', '🍐', '🍓','🍉']
for (let i = 0; i < frutas2.length; i++ ){
  console.log(frutas2[i]);
}
// con for inverso
let frutas3 = ['🍎', '🍌', '🍓']
for (let i = frutas3.length - 1; i >= 0; i--) {
  console.log(frutas3[i]) 
}

// for of
let mediosDeTransporte = ['🚗','🛩️','🚅','🚁','🚢','🚕','🚌','🚲']
for(transporte of mediosDeTransporte ){
  console.log(transporte);
}

// forEach()
mediosDeTransporte.forEach((e) => {console.log('Agarra un '+ e )});

// ejercicio practico
//metodo 1
function sumarPares(numeros) {
  let suma = 0
  // tu código aquí
  for(let i = 0; i < numeros.length; i++ ){
    if(numeros[i] % 2 == 0){
      suma += numeros[i]
    }
  }
  return suma
}
let array1 = [1,2,3,4,5,6]
console.log(sumarPares(array1));

//metodo 2
function sumarPares(numeros) {
  let suma = 0
  // tu código aquí
   for (const numero of numeros) {
    if (numero % 2 === 0) {
      suma += numero;
    }
  } 
  return suma
}
let array2 = [2,2,5,5,4]
console.log(sumarPares(array2));




