

//script para la fecha
 const $fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(),
    anio = f.getFullYear(),
    diaSemana = f.getDay();
    
    dia = ('0' + dia).slice(-2);

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sábado'];
    let showSemana = (semana[diaSemana]);

    let mesAnio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    let showMes = (mesAnio[mes]);

    document.querySelector('.fecha').innerHTML = `${showSemana} ${dia} de ${showMes} de ${anio}`
} 

setInterval(() => {
    digitalClock()

}, 1000);

const productos = [
    // Instrumentos de viento
    {
        id: "viento-1",
        titulo: "viento-1",
        imagen: "img/viento/01.jpeg",
        descripcion: "",
        categoria: {
            nombre: "viento-1",
            id: "viento"
        },
        precio: 1000
    },
    {
        id: "viento-2",
        titulo: "viento-2",
        imagen: "img/viento/02.jpeg",
        descripcion: "",
        categoria: {
            nombre: "viento-2",
            id: "viento"
        },
        precio: 1000
    },
    {
        id: "viento-3",
        titulo: "viento-3",
        imagen: "img/viento/03.jpeg",
        descripcion: "",
        categoria: {
            nombre: "viento-3",
            id: "viento"
        },
        precio: 1000
    },
    {
        id: "viento-4",
        titulo: "viento-4",
        imagen: "img/viento/04.jpeg",
        descripcion: "",
        categoria: {
            nombre: "viento-4",
            id: "viento"
        },
        precio: 1000
    },
    {
        id: "viento-5",
        titulo: "viento-5",
        imagen: "img/viento/05.jpeg",
        descripcion: "",
        categoria: {
            nombre: "viento-5",
            id: "viento"
        },
        precio: 1000
    },
    {
        id: "viento-6",
        titulo: "viento-6",
        imagen: "img/viento/06.jpeg",
        descripcion: "",
        categoria: {
            nombre: "viento-6",
            id: "viento"
        },
        precio: 1000
    },
    // Instrumentos de cuerda
    {
        id: "cuerda-1",
        titulo: "cuerda-1",
        imagen: "img/cuerda/01.jpg",
        descripcion: "",
        categoria: {
            nombre: "cuerda-1",
            id: "cuerda"
        },
        precio: 1000
    },
    {
        id: "cuerda-2",
        titulo: "cuerda-2",
        imagen: "img/cuerda/02.jpg",
        descripcion: "",
        categoria: {
            nombre: "cuerda-2",
            id: "cuerda"
        },
        precio: 1000
    },
    {
        id: "cuerda-3",
        titulo: "cuerda-3",
        imagen: "img/cuerda/03.jpg",
        descripcion: "",
        categoria: {
            nombre: "cuerda-3",
            id: "cuerda"
        },
        precio: 1000
    },
    {
        id: "cuerda-4",
        titulo: "cuerda-4",
        imagen: "img/cuerda/04.jpg",
        descripcion: "",
        categoria: {
            nombre: "cuerda-4",
            id: "cuerda"
        },
        precio: 1000
    },
    {
        id: "cuerda-5",
        titulo: "cuerda-5",
        imagen: "img/cuerda/05.jpg",
        descripcion: "",
        categoria: {
            nombre: "cuerda-5",
            id: "cuerda"
        },
        precio: 1000
    },
    {
        id: "cuerda-6",
        titulo: "cuerda-6",
        imagen: "img/cuerda/06.jpg",
        descripcion: "",
        categoria: {
            nombre: "cuerda-6",
            id: "cuerda"
        },
        precio: 1000
    },
    // Instrumentos de percusión
    {
        id: "percusion-1",
        titulo: "percusion-1",
        imagen: "img/percusion/01.jpeg",
        descripcion: "",
        categoria: {
            nombre: "percusion-1",
            id: "percusion"
        },
        precio: 1000
    },
    {
        id: "percusion-2",
        titulo: "percusion-2",
        imagen: "img/percusion/02.jpeg",
        descripcion: "",
        categoria: {
            nombre: "percusion-2",
            id: "percusion"
        },
        precio: 1000
    },
    {
        id: "percusion-3",
        titulo: "percusion-3",
        imagen: "img/percusion/03.jpeg",
        descripcion: "",
        categoria: {
            nombre: "percusion-3",
            id: "percusion"
        },
        precio: 1000
    },
    {
        id: "percusion-4",
        titulo: "percusion-4",
        imagen: "img/percusion/04.jpeg",
        descripcion: "",
        categoria: {
            nombre: "percusion-4",
            id: "percusion"
        },
        precio: 1000
    },
    {
        id: "percusion-5",
        titulo: "percusion-5",
        imagen: "img/percusion/05.jpeg",
        descripcion: "",
        categoria: {
            nombre: "percusion-5",
            id: "percusion"
        },
        precio: 1000
    },
    {
        id: "percusion-6",
        titulo: "percusion-6",
        imagen: "img/percusion/06.jpeg",
        descripcion: "",
        categoria: {
            nombre: "percusion-6",
            id: "percusion"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

const tituloProducto = document.querySelector("#titulo-producto");

let botonesAgregar = document.querySelectorAll("#agregar-producto-carrito");

function cargarProductos(productosElegidos) {
    /* const {} = productos;
    contenedorProductos.innerHTML = ""; */
    
    productosElegidos.forEach(producto => {
        console.log(producto.titulo);

        let contenedorProducto = document.createElement("div");
        contenedorProducto.classList.add("contenedor-producto");
        contenedorProducto.id = "contenedor-producto";


        let contenedorImagen = document.createElement("img");
        contenedorImagen.classList.add("contenedor-producto-imagen");
        contenedorImagen.id = "contenedor-producto-imagen";
        contenedorImagen.src = producto.imagen;

        
        let tituloProducto = document.createElement("p");
        tituloProducto.classList.add("titulo-producto");
        tituloProducto.id = "titulo-producto";

        let btnCarrito = document.createElement("button");
        btnCarrito.classList.add("agregar-producto-carrito");
        btnCarrito.id = "agregar-producto-carrito";
        btnCarrito.textContent = "Agregar al carrito ";

        let icono = document.createElement("i");
        icono.classList.add("bi", "bi-cart3");

        tituloProducto.textContent = producto.titulo;

        console.log(tituloProducto)

        contenedorProducto.appendChild(contenedorImagen);
        console.log(contenedorProducto);
        contenedorProducto.appendChild(tituloProducto);
        contenedorProducto.appendChild(btnCarrito);
        btnCarrito.appendChild(icono);

        contenedorProductos.appendChild(contenedorProducto);

        /* div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div><!-- .producto-detalles -->
        `
        contenedorProductos.append(div); */
    })
}

cargarProductos(productos);  