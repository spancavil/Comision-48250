//Ejemplo If
/* const edad = 15
if (edad >= 18) console.log("Ud. es mayor de edad");
else console.log("Ud es menor de edad, no puede comprar alcohol") */


//Operador ternario.
//1 bloque : condición, 2do bloque: condicion es true, 3er bloque: condicion es false
const edad = 17;
const mensaje = edad < 18 ? 'Ud es menor de edad, no puede comprar alcohol' : edad > 65 ? 'Usted es jubilado' : "Ud es mayor de edad"
console.log(mensaje);

