const promise = new Promise((acc, rej) => {
    setTimeout(() => {
        acc("Array de productos");
    }, 3000);
});

promise
    .then((result) => {
        console.log("Todo ok");
        console.log(result);
    })
    .catch((error) => {
        console.log("Hubo un error");
        console.log(error);
    })
    .finally(() => {
        console.log("Finalmente");
    });

console.log("Hola! Bienvenido/a");
