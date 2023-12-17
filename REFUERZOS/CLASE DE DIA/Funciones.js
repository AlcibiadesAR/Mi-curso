/*function conversion (pulgada){
  return pulgada * 2.54
}
console.log(conversion(10));

function http(param1){
  return "http://" + param1 + ".com"
}

console.log(http("pepito"));

function edadPerritos(param2){
  return param2 * 7
}

console.log(edadPerritos(24));

function calculadoraIMC(peso, altura){
  return peso / altura ** 2
}

console.log(calculadoraIMC(100, 1.65));

let cualEsMayor = function(num1,num2){
  if(num1 > num2 ){
    return (`El ${num1} es mayor`);
  }else if (num1  < num2){
    return (`El ${num2} es mayor`);
  } else return 'Ambos son iguales'
}

console.log(cualEsMayor(30,20));
console.log(cualEsMayor(10,20));
console.log(cualEsMayor(20,20));

let cantidadCaracteres1 = (cadena1) => `la cantidad de caracteres que tiene ${cadena1} es ${cadena1.length}`

console.log(cantidadCaracteres1('hola'));
console.log(cantidadCaracteres1('que lindo día '));


//callback
function operacionConStrings(cad1, cad2, operacion){
  return operacion(cad1, cad2);
}
function concatenacion(cad1,cad2){
  return  `${cad1} ${cad2} `;
}

function cantidadCaracteres2(cad1,cad2){
  if(cad1.length > cad2.length ){
    return `El ${cad1} es mayor`;
  }else if (cad1.length  < cad2.length){
    return `El ${cad2} es mayor`;
  } else return 'Ambos tienen la misma longitud'
}
console.log(operacionConStrings('hola', 'que lindo día ',concatenacion));
console.log(operacionConStrings('hola', 'que lindo día',cantidadCaracteres2));

//ejercitación
function totalAPagar(
  tipo_hamburguesa,
  jamon,
  queso,
  salsa_tomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  let total = 0;
  switch (tipo_hamburguesa) {
    case "carne a la parrilla":
      total = total + 1800;
      break;
    case "pollo":
      total = total + 1500;
      break;
    case "vegetariana":
      total = total + 1200;
      break;
    default:
      total = total + 5;
  }
  if (jamon) {
    total = total + 30;
  }
  if (queso) {
    total = total + 25;
  }
  if (salsa_tomate) {
    total = total + 5;
  }
  if (mayonesa) {
    total = total + 5;
  }
  if (mostaza) {
    total = total + 5;
  }
  if (tomate) {
    total = total + 15;
  }
  if (lechuga) {
    total = total + 10;
  }
  if (cebolla) {
    total = total + 10;
  }
  return total;
}

function mensaje(
  nombre,
  apellido,
  tipo_hamburguesa,
  jamon,
  queso,
  salsa_tomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla,
  calculoTotal
) {
  let resultado = calculoTotal(
    tipo_hamburguesa,
    jamon,
    queso,
    salsa_tomate,
    mayonesa,
    mostaza,
    tomate,
    lechuga,
    cebolla
  );
  return `Hola ${nombre} ${apellido} el total a pagar es ${resultado}`;
}

console.log(
  mensaje(
    "Aldair",
    "De Castro",
    "carne a la parrilla",
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    totalAPagar
  )
);*/
// for of
/*let colores = ["azul", "verde", "rojo", "celeste", "magenta"];

for (let color of colores) {
  console.log(color);
}

// for in
for (let clave in colores) {
  console.log(clave);
  console.log(colores[clave]);
}

let menu = [
  ["Café Latte", 350],
  ["Cappuccino", 400],
  ["Muffin de arándanos", 250],
  ["Sándwich de jamón y queso", 550],
];
let orden = ["Café Latte", "Muffin de arándanos", "Sándwich de jamón y queso"];
//    i       0              1                     2
//   orden   orden[0]    orden[1]             orden[2]
// Implementar una función de cálculo que reciba: el menú y el pedido del
// cliente, y devuelva el monto total a pagar.

function calculoDeMenu(almuerzo, pedido) {
  let total = 0;
  for (let producto of almuerzo) {
    if (pedido.includes(producto[0])) {
      total += producto[1];
    }
  }
  return total;
}

// Crea otra función que reciba el nombre del cliente, su pedido y el menú, un callback y
// devuelva el nombre del cliente junto con el monto total a pagar.

function nombrePago(nombre, orden, menu, calculo) {
  let montoAPagar = calculo(menu, orden); // callback
  console.log(`Hola Sr/a ${nombre}, su orden:`);
  for (let i = 0; i < orden.length; i++) {
    console.log(`${i + 1}: ${orden[i]}`);
  }
  console.log(`el monto a pagar ${montoAPagar}`);
}

nombrePago("Armando Esteban Quito", orden, menu, calculoDeMenu);*/


// desafio 2
let pedidosLunes = [["Café Latte",10], ["Cappuccino",25],["Muffin de arándanos",15],["Sándwich de jamón y queso",5]];
let pedidosMartes =[["Café Latte",15],["Cappuccino",10],["Sándwich de jamón y queso",1]];
let pedidosMiercoles =[["Café Latte",5],["Cappuccino",10],["Sándwich de jamón y queso",3]]
let pedidosJueves = [["Café Latte",8],["Cappuccino",20],["Muffin de arándanos",5],["Sándwich de jamón y queso",15]]
let pedidosViernes = [["Café Latte",12],["Cappuccino",10],["Muffin de arándanos",3],["Sándwich de jamón y queso",5]]

let menu = [
  ["Café Latte", 350],
  ["Cappuccino", 400],
  ["Muffin de arándanos", 250],
  ["Sándwich de jamón y queso", 550],
];

