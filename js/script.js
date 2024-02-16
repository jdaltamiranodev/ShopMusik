

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

let botonesAgregar = document.querySelectorAll(".agregar-producto-carrito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {

        /* let contenedorProducto = document.createElement("div");
        contenedorProducto.classList.add("contenedor-producto");
        contenedorProducto.id = "contenedor-producto";


        let contenedorImagen = document.createElement("img");
        contenedorImagen.classList.add("contenedor-producto-imagen");
        contenedorImagen.src = producto.imagen;
        contenedorImagen.alt = producto.titulo;

        
        let tituloProducto = document.createElement("p");
        tituloProducto.classList.add("titulo-producto");
        tituloProducto.id = producto.titulo;

        let btnCarrito = document.createElement("button");
        btnCarrito.classList.add("agregar-producto-carrito");
        btnCarrito.id = producto.id;
        btnCarrito.textContent = "Agregar al carrito ";

        let icono = document.createElement("i");
        icono.classList.add("bi", "bi-cart3");

        tituloProducto.textContent = producto.titulo;

        contenedorProducto.appendChild(contenedorImagen);
        contenedorProducto.appendChild(tituloProducto);
        btnCarrito.appendChild(icono);
        contenedorProducto.appendChild(btnCarrito);
        

        contenedorProductos.appendChild(contenedorProducto); */

        

        const div = document.createElement("div");
        div.classList.add("contenedor-producto-imagen");

        div.innerHTML = `
            <img class="contenedor-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <p class="titulo-producto">${producto.titulo}</p>
                
                <button class="agregar-producto-carrito" id="${producto.id}">Añadir al carrito <i class="bi bi-cart3"></i></button>
            </div>
        `
        /* <p class="producto-precio">${producto.precio}</p> */
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);  

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".agregar-producto-carrito");

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    //actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        console.log(`${idBoton} ya esta en el carrito`)
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        console.log(`${idBoton} No esta en el carrito`)
    }
    console.log(productosEnCarrito)

    //actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
console.log(productosEnCarrito)
/* function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".agregar-producto-carrito");


    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
console.log(productosEnCarritoLS);

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    console.log(productoAgregado)

    if(productoAgregado) { 
        const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idBoton);
        
        if(productoEnCarrito){
            productoEnCarrito.cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }
        
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }
} */

/* function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    console.log(productosEnCarrito);

    if (productoAgregado) {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        console.log(productosEnCarrito);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    } else {
        console.error("No se encontró ningún producto con el ID proporcionado.");
    } */
    
    /* if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    } */
    /* console.log(productosEnCarrito)

    //actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
} */