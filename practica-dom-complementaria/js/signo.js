document.addEventListener('DOMContentLoaded', function() {
const pregunta = "Ingrese un número:";
const respuestaElemento = document.querySelector('.respuesta');

const numero = parseFloat(prompt(pregunta));

function determinarSigno(num) {
if (isNaN(num)) {
        return "Por favor, ingrese un número válido.";
} else if (num > 0) {
        return `El número ${num} es positivo.`;
} else if (num === 0) {
        return `El número ${num} es cero.`;
} else {
        return `El número ${num} es negativo.`;
}
}


respuestaElemento.textContent = determinarSigno(numero);
});