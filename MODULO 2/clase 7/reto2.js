let tablaDeMultiplicar = (numero) => {
    let i = 1;
    let resultado = 0;

    for (let i = 1; i <= 10; i++){
        resultado = numero * i;
        console.log(numero +" "+ "*" +" "+ i +" "+ "=" +" "+ resultado)
        
    } 
}
let j = 1;
while ( j <= 10){ 
    console.log("\n"+ "Tabla de multiplicar del" +" "+ j + "\n");
    console.log("--------------------------")
    tablaDeMultiplicar(j)
    j++
}
