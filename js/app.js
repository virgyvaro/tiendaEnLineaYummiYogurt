let productos = [
    {
        id: "1",
        nombre: "Mango",
        precio: 20,
        descripcion: "Delicioso yoguth de mango con tocitos de frut fresca",
        imgURL: 'https://image.freepik.com/foto-gratis/mano-femenina-rompiendo-frutos-mango-exoticos-superficie-marmol_114579-47438.jpg'
    },
    {
        id: "2",
        nombre: "Manzana",
        precio: 18,
        descripcion: "Delicioso yogurt de manzana roja con trocitos de fruta fresca y fresca.",
        imgURL: 'https://img.freepik.com/foto-gratis/manzanas-mesa_144627-6746.jpg?size=338&ext=jpg'
    },
    {
        id: "3",
        nombre: "Natural",
        precio: 30,
        descripcion: "Este yogurt natural casero es ideal para que le pongas tu fruta favorita para el postre despues de la comida o para que te prepares para tu entrenamiento. Aniade unas nueces para mejorar su sabor y tu rendimiento",
        imgURL: 'https://image.freepik.com/vector-gratis/publicidad-realista-yogurt-taza-plastico-marca-yogurt-natural-cuchara-texto-editable-ilustracion-vectorial_1284-30212.jpg'  
    },
    {
        id:"4",
        nombre: "Fresa",
        precio: 30,
        descripcion: "Un desayuno nutritivo no puede estar completo sin yogurt,aporta cantidades considerables de calcio necesario para el buen funcionamiento de los huesos, tiene trozos de fresa natural. Presentación familiar de 1 kilo",
        imgURL:"https://image.freepik.com/foto-gratis/fresa-aislada-fondo-blanco_1232-1974.jpg" 
    },
    {
        id: '5',
        nombre: 'Piña Coco',
        precio: 20,
        descripcion:'Yogurt griego con frutilla de piña y coco en cubos, listo para tu paladar, cero azúcar sin conservadores',
        imgURL:'https://image.freepik.com/foto-gratis/fresca-textura-vitamina-fruta-cruda_1172-220.jpg'
    }
];

// console.log(productos);


// let contenedorProductos = document.querySelector("#main");
// console.log(contenedorProductos);


/* for (let i = 0; i < productos.length; i++) {
    // const element = productos[i];
    // console.log(element.nombre);
    console.log(productos[i].nombre);
} */

// for (let i = 0; i < productos.length; i++) {
    // itero el arreglo con base al index y lo guardo en element 
    // const element = productos[i];
    
    // Con ayuda de DOM creo una etiqueta puede ser p, h1, strong
    // let producto = document.createElement('p');

    // Asigno como contenido de la etiqueta el valor de element.nombre
    // producto.innerHTML = element.nombre;

    /* Comprobar en consola el funcionamiento
    console.log(productos); */
    
    // genero que producto sea hijo de main
    // main de html lo recupero en la variable contenedorProductos
    // contenedorProductos.appendChild(producto);
// } 
    
    
let contenedorProductos = document.querySelector("#main"); 
let row = document.createElement('div');
contenedorProductos.appendChild(row);
row.classList.add('row');

for (let i = 0; i < productos.length; i++) {
    // const --> se crea cada que entra al for
    const producto = productos[i];
    
    // Crear el nodo y debe de estar dentro del for para que tenga las mismas iteraciones que se necesitan. 
    let carta = document.createElement('div');
    
    carta.innerHTML = `<div class="card" style="width: 18rem;"> 
    <img src="${producto.imgURL}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">${producto.precio}</p>
            </div>
    </div>`;
    
    // Agregando hijos
    row.appendChild(carta);
}
