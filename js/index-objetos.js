// Ejercicio 1
let octavio = {
        nombre: "Octavio",
        apellido: "Guerra",
        edad: 19,
        dni: 46583592,
        comidasFavoritas: ["Asado", "Pastas", "Pizza"],
        saludar: function() {
                console.log("Mi nombre es", this.nombre, this.apellido, "y tengo", this.edad, "años.", "Mi primer comida favorita es", this.comidasFavoritas[0])
        }
}

// Ejercicio 2
octavio.saludar()

// Ejercicio 3
let vehiculo = {
        marca: "Porsche",
        modelo: "911 Targa",
        anio: 1980,
        color: "Negro Metalizado (basalt-schwarz-metallic) C9Z",
        posicion: 0,
        avanzar: function(n) {
                this.posicion = this.posicion + n
        },
        retroceder: function(n) {
                this.posicion = this.posicion - n
        },
}

vehiculo.avanzar(10)
console.log("La posicion es", vehiculo.posicion, "luego de avanzar 10 metros en un segundo.")

vehiculo.retroceder(5)
console.log("La posicion es de", vehiculo.posicion, "luego de retroceder 5 metros en un segundo.")

// Ejercicio 4
let vehiculo_moderno = {
        marca: "Porsche",
        modelo: "911 Turbo",
        anio: 1990,
        color: "Gris Metalizado (arktis-silber-metallic) 92T",
        posicion: 0,
        moverse: function(n) {
                if (n < 0) {
                        this.posicion = this.posicion - n
                }
                else if (n > 0) {
                        this.posicion = this.posicion + n
                }
        },
}

vehiculo_moderno.moverse(15)
console.log("La posicion es de", vehiculo_moderno.posicion, "luego de moverse 15 metros positivos en un segundo.")

// Ejercicio 5
let ironMan = {
        nombre: "Iron Man",
        equipo: "Avengers",
        poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
        energia: 100,
        getPoder: function(num) {
                this.energia = this.energia - 10;
                return `Poder Elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`;
        },
}

let Hulk = {
        nombre: "Hulk",
        equipo: "Avengers",
        poderes: ["Aplastar", "Gritar", "Golpear"],
        energia: 100,
        getPoder: function(num) {
                this.energia = this.energia - 10;
                return `Poder Elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`;
        },
}

// Se utilizan valores entre 0 y 2 porque hay 3 poderes y los arrays comienzan desde la posicion 0.
// Para hacerlo mas interesante generamos una funcion que haga un numero random entre 0 y 2 para acceder al array.

function random(){
        return(Math.floor(Math.random() * 3))
}

console.log(ironMan.getPoder(random()));
console.log(ironMan.getPoder(random()));
console.log(ironMan.getPoder(random()));

console.log(Hulk.getPoder(random()));
console.log(Hulk.getPoder(random()));
console.log(Hulk.getPoder(random()));

