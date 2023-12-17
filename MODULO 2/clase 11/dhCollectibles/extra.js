//Crear un array de números y asignarle un total de diez (10) valores numéricos.
let number = [1,2,3,4,5,6,7,8,9,10];

/*Crear variables que contengan los valores numéricos dispuestos en el array en la
posición (0, 2 y 4)  Utilizo:"Destructuring"*/
let [position0, x , position2, y , position4, ...restOfArray] = number;

console.log('valor en la posición 0: ',position0);
console.log('valor en la posición 2: ',position2);
console.log('valor en la posición 4: ',position4);

/*con el resto de los valores numéricos crear un nuevo array. Utilizo: "Spread operator."*/
let newArray = [x,y,...restOfArray];
console.log(newArray);

/*Haciendo uso de la desestructuración, Crear un objeto literal para almacenar los datos de nuestra mascota, considerando
los atributos:
a. nombre
b. tipo de mascota (Perro - Gato)
c. color
d. raza
y al final mostrar al usuario:
Hola les presento a mi mascota su nombre es: Bony, es un hermoso Perro, de
color: Dorado y su raza es: Golden retriever.*/

let mascota = {
    Nombre: "Thayson",
    Tipo: "Perro",
    Color: "Negro",
    Raza: "Mixta"
};

let { Nombre, Tipo, Color, Raza} = mascota
console.log(`Hola les presento a mi mascota su nombre es: ${Nombre}, es un hermoso ${Tipo}, de color: ${Color} y su raza es: ${Raza}.`);