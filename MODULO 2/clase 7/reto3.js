// Paso 1
function mostrarSiguientesNumeros(numero) {
    console.log(`Los 10 números siguientes a ${numero} son:`);
    
    for (let i = numero + 1; i <= numero + 10; i++) {
      console.log(i);
    }
  }
  const numeroEjemplo = 5;
  mostrarSiguientesNumeros(numeroEjemplo);
  console.log("\n")

  // paso 2
let i = 0;
console.log("Estos son los numeros de 3 en 3 del 1 al 57 : ")
for (let i = 0; i <= 57; i = i + 3) {
    console.log(i)
}

console.log("\n")

// paso 3
let sumatoria = 0;

for (let i = 0; i <= 100; i++) {
  sumatoria += i;
}

console.log(`La sumatoria de los números entre 0 y 100 es: ${sumatoria}`);

console.log("\n")

// paso 4
let cadenaDeTexto = texto => texto.toUpperCase();

let convertirMayuscula = cadenaDeTexto("practicando el uso de los ciclos o bucles")

console.log(convertirMayuscula)
console.log("\n")

// paso 5
function contarNumeroPares(array) {
    let total = 0;
    for (i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            total++
        }
    }
    return total;
}

console.log(contarNumeroPares([2,3,5,4,8,7,9,10,6,1]));