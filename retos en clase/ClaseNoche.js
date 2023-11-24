/*Desafío: Crear un programa que en función a un nombre de un empleado y su respectivo sueldo
podamos verificar lo siguiente: Si sueldo del empeleado es menor o igual a 25000 entonces se le concederá un aumento del 40%
en el caso contrario debes aumentarle un 15% AL final debes mostrar: 
Usted Nombre y el apellido en base a su sueldo actual, recibio un aumento del  aumento% y su
nuevo sueldo es de mostrar nuevo sueldo  
*/// Función para calcular el aumento del sueldo

//un arrow function que se encarga de determinar el porcentaje de aumento según el sueldo
const calcularAumentoSueldo = (nombre, sueldo) => { const aumentoPorcentaje = sueldo <= 25000 ? 40 : 15;
    //Calcula el monto del aumento y Calcula el nuevo sueldo después del aumento
    const aumento = (sueldo * aumentoPorcentaje) / 100;
    const nuevoSueldo = sueldo + aumento;
    // Imprimir el resultado
    console.log(`Usted ${nombre}, recibió un aumento del ${aumentoPorcentaje}%.`);
    console.log(`Su nuevo sueldo es de ${nuevoSueldo}.`);
}
// Datos del trabajador
const nombreDelTrabajador = "Juan Pérez";
const sueldoDelTrabajador = 24000;

//llamar a la función
calcularAumentoSueldo(nombreDelTrabajador, sueldoDelTrabajador);

//forma 1
let MiTexto = (texto) => {
    return {
      mayusculas: texto.toUpperCase(),
      longitud: texto.length
    };
  };
  
  console.log(MiTexto("Programar"));

//forma 2
const ElTexto = (texto) =>{ return (texto.toUpperCase() + ' ' + (texto.length))}
console.log(ElTexto("Panama"));
  
function obtenerFechaEnPalabras() {
    // Arrays de días y meses
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
    // Obtener la fecha actual
    const fechaActual = new Date();
  
    // Obtener el día, el mes y el año
    const dia = fechaActual.getDay();
    const mes = fechaActual.getMonth();
    const año = fechaActual.getFullYear();
  
    // Obtener el nombre del día
    const nombreDia = dias[dia];
  
    // Obtener el nombre del mes
    const nombreMes = meses[mes];
  
    // Construir la cadena de resultado
    const resultado = `Hoy es ${nombreDia} ${fechaActual.getDate()} de ${nombreMes} del año ${año}`;
  
    return resultado;
  }
  
  const fechaEnPalabras = obtenerFechaEnPalabras();
  console.log(fechaEnPalabras);

  function obtenerFechaEnPalabras() {
    const fechaActual = new Date();
    
    // Obtener la fecha en el formato local
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  
    // Construir la cadena de resultado
    const resultado = `Hoy es ${fechaFormateada}`;
  
    return resultado;
  }
  
  const fechaEnPalabras1 = obtenerFechaEnPalabras();
  console.log(fechaEnPalabras1);
  
  