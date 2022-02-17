// Using the const variable because it's not going to change
const kelvin = 234;

// Calculating celsius based on kelvin value
var celsius = kelvin - 273;

// Practice with newton
var newton = Math.floor (celsius * (33 / 100));

// Using built-in math object to round down
var fahrenheit = Math.floor (celsius * (9 / 5) + 32);

// Printing to the console using string interpolation 
console.log(`The temperature is ${fahrenheit} degreese Fahrenheit.`);

// Printing to the console using string interpolation
console.log(`The temperature is ${newton} degreese Newton.`);



