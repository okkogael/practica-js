document.addEventListener('DOMContentLoaded', function() {
    const pregunta = "¿Querés aplicar dark mode en el sitio?";
    const respuestaElemento = document.querySelector('.respuesta');

    const confirmacion = confirm(pregunta);

    if (confirmacion) {
        document.body.style.backgroundColor = "#444";
        document.body.style.color = "#fff";
        respuestaElemento.textContent = "Dark Mode activado";
    } else {
        respuestaElemento.textContent = "Ok. Lo activo en otro momento.";
    }
});