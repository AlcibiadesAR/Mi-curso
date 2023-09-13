const GraduadosDeHTML5 = "30 45 25 34 18 23 16 50 72 70";
const GraduadosDeCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
const GraduadosDeJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
const GraduadosDeNODEJS = "45 56 73 34 65 72 70 32";

const arraysDeGraduados = [
  GraduadosDeHTML5.split(" ").map(Number),
  GraduadosDeCSS3.split(" ").map(Number),
  GraduadosDeJAVASCRIPT.split(" ").map(Number),
  GraduadosDeNODEJS.split(" ").map(Number)
];

function promedioGraduados(curso, graduados) {
  const cursoIndex = curso - 1;
  if (cursoIndex < 0 || cursoIndex >= graduados.length) {
    return "El valor del curso debe estar entre 1 y 4.\n1 = HTML5\n2 = CSS3\n3 = JAVASCRIPT\n4 = NODEJS";
  }
  
  const promedio = graduados[cursoIndex].reduce((total, porcentaje) => total + porcentaje, 0) / graduados[cursoIndex].length;
  return `El promedio de graduados en el curso ${curso} es ${promedio.toFixed(2)}%.`;
}

const cursoSeleccionado = 2; 
console.log(promedioGraduados(cursoSeleccionado, arraysDeGraduados));