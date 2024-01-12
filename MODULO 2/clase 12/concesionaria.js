/*En esta primera etapa, necesitamos requerir tu módulo autos y guardarlo en la variable autosImportados que se encuentra en la misma carpeta del archivo donde estás trabajando. Recordá que es el mismo archivo que creaste en la etapa anterior. Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita. Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.*/

const autosImportados = require ('./autos.js')
const concesionaria = {
    autos: autosImportados,

    /*Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null. Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.Te sugerimos utilizar this.autos en lugar de autosImportados. Recordá que cuando trabajamos con Arrays tenemos varios métodos para iterar sobre ellos, y uno de ellos nos sirve para buscar.*/
    buscarAuto: function (patente) {
    const autoBuscado = this.autos.find((e) => e.patente === patente)
    return autoBuscado ? autoBuscado : null
    },

    /*Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido. ¿Cómo lo resuelven? Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto, la cual ya nos devuelve el objeto literal a modificar.*/
    venderAuto: function modificar (patente) {
        const autoBuscado = this.buscarAuto(patente)
        if (autoBuscado) {
         autoBuscado.vendido = true
         return `Auto con patente ${patente} vendido`
    } else{
        return `Auto con patente ${patente} no encontrado`
    }
},

/*La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos. Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.*/

    autosParaLaVenta: function () {
    const lista = this.autos.filter(autos => autos.vendido == false )
    return lista
    },
/*María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos. ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta? Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.*/
    autosNuevos: function (){
        const autosVenta = this.autos.filter(autos => autos.km < 100 )
        return autosVenta
    },
/*El cliente le pidió saber cuánto dinero generaron las ventas. María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo". Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. ¿Te acuerdas cuál es el método de Array con el que puedes generar un nuevo Array? */
    listaDeVentas: function (){
        const listaVendida = this.autos.filter((autos) => autos.vendido)
        const listaNueva = listaVendida.map((autos) => autos.precio )
        return listaNueva
    },
/*Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!*/

    totalDeVentas: function(){
        const sumatoria = this.listaDeVentas()
        return sumatoria.reduce((acum, index)=> acum + index, 0)
    },
    
/*Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.*/

puedeComprar: function (auto, persona) {
    return ( 
        persona.capacidadDePagoTotal  >= auto.precio &&
        persona.capacidadDePagoEnCuotas  >= auto.precio/ auto.cuotas 
        );
},
/*Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

3) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.*/
autosQuePuedeComprar: function (persona) {
    return this.autosParaLaVenta().filter((auto) => this.puedeComprar(auto,persona));

}
};
console.log('buscar autos por patente');
console.log(concesionaria.buscarAuto('JJK116'));
console.log('\n');
console.log('vender autos por patente');
console.log(concesionaria.venderAuto('APL123'));
console.log('\n');
console.log('lista de autos para la venta');
console.log(concesionaria.autosParaLaVenta());
console.log('\n');
console.log('autos para la venta menor a 100 km.');
console.log(concesionaria.autosNuevos());
console.log('\n');
console.log('autos lista de ventas');
console.log(concesionaria.listaDeVentas());
console.log('\n');
console.log('total de ventas');
console.log(concesionaria.totalDeVentas());
console.log('\n');
let persona1 = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false
    }
console.log('autos que puede comprar');
console.log(concesionaria.autosQuePuedeComprar(persona1));


 