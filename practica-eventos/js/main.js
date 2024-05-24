// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    let nombre;
    let saludo = document.querySelector('#saludo');
    let spanBienvenida = document.querySelector('.bienvenida span');

    let seccionBienvenida = document.querySelector('.bienvenida');
    let seccionPersonajes = document.querySelector('.personajes');
 
    document.getElementById('titulo').addEventListener('mouseover', function() {
        nombre = prompt("¿CÓMO TE LLAMÁS?");
        console.log("Nombre ingresado:", nombre);
        if (nombre && nombre.trim() !== "") {
            saludo.textContent = ("¡BIENVENID@ " + nombre.toUpperCase() + "!")
            titulo.style.display = 'none';
            spanBienvenida.style.display = 'inline';
        }
        else {
            saludo.textContent = ("¡BIENVENID@ ANONIMO!")
            titulo.style.display = 'none';
            spanBienvenida.style.display = 'inline';    
        }
    });

    spanBienvenida.addEventListener('click', function() {
        seccionBienvenida.style.display = 'none';
        seccionPersonajes.style.display = 'flex';
    });
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    let bart = document.getElementById('bart');
    let lisa = document.getElementById('lisa');
    let homero = document.getElementById('homero');
    let marge = document.getElementById('marge');
    let maggie = document.getElementById('maggie');
    let milhouse = document.getElementById('milhouse');
    let burns = document.getElementById('burns');
    let bobPatinio = document.getElementById('bobPatinio');
    let flanders = document.getElementById('flanders');
    let duffman = document.getElementById('duffman');
    let gorgory = document.getElementById('gorgory');
    let nelson = document.getElementById('nelson');

    bart.addEventListener('click', function() {
        manejarSeleccion(bart)
    });

    homero.addEventListener('click', function() {
        manejarSeleccion(homero)
    });

    milhouse.addEventListener('click', function() {
        manejarSeleccion(milhouse)
    });

    nelson.addEventListener('click', function() {
        manejarSeleccion(nelson)
    });

    lisa.addEventListener('dblclick', function() {
        manejarSeleccion(lisa)
    });

    bobPatinio.addEventListener('dblclick', function() {
        manejarSeleccion(bobPatinio)
    });

    duffman.addEventListener('dblclick', function() {
        manejarSeleccion(duffman)
    });

    marge.addEventListener('mouseenter', function() {
        manejarSeleccion(marge)
    });

    maggie.addEventListener('mouseleave', function() {
        manejarSeleccion(maggie)
    });

    burns.addEventListener('mouseenter', function() {
        manejarSeleccion(burns)
    });

    flanders.addEventListener('mouseenter', function() {
        manejarSeleccion(flanders)
    });

    gorgory.addEventListener('mouseenter', function() {
        manejarSeleccion(gorgory)
    });

    function manejarSeleccion(personaje) {
        if (personaje.classList.contains('personaje-seleccionado')) {
            personaje.classList.remove('personaje-seleccionado');
        } else {
            personaje.classList.add('personaje-seleccionado');
        }
    }

    let boton = document.querySelector('.boton');

    boton.addEventListener('click', function() {
        let personajesSeleccionados = document.querySelectorAll('.personaje-seleccionado');
        console.log('Personajes seleccionados:');
        personajesSeleccionados.forEach(function(personaje) {
            console.log(personaje.textContent);
        });
    });
 
 }) 