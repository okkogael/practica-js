// Ejercicio 1
function rectangulo(altura, ancho) {
        return ancho * altura;
}

console.log("El area del rectangulo es: ", rectangulo(2, 5))

// Ejercicio 2
function triangulo(base, altura) {
        return ((base * altura)/2);
}

console.log("El area del triangulo es: ", triangulo(2, 3))

// Ejercicio 3
function largoDelArray(array) {
        return (array.length);
}

console.log("El largo del array es: ", largoDelArray([1, 2, 3, 4, 5]))

// Ejercicio 4
function cantidadDeLetras(palabra) {
        return (palabra.length);
}

console.log("El largo de 'hola' es de:", cantidadDeLetras("hola"), "letras.")

// Ejercicio 5
function dolarHoy(precio) {
        return (precio / 1045);
}

console.log("El precio del producto (10.450 ARS) es de", dolarHoy(10450), "dolares.")

// Ejercicio 6
function precioFinal(precio) {
        return (precio + ((precio * 21)/100))
}

console.log("El precio final del producto (1000 ARS) es de:", precioFinal(1000), "pesos.")

// Ejercicio 7
function mitad(numero) {
        return (numero / 2)
}

console.log("La mitad del numero (10) es", mitad(10))

//Desafios extras porque somos muy cracks :)

// Ejercicio 8 Extra
function diaSegunNumero(dias, numero) {
        return (dias[numero - 1]) //Hacemos esto porque los arrays empiezan en 0. Y porque somos cracks, tambien.
}

console.log("Teniendo en cuenta el Lunes como dia 1, el el quinto dia es el", diaSegunNumero(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], 5))

// Ejercicio 9 Extra Hiper Plus Ultra
function calculadora(operacion, num1, num2) {
        if (operacion == "sumar") {
                return(num1 + num2)
        }
        else if (operacion == "multiplicar") {
                return(num1 * num2)
        }
        else if (operacion == "restar") {
                return(num1 - num2)
        }
        else if (operacion == "dividir") {
                return(num1 / num2)
        }
        else {
                console.log("No existe la operacion" + operacion)
        }
}

console.log("Llamaremos a la funcion multiplicar (de nuestra genial calculadora), pasandole 2 y 3, dando como resultado", calculadora("multiplicar", 2, 3))

// Ejecutando Funciones (10?)
function siguiente(numero) {
  return numero + 1;
}

function doble(numero) {
  return 2 * numero;
}

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}

console.log("El numero siguiente a 1 es", siguiente(1))

console.log("El numero doble de 2 es", doble(2))

console.log("El numero siguiente del doble de 3 es", siguienteDelDoble(3))

function anterior(numero) {
        return (numero - 1)
}

console.log("El anterior del numero 5 es", anterior(4))

function triple(numero) {
        return (numero * 3)
}

console.log("El triple de 5 es", triple(5))

function anteriorDelTriple(numero) {
        return anterior(triple(numero))
}

console.log("El anterior del triple de 5 es", anteriorDelTriple(5))