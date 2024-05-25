// A)
var nombreUsuario = prompt("Por favor, ingresa tu nombre:"); // C) Pero lo movi antes.

document.querySelector("h1").innerText = "Bienvenido " + nombreUsuario; // D)

//B)
var confirmacion = confirm("Hola " + nombreUsuario + ", ¿estás seguro de querer avanzar?");

if (confirmacion) {
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita";
} else {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita";
    throw new Error("Esto no es un error de ejecucion, el usuario no decidio avanzar.");
}

//E)
var edadUsuario = parseInt(prompt("¿Cuántos años tenés?"));

if (edadUsuario > 17) {
    document.querySelector("h1").innerText = "Bienvenido " + nombreUsuario;
} else {
    document.querySelector(".container-general").style.display = "none";
    document.getElementById("accesoDenegado").style.display = "block";
}

//F)
var gustaProgramacion = confirm("¿Te gusta la programación?");
var backgroundDiv = document.querySelector(".background-img");

if (gustaProgramacion) {
    backgroundDiv.style.backgroundImage = "url('img/programmer.jpeg')";
} else {
    backgroundDiv.style.backgroundImage = "url('img/gatito.jpeg')";
}

//G)
var nuevaImagenURL = prompt("Por favor, ingresa la URL de la nueva imagen:");
var avatarImg = document.querySelector("img.avatar");

avatarImg.src = nuevaImagenURL;

//H)
var pelicula = {
    nombre: "",
    director: "",
    duracion: 0,
    actor: ""
};

//I)
pelicula.nombre = prompt("Por favor, ingresa el nombre de tu película favorita:");
pelicula.director = prompt("Por favor, ingresa el nombre del director de la película:");
pelicula.duracion = parseFloat(prompt("Por favor, ingresa la duración de la película en horas:")); // Usamos parseFloat por si quiere indicar 1.5 Horas
pelicula.actor = prompt("Por favor, ingresa el nombre del actor principal de la película:");

var listaItems = document.getElementById("pelicula").querySelectorAll("li");


//J)
listaItems[0].textContent = "Nombre: " + pelicula.nombre;
listaItems[1].textContent = "Director: " + pelicula.director;
listaItems[2].textContent = "Duración: " + pelicula.duracion + " minutos";
listaItems[3].textContent = "Actor principal: " + pelicula.actor;

document.getElementById("pelicula").style.display = "block"; //K)
