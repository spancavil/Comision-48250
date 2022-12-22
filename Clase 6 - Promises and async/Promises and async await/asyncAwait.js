//IIFE -- función autoejecutada (no tiene que ser llamada)
(async () => {

    //Defino una función que me devuelve una promesa
    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            console.log("Hola en promise");
            const aceptor = Math.random();
            if (aceptor > 0.5) {
                resolve({ value: "Listado de productos" })
            }
            reject({ message: "No te devuelvo nada" })
        })
    }

    //Bloque try-catch que se ejecuta en modo sincrónico
    try {
        const response = await obtenerProductos();
        console.log(response);
    } catch (error) {
        console.log("Entra en el catch")
        console.log(error);
    }
    console.log("Continua la ejecución!");
        
})()

/* (()=> {
    console.log("Esta función se autoejecuta");
})() */

// console.log("Me ejecuto")