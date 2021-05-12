console.log('app');
// n-1
let productos = ["yogurt mango", "yogurt fresa", "yogurt manzana", "yogurt piña coco", "yogurt natural"];

// Recuperación de un elemento del array
let producto = productos[2];
console.log(producto);

for (let i=0; i < productos.length; i++){
    console.log(productos[i]);
}

// Ciclos más vistos por todos los lenguajees de programación es: for, whilw, do-while
// Iteración --> es una acción de principio a fin del punto "x" al punto "y" o de 0 a 100

// Ciclo for (para) y su sintaxis

// Para cada i que vale cero y mientras i sea menor a 7000 y que i aumenta en 1, realiza:
/* for (let i = 0; i < 70; i++) {
    console.log("usuario ", (i + 1));
}; */

for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    console.log(element);
}

    