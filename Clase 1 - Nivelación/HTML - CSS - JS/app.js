//Un comentario

/* 
Otro comentario
*/

const heroes = ["Wonderwoman", "Superman", "Aquaman", "Flash"]

//Posiciones en array, agregar un héroe.
// console.log(heroes[2])

// heroes.push("Batman")
// console.log(heroes[4]);

// console.log(heroes[10]);

// console.log(heroes[-1]);

//Tipos de variables primitivas
const variable1 = true //boolean
const edad = 21 //number
const nombre = "Sebas" //string
const variableNula = null
let variableUndefined 

//Objetos y arrays
const alumno = {
    cursosAnteriores: ["DW", "JS", "Carrito"],
    edad: 29,
    cuponDeDescuento: false,
    bebidaPreferida: "fernandito VII"
}

console.log(alumno.edad);

//Condicionales básicos if else

let costoCurso = 14000
let descuento = 0.2

if (alumno.cuponDeDescuento || alumno.edad > 40) {
    costoCurso = costoCurso * (1 - descuento)
} else {
    console.log("No aplica el descuento"); 
}

console.log(costoCurso);

//Tener acceso a los elementos del DOM
const showButton = document.getElementById("show")
const hideButton = document.getElementById("hide")
const searchInput = document.getElementById("search")
const lista = document.getElementById("list")

//Añadir funcionalidad para mostrar personajes
showButton.addEventListener('click', ()=> {
    let content = heroesList(heroes)
    lista.innerHTML = content;
})

//Añadir funcionalidad para ocultar personajes
hideButton.addEventListener('click', ()=> {
    lista.innerHTML = ""
})

//Por último mostrar sólo los filtrados
searchInput.addEventListener('keyup', (event)=> {
    console.log(event.target.value);
    const filtro = event.target.value;
    const personajesFiltrados = heroes.filter(hero => hero.toLowerCase().includes(filtro.toLowerCase()))
    
    console.log(personajesFiltrados);
    lista.innerHTML = "";
    let content = heroesList(personajesFiltrados)
    lista.innerHTML = content;
})

function heroesList (heroes) {
    let content = heroes
        .map(hero => {
            return `<li>${hero}</li>`
        })
        .join("")
    console.log(content)
    return content
}