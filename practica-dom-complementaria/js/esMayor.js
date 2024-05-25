document.addEventListener('DOMContentLoaded', function() {
const pregunta = "Ingrese un número:";
const respuestaElemento = document.querySelector('.respuesta');

const numero1 = parseFloat(prompt(pregunta)); //Utilizamos Float para mas precision.
const numero2 = parseFloat(prompt("Ingrese otro número:"));

function determinarNumeroMayor(num1, num2) {
if (isNaN(num1) || isNaN(num2)) {
        return "Por favor, ingrese números válidos.";
} else if (num1 > num2) {
        return `${num1} es el número mayor.`;
} else if (num2 > num1) {
        return `${num2} es el número mayor.`;
} else {
        return "Los números son iguales.";
}
}

respuestaElemento.textContent = determinarNumeroMayor(numero1, numero2);
});