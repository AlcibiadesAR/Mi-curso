let operador = " ";
let numero1 = " ";
let numero2 = " ";


switch (operador) {
    case "sumar":
    console.log("El resultado de sumar " + numero1 + " + " + numero2 +  " es: " + (numero1 + numero2));
    break;

    case "restar":
    console.log("El resultado de restar " + numero1 + " - " + numero2 +  " es: "+ (numero1 - numero2));
    break;
    
    case "multiplicar":
    console.log("El resultado de multiplicar " + numero1 + " * " + numero2 + " es: " + (numero1 * numero2));
    break;

    case "Dividir":
    console.log("El resultado de dividir " + numero1 + " / " + numero2 + " es: " +(numero1 / numero2));
    break;

    default:
    console.log("Las operaciones aceptadas son: sumar - restar- multiplicar - dividir");
}
