//Destructuring de objetos
const animal = {
    patas: 4,
    maulla: true,
    visionNocturna: true
}

const bicho = {

}

console.log(animal.maulla);

//Acceder a la propiedad a través de una variable
const {maulla} = animal

// console.log(accion);

//Destructuring de arrays

const frutas = ['pera', 'banana', 'frutilla', 'maracuya', 'kiwi', 'mango']

// console.log(frutas[2])

const [fruta1, fruta2, fruta3, ...restoFrutas] = frutas

console.log(fruta1);
console.log(restoFrutas);

//Spread operator (...) para objetos y arrays
const animalSuperpoderoso = {
    ...animal,
    vuela: true,
    visionRayosLaser: true,
}

// console.log(animalSuperpoderoso);

const frutasExtended = [...frutas, 'cereza', 'durazno']

console.log(frutasExtended);
