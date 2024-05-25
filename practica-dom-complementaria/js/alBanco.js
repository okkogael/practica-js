document.addEventListener('DOMContentLoaded', function() {
        const preguntaDia = "Ingrese un día de la semana (en minúsculas):";
        const preguntaHora = "Ingrese la hora actual (formato 24 horas, ej. 10:30):";
        const respuestaElemento = document.querySelector('.respuesta');

        const diaSemana = prompt(preguntaDia);
        const horaActual = prompt(preguntaHora);

        function verificarHorarioBanco(dia, hora) {
        const horaNumero = parseInt(hora.split(":")[0]); //La expresion hora.split(":") divide la cadena de texto hora en un array de substrings, utilizando ":" como separador.


        dia = dia.toLowerCase();

        if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes") {
        if (horaNumero >= 10 && horaNumero < 15) {
                return "¡Bien! Todavía estamos a tiempo de llegar.";
        }
        }

        return "Uf… No llegamos.";
        }

        respuestaElemento.textContent = verificarHorarioBanco(diaSemana, horaActual);
});