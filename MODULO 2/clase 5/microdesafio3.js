// uso de toUppercase
let convertirMayuscula = (texto) => texto.toUpperCase()
let textoEnMayuscula = convertirMayuscula("panamá");
console.log(textoEnMayuscula);

// uso de typeof
let identificarTipoDato = (dato) => typeof dato;
console.log("El tipo de dato es" +" "+identificarTipoDato(8))

// calculo de la edad de perros
let calcularEdadDePerros = (edadHumana) => edadHumana * 7;
console.log("La edad del perro es de"+" "+calcularEdadDePerros(24)+" años")

// calculo del valor de una hora de trabajo
let calcularValorDeUnaHoraDeTrabajo = (salarioMensual, DíasTrabajados, HorasPorDía) => {
    let salarioAnual = salarioMensual * 12;
    let salarioPorHora = salarioAnual / (DíasTrabajados * HorasPorDía)
    return salarioPorHora
}
console.log("El valor de una hora de trabajo es de: $"+ calcularValorDeUnaHoraDeTrabajo(600, 30, 8).toFixed(2));

