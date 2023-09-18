let tipoDeVehiculo = "camioneta";
let precio = { compacto: 14000, mediano: 17000, camioneta: 28000 };
let diasDeAlquiler = 5;
let sillaParaBebe = 1200;
function alquilerDeUnVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaParaBebeDeseada) {
    let costoVehiculo = precio[tipoDeVehiculo];
    let costoSilla = sillaParaBebeDeseada ? sillaParaBebe : 0;
    let montoTotal = costoVehiculo * diasDeAlquiler + costoSilla;
    console.log(`Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasDeAlquiler} días utilizados.${sillaParaBebeDeseada ? ` Además, se incluye el costo de las sillas para bebé que solicitó, que es de $${sillaParaBebe}.` : ''} El monto total a pagar es de $${montoTotal}.`);
}
alquilerDeUnVehiculo(tipoDeVehiculo, diasDeAlquiler, true);





