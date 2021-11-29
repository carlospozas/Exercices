//juego en el que tenemos un jugador al que le podemos incrementar la fuerza y ver cual es su fuerza

let jugador = {
    fuerza = 1,
    incrementarFuerza = function () {
        this.fuerza += 1;
    },
    consultarFuerza = function () {
        console.log('Tu fuerza es '+ this.fuerza);
    },
}

let jugador1 = new jugador();

jugador1.consultarFuerza();
jugador1.incrementarFuerza();
jugador1.consultarFuerza();

//Ejercicio: Creamos el objeto date y algunos metodos
let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
console.log("Hoy es "+day+" del "+month+" del año "+year);

//Ejercicio: Numero natural al azar entre el 1 y el 100
function generateNumber (number) {
    return Math.round(Math.random() * number)
}
console.log(generateNumber(100));