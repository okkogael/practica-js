// Ejercicio 1 - Entrando en calor

var miNombre = "TuNombre";
localStorage.setItem('userName', miNombre);

console.log(localStorage);

var recuperoStorage = localStorage.getItem('userName');
console.log(recuperoStorage);

localStorage.clear();

// Ejercicio 2 - Combinando con manejo de arrays

var peliculasFavoritas = ["Pelicula1", "Pelicula2", "Pelicula3"];

localStorage.setItem('peliculaFavorita', peliculasFavoritas[1]);

console.log(localStorage);

var recuperoStorage = localStorage.getItem('peliculaFavorita');
console.log(recuperoStorage);

localStorage.clear();

// Ejercicio 3 - Guardar un array en localStorage en formato JSON

var peliculasJson = JSON.stringify(peliculasFavoritas); //Lo convertimos a JSON. (Respondiendo a la pregunta, es el  tipo de dato que permite guardar Webstorage)

localStorage.setItem('favoritos', peliculasJson);

console.log(localStorage);

// Ejercicio 4 - Agregar un nuevo dato a un array guardado en localStorage

var recuperoStorage = localStorage.getItem('favoritos');
var arrayRecuperado = JSON.parse(recuperoStorage);

arrayRecuperado.push("Nueva Película");

var nuevoJson = JSON.stringify(arrayRecuperado);

localStorage.setItem('favoritos', nuevoJson);

console.log(localStorage);

// Ejercicio 5 - Casi un ninja

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = [];

for (let i = 0; i < got.length; i++) {
    if (got[i].ciudad === "Winterfell") {
        winterIsComing.push(got[i]);
    }
}

let winterIsComingJson = JSON.stringify(winterIsComing);

localStorage.setItem('winterfell', winterIsComingJson);

console.log(localStorage);

// Fin de la Magia.