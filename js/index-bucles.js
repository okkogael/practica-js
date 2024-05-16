// Ejercicio 1

for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}

for (let i = 0; i < 10; i++) {
    console.log("La variable i tiene el valor, ", i);
}

for (let i = 1; i <= 10; i++) {
    console.log("Multiplo", i, "de 2:", i * 2);
}

// Para que i varie de 2 en 2, cambiaria la i a i += 2, de lo contrario i++ varia como i = i + 1.
for (let i = 1; i <= 50; i++) {
    console.log("Multiplos", i, "de 5:", i * 5);
}

// Para que i varie de 5 en 5, cambiaria la i a i += 5, de lo contrario i++ varia como i = i + 1.
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// Ejercicio 2
let base = 5;
console.log("Se eligio la base", base, "para la tabla del", base)
let tabla_armada = [];

for (let i = 1; i <= 10; i++) {
    tabla_armada.push(base * i);
}

console.log(tabla_armada);

// Ejercicio 3
// Lo defini como operaciones teniendo en cuenta como si fuera la "caja" de una empresa.
let operaciones = [100, -50, 75, -30, 120, -80, 60, -90, 110, -40];
let suma = 0; // Definimos la suma afuera, porque si lo hacemos adentro explota todo y nuestro jefe de IT nos echa :)
for (let i = 0; i < operaciones.length; i++) {
    suma += operaciones[i];
}

console.log("La suma total de ganancias es:", suma);

// Ejercicio 4
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
]

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(i+1, healingIsDifficult[i]); // Usamos i+1 para dar el orden numerico real, de lo contrario diria la posicion del array.
}

// Ejercicio 5
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
    ]
    
    for (let i = 0; i < got.length; i++) {
        let persona = got[i];
        let nombre = persona.nombre;
        let apellido = persona.apellido;
        let ciudad = persona.ciudad || "desconocida"; // EXTRA COPADO! Si no hay ciudad, como en el caso de Daenerys, indicamos || "desconocida", para que setee un valor y que no figure como undefined. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
    
        console.log("Hola", nombre, apellido, "criatura viajera!")
        console.log("Soy", nombre, apellido, "de la ciudad", ciudad, ".")
    }