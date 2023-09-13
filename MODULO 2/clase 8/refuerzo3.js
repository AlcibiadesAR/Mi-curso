// paso 1
function encontrarElNumero(array, num) {
    let indice = array.indexOf(num);
    if (indice !== -1){
        return `El número ${num} sí existe en el array.`
    } else {
        return "El valor solicitado no existe."
    }
}

let miArray = [2,4,6,8,9,10,12,14,16,18,20];
let resultado = encontrarElNumero(miArray,20 )
console.log(resultado);

// paso 2
function juegoDeTrompito(acciones, vueltas) {
    if (vueltas < 2 || vueltas > 6) {
      return "La cantidad de vueltas debe estar entre 2 y 6.";
    }
  
    const resultadoAleatorio = Math.floor(Math.random() * 6);
    const accionSeleccionada = acciones[resultadoAleatorio];
  
    return accionSeleccionada;
  }
  
  const accionesTrompito = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
  const cantidadVueltas = 4; 
  
  const resultadoJuego = juegoDeTrompito(accionesTrompito, cantidadVueltas);
  console.log("Resultado:", resultadoJuego);
  
  //paso 3
  function sumarParesImpares(arrayNumeros) {
    let sumaPares = 0;
    let sumaImpares = 0;
  
    for (let i = 0; i < arrayNumeros.length; i++) {
      if (arrayNumeros[i] % 2 === 0) {
        sumaPares += arrayNumeros[i];
      } else {
        sumaImpares += arrayNumeros[i];
      }
    }
  
    return { pares: sumaPares, impares: sumaImpares };
  }
  
  const numeros = [2, 5, 8, 13, 6, 7, 10, 11, 4, 9]; 
  
  const resultadoSuma = sumarParesImpares(numeros);
  console.log("Suma de pares:", resultadoSuma.pares);
  console.log("Suma de impares:", resultadoSuma.impares);