// Temperature in K
// Temperatura en K.
const kelvin = 293;

// Temperature in °C from K.
// Temperatura en °C convertida desde grados K.
let celsius = kelvin - 273;

// Temperature in °F from °C
// Temperatura en °F convertida desde °C.
// Used Math.floor() method to round number to a whole number
// Uso el método Math.floor() para redondear el número a un entero.
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Answers
//Respuestas.
console.log(`La temperatura es de ${fahrenheit} grados Fahrenheit.`);
