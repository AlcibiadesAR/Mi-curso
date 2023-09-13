const cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JAVASCRIPT", 10000],
    ["REACT", 7000],
    ["NODEJS", 15000]
  ];
  
  function calcularMontoTotal(cursosDisponibles, cursosDeseados) {
    let total = 0;
  
    for (const cursoDeseado of cursosDeseados) {
      const cursoEnMayusculas = cursoDeseado.toUpperCase();
  
      for (const curso of cursosDisponibles) {
        if (curso[0] === cursoEnMayusculas) {
          total += curso[1];
          break;
        }
      }
    }
  
    return total;
  }
  
  function obtenerMontoTotal(nombre, apellido, cursosDisponibles, cursosDeseados) {
    const montoTotal = calcularMontoTotal(cursosDisponibles, cursosDeseados);
    const cursosNumerados = cursosDeseados.map((curso, i) => `${i + 1}. ${curso}`);
    
    return `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:\n${cursosNumerados.join("\n")}\nEl monto total a pagar es de: $${montoTotal}.`;
  }
  
  let cursosAlumno = ["HTML5", "CSS3", "JAVASCRIPT"];
  let nombreAlumno = "Alcibiades";
  let apellidoAlumno = "Acosta";
  
  let resultado = obtenerMontoTotal(nombreAlumno, apellidoAlumno, cursos, cursosAlumno);
  console.log(resultado);
  console.log("Bienvenido a la gran aventura Digital House.");
  
