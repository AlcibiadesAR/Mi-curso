let pagoMes = 35;
let consumoKWH = 400;
let calculoAumento = (pagoMes * 0.20)+pagoMes;
let pagoDeLuz = consumoKWH > 300 ? calculoAumento : pagoMes;

console.log("Debido a que su hogar tuvo un consumo de, " + consumoKWH + "KWH en base al ajuste tarifario hogares con consumo mayor a 300KWH por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de: $"+ pagoDeLuz);



  


