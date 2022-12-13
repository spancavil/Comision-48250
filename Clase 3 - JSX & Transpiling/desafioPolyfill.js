//Find
const arrayDeFrutas = ["Mango", "pera", "manzana"]

/* const nombreEncontrado = arrayDeFrutas.find(nombre => nombre === "Sebastián");

console.log(nombreEncontrado); */

//Solución de Nacho Elisii
const findConPolyfill = (array,busqueda) => {
    console.log(array)
    let elementoEncontrado;
    array.forEach(element => {
        if(element === busqueda){ 
            elementoEncontrado = element
        }
    });
    return elementoEncontrado
}

const elementoEncontrado = findConPolyfill(arrayDeFrutas, "cereza")
console.log(elementoEncontrado);