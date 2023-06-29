//value of kelvin, kelvin is a constant 
const kelvin = 293;

// celsius is 273 degrees less than kelvin, it is also a constant
const celsius = kelvin - 273;

//another way of measuring temperature. when converting celsius to fahrenheit, often a decimal is obtained. we round down the value to obtain a whole number
const fahrenheit = Math.floor(celsius * (9/5) + 32);

const newton = Math.floor(celsius * (33/10));

console.log(`The temperature is ${newton} degrees Fahrenheit.`);

