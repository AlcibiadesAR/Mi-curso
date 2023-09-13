// mi diagrama de PSeint

/*Algoritmo Sueldo_trabajador
	Escribir "Ingresar nombre y apellido"
	Leer nombre,apellido
	Escribir "Ingresar sueldo"
	Leer sueldo
	Si sueldo<33.000 Entonces
		Aumento = sueldo * .15
	SiNo
		Aumento = sueldo * .2
	FinSi
	Escribir "Su nuevo sueldo es: $",sueldo + aumento
	Escribir "El aumento es de: $",aumento
FinAlgoritmo*/

// transformado a JavaScript

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sueldo_trabajador() {
    var apellido, nombre, sueldo;
    
    rl.question("Ingresar nombre y apellido: ", (nombreApellido) => {
        [nombre, apellido] = nombreApellido.split(' ');

        rl.question("Ingresar sueldo: ", (sueldoStr) => {
            sueldo = Number(sueldoStr);
            
            let aumento = (sueldo < 33000) ? sueldo * 0.15 : sueldo * 0.2;
            
            console.log("Su nuevo sueldo es: $" + (sueldo + aumento));
            console.log("El aumento es de: $" + aumento);
            
            rl.close();
        });
    });
}

sueldo_trabajador();


	