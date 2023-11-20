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
