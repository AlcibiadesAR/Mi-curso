function conversion (pulgada){
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

//array
