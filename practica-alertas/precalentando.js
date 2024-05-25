window.onload = function() {
        var confirmacion = confirm("¿Vas a salir de tu casa?");
        if (confirmacion) {
            alert("Checkeá el pronóstico del tiempo antes de salir");
        } else {
            alert("Que bueno que te quedes. Va a llover mucho hoy.");
        }
    };