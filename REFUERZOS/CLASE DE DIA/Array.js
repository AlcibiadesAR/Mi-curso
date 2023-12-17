// metodos de array

// MAP

let notas = [10, 4, 5, 8, 9, 2, 7];

// let nuevoNotas = notas.map(function (item) {
//   return item * 2;
// });

// function doble(item) {
//   return item * 2;
// }

// let nuevoNotas = notas.map(doble);

let nuevoNotas = notas.map((item) => item + 5);

// console.log(nuevoNotas);

// FILTER

// let aprobados = notas.filter(function (item) {
//   return item >= 7;
// });
let desaprobados = notas.filter(function (item) {
  return item < 7;
});

let aprobados = notas.filter((item) => item >= 7);

console.log(aprobados);
console.log(desaprobados);

// REDUCE - devuelve un unico resultado

let suma = notas.reduce(function (acum, item) {
  return acum + item;
}, 0);

console.log(suma);

let multiplicacion = notas.reduce((acum, item) => acum * item, 1);

console.log(multiplicacion);

// FOR EACH

notas.forEach(function (item) {
  console.log(item);
});

let notasAlumnos = [
  {
    nombre: "Ana",
    nota: 10,
  },
  {
    nombre: "Julian",
    nota: 4,
  },
  {
    nombre: "Mateo",
    nota: 9,
  },
  {
    nombre: "Luciana",
    nota: 6,
  },
  {
    nombre: "Cecilia",
    nota: 7,
  },
];

let totalNotas = notasAlumnos.reduce(function (acum, item) {
  return acum + item.nota;
}, 0);

console.log(totalNotas);

// destructuring
// en Arrays

// let superheroes = [
//   "Spider-man",
//   "Aquaman",
//   "Mujer Maravilla",
//   "Invencible",
//   "Nightwing",
// ];

//  let super1 = superheroes[1];

// console.log(super1);

// let [, super1] = superheroes;

// console.log(super1);

// objetos

// let superheroe1 = {
//   nombre: "Spider-man",
//   nombreReal: "Peter Parker",
//   edad: 30,
//   poderes: ["lanzar telara単as", "sensor peligro"],
// };

// let nombreSuper = superheroe1.nombre;
// console.log(nombreSuper);

// let { nombre } = superheroe1;
// let { nombreReal } = superheroe1;
// let { poderes } = superheroe1;

// let { nombre, nombreReal, poderes } = superheroe1;

let listadoSuper = [
  {
    nombre: "Spider-man",
    nombreReal: "Peter Parker",
    edad: 30,
    poderes: ["lanzar telara単as", "sensor peligro"],
  },
  {
    nombre: "Spider-man2",
    nombreReal: "Peter Parker2",
    edad: 30,
    poderes: ["lanzar telara単as", "sensor peligro"],
  },
];

let [, { nombre }] = listadoSuper;

console.log(nombre);

// console.log(nombre, nombreReal, poderes);

let superheroes = [
  "Spider-man",
  "Aquaman",
  "Mujer Maravilla",
  "Invencible",
  "Nightwing",
];

let villanos = ["Dr Octopus", "Deathstroke", "Joker", "Thanos"];

let personajesComics = [...superheroes, "It", ...villanos];

console.log(personajesComics);

// objetos
let publicaciones = {
  tipo: "Comic",
  numeroEdicion: 61,
  editorial: "Marvel",
};

let superheroe1 = {
  ...publicaciones,
  nombre: "Spider-man",
  nombreReal: "Peter Parker",
  edad: 30,
  poderes: ["lanzar telara単as", "sensor peligro"],
};

console.log(superheroe1);

function obtener(...parametros) {
  console.log(parametros);
}

obtener(2);
obtener(2, "tres");
obtener(2, "tres", false);  