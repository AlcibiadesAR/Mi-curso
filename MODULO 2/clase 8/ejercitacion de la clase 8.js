function reporteDePasajeros(reporte){
    const estaciones = 5;  // Cambia este valor según la cantidad de estaciones
    
    for (let i = 1; i <= estaciones; i++) {
      if (i == 5) {
        reporte[i] = reporte[i-1] + 120 - 80; // Estación 5
      } else {
        reporte[i] = reporte[i-1] + 50 - 30;
      }
      reporte.push(`En la estación ${i} hay ${reporte} pasajeros arriba del tren`);
    }
    return reporte
    }

    
    let numero = [200]
    let numero1 = reporteDePasajeros(numero)
    let nuevo = []
    for (let j = 0; j <= 5; j++){
        nuevo.push(`En la estación ${j} hay ${[numero1[j]]} pasajeros arriba del tren`);
    }
    console.log(nuevo);

