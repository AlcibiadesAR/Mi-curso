let calcularTotalHamburguesa = (tipoHamburguesa, ingredientes) => { 
    const preciosBase = {
        "Carne a la parrilla": 1800, "Pollo": 1500, "Vegetariana": 1200
    };
    const preciosAdicionales = {
        "Jamón": 30, "Queso": 25, "Salsa de tomate": 5, "Mayonesa": 5, "Mostaza": 5, "Tomate": 15, "Lechuga": 10, "Cebolla": 10
    };
    let total = preciosBase[tipoHamburguesa];

    for (const ingrediente in ingredientes)
        if (ingredientes[ingrediente]) total += preciosAdicionales[ingrediente];
    
    return total;
}

let mensajeTotalAPagar = (nombre, apellido, tipoHamburguesa, ingredientes) => {
    const totalAPagar = calcularTotalHamburguesa(tipoHamburguesa, ingredientes);
    console.log(`Estimado ${nombre} ${apellido}, el total a pagar es $${totalAPagar}`);
}
mensajeTotalAPagar("Alcibiades", "Acosta", "Pollo", {
    "Jamón": true, "Queso": true, "Salsa de tomate": true, "Mayonesa": true, "Mostaza": false, "Tomate": true, "Lechuga": true, "Cebolla": false
});
 