
// variables de entrada
let temperatura = prompt("Ingrese Tº en grados Celcius");
let kelvin = 273.15
//Celcius (0ºC * 9/5) + 32 = 32 ºF
//9/5 =1.8 => const1
let const1 = 1.8
//32 => const2
let const2 = 32

//impresion en consola de los resultados suma, resta, multiplicacion, divide, modulo.
console.log(`La temperatura es:
Kelvin: ${parseInt(temperatura) + parseInt(kelvin)}
Fahrenheit: ${(parseInt(temperatura) * parseInt(const1)) + parseInt(const2)}

`);
