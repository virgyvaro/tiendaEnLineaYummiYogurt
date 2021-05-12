// DOM
// El DOM es para manipular el HTML
// Se manipula por --> id, class, tagName (selectores)

// let caja = document.getElementById('main');

// console.log(caja);

// let parrafo = document.querySelector('.prueba');

// parrafo.innerHTML = "cambie el contenido";

// Para cambiar algún contenido después de un tiempo deteerminado por medio del "querySelector"
// setTimeout(parrafo.innerHTML = 'cambie el contenido', 5000);

// setTimeout(() => {
//     parrafo.innerHTML = 'cambie el contenido';
// }, 3000);

// console.log(parrafo);

// De esta forma se crean elementos de HTML (etiquetas de HTML)
// let hijo = document.createElement('p');
// hijo.innerHTML = "contendio creado desde js";

// Esto equivale como si fuera estilo en linea desde el HTML, pero dentro de JS
// hijo.setAttribute('style', 'background: purple; font-size: 40px');

// Otra forma es:
// hijo.style.background = 'purple';
// hijo.style.fontSize = '40px';

// Crear, agregar un hijo --> Padre caja y su hijo es "hijo"
// caja.appendChild(hijo);

// console.log(hijo);

// Recuperar un id
let contenedor = document.getElementById('main');

// Creación de etiquetas
// Se llena con más etiquetas creadas
let card = document.createElement('div');
// se crea con templates strings
let card2 = document.createElement('div');

let h3 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let img = document.createElement('img');

// Poner contenido
h3.innerHTML = 'nombre del producto';
p1.innerHTML = 'precio';
p2.innerHTML = 'descripcion';

// Crear nodos o parentesco
contenedor.appendChild(card);
card.appendChild(h3);
card.appendChild(p1);
card.appendChild(p2);
contenedor.appendChild(card2);

// Estilos
card.classList.add('card');
card.classList.add('col-6');
card.classList.add('bg-dark');

// backticks template string js ecmascrip6 --> empresa que se encarga de regular
card2.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${'https://image.freepik.com/foto-gratis/estudiante-universitario-femenino-feliz-mostrando-pulgares-arriba-aislado_231208-10405.jpg'}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Prueba de carta</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
`;



