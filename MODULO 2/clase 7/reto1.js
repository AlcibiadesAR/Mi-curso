let operacionesBancarias = [2000, -5000, 3000, -10000, 70000];

function calcularSaldos(operaciones) {
  let saldoDepositos = 0;
  let saldoRetiros = 0;
  
  for (let i = 0; i < operaciones.length; i++) {
    if (operaciones[i] > 0) {
      saldoDepositos += operaciones[i];
    } else {
      saldoRetiros -= operaciones[i]; 
    }
  }
  
  let saldoActual = saldoDepositos - saldoRetiros;
  
  return {
    saldoDepositos,
    saldoRetiros,
    saldoActual
  };
}

function obtenerInformacion(nombre, apellido, operaciones) {
  const saldos = calcularSaldos(operaciones);
  
  return ` 
Estimado ${nombre} ${apellido}:
El monto total de los depósitos es de: $${saldos.saldoDepositos}.
El monto total de los retiros es de: $${saldos.saldoRetiros}.
Por lo tanto, su saldo actual en la cuenta es de: $${saldos.saldoActual}.`;
}

const nombre = "Alcibiades";
const apellido = "Acosta";
const informacionCliente = obtenerInformacion(nombre, apellido, operacionesBancarias);

console.log(informacionCliente);


