
//variables de entrada
let daysString = prompt("Ingrese cantidad de días");
let daysNumber = parseInt(daysString);

//calculos

let years = Math.floor(daysNumber / 365);
let weeks = Math.floor((daysNumber % 365) /7);
let days = Math.floor((daysNumber % 365)%7);

//impresion de datos en consola --> interpolación
console.log(`
    ${years} años,
    ${weeks} semanas,
    ${days} dias
`)