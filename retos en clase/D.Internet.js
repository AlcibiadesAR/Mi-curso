/*for(let i = 1; i <= 100; i++){
    if((i % 3)=== 0){
        console.log("fizz");
       } else if ((i % 5) === 0) {
            console.log("buzz");
        }
        else {
        console.log("fizzbuzz");
        }
    }


/*let sumaDeCadenaDeTexto = (texto) => texto.length
console.log(sumaDeCadenaDeTexto("Panama es bonito"))*/

/*(() => console.log("Panama es bonito".length))();

/*let recortar = (texto) => texto.slice(0,-6) 
console.log(recortar("Hola mundo"));*/

/*(() => console.log("hola mundo".slice(0,4)))();

function recortarFrase(frase, numero){
   return typeof frase !== "string"
    ? ("hubo un error")
    : (frase.slice(0,numero));
}

 console.log(recortarFrase("Hola Mundo",4));

const recortar2 = (frase, numero) => typeof frase !== "string"? ("hubo un error"): (frase.slice(0,numero));
console.log(recortar2("Hola World", 4)); 


let string = (texto, caracter) => texto.split(caracter)
try {
        console.log(string("Hola que tal", " "));
} catch (error) {
    console.error("Error en la devolucion de string a array")
}

(() => console.log("Hola que tal".split("a")))();



function invierta(texto){
    let newtexto = texto.split("")
    let invertir = newtexto.reverse();
    let unirTexto = invertir.join("");
    let repeticion = unirTexto.repeat(5)
    return repeticion
}

console.log(invierta("Hola Mundo "));

const invierta1 = (texto1) => { return texto1.split("").reverse().join("").repeat(5) }
console.log(invierta1("Hola Mundo \n"));*/
   
const conversora = (numero, grado) => { 
    let resultado = 0;
    if (grado === "C°" ){
        resultado = (numero * (9/5)) + 32
        resultado += " F°" 
    } else if (grado === "F°") {
        resultado = (numero - 32) * 5/9
        resultado += " C°"
    }
    return resultado
}

console.log(conversora(0, "C°"));


let aumentos = [10,20,30];

for (aumento of aumentos){
    console.log(aumento + 2);
}

function clave(texto){
    let texto1 = texto.filter(x => x !== "*")
    let texto2 = texto1.reverse().join("");;
    return texto2
};

console.log(clave(["a","*","l","*","o","*","h"]));


function noParesDeContarImparesHasta(numero){
    let contarImpares = 0;
    for(let i = 0; i <= numero; i++) {
        if((i % 2) !== 0) {
        contarImpares = contarImpares + 1
        }
    }
    return contarImpares
}

console.log(noParesDeContarImparesHasta(20))

const impar = (numero) => { let contarImpares = 0; for (let i = 0; i <= numero; i++) {
        if ((i % 2) !== 0) { contarImpares = contarImpares + 1}
    }
        return contarImpares
    }
        console.log(impar(20));


function contarNumeros(numero){
    if((numero % 2) === 0){
        console.log("contar numero pares: ");
        for (i = 2 ; i <= numero ; i+= 2){
            console.log(i)
        }
    } else{
        console.log("contar numero impares: ");
        for(i = 1; i <= numero; i+= 2){
            console.log(i);
        }
    }
}

contarNumeros(8)
contarNumeros(7)

const determinarNumero = (numero) => { 
    let resultado = numero > 0 ? `El número ${numero} es positivo` : `El número ${numero} es negativo`;
  return resultado;
}
console.log(determinarNumero(9));
