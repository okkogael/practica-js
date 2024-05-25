// Ejercicio 2 A
var nombre = prompt("Por favor, ingresa tu nombre:");
//B)
var edad = prompt("Hola " + nombre + ", por favor, ingresa tu edad:");
//C)
var fanDeportes = confirm("Hola " + nombre + ", ¿te gustan los deportes?");
//D)
console.log("¡Hola, " + nombre + "! Tenes " + edad + " años.");
//E)
alert("Muchas gracias " + nombre + " por responder nuestras preguntas.");
//F)
var usuario = {
        nombre: nombre,
        edad: edad,
        fanDeportes: fanDeportes,

        deportistaProfesional: function() {
            if (this.fanDeportes) {
                return "Sí, soy fan de los deportes";
            } else {
                return "No soy tan fan aún de los deportes";
            }
}
};

console.log(usuario.deportistaProfesional());

// Ejercicio 3 - Funciones
var num1 = parseFloat(prompt("Por favor, ingresa un número:"));
var num2 = parseFloat(prompt("Ahora ingresa otro número:"));

function multiplicar(num1, num2) {
    var resultado = num1 * num2;
    return "El resultado de multiplicar " + num1 + " y " + num2 + " es: " + resultado;
}

console.log(multiplicar(num1, num2));

//Ejercicio 4 - Filosofo Hipster
var nacionalidad = prompt("Por favor, ingresa tu nacionalidad:");
var profesion = prompt("Ahora ingresa tu profesión:");
var kmsRecorridos = parseFloat(prompt("Finalmente, ingresa cuántos kilómetros caminas por día:"));

function filosofoHipster(nacionalidad, profesion, kmsRecorridos) {
    if (nacionalidad.toLowerCase() === "argentino" && profesion.toLowerCase() === "músico" && kmsRecorridos > 2) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }
}

console.log(filosofoHipster(nacionalidad, profesion, kmsRecorridos));