document.addEventListener('DOMContentLoaded', function() {
const pregunta = "¿Qué día es hoy?";
const respuestaElemento = document.querySelector('.respuesta');

function obtenerRespuesta(dia) {
dia = dia.toLowerCase(); //Convertimos el dato a minuscula para que se compare con "domingo" en minuscula.

if (dia === "domingo") {
        return "¡Pongamos la olla, hoy se comen pastas!";
} else {
        return "Mejor lo dejamos para el domingo.";
}
}

const diaUsuario = prompt(pregunta);
respuestaElemento.textContent = obtenerRespuesta(diaUsuario);
});