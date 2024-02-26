/* // Obtener elementos del DOM
const menosButton = document.querySelector('.menos');
const plusButton = document.querySelector('.plus');
const cantidadElement = document.getElementById('cantidad');
const totalInputElement = document.getElementById('totalValue');

// Precio unitario (puedes cambiarlo según tu necesidad)
const precioUnitario = 799.00;

// Función para actualizar el total
function actualizarTotal() {
    const cantidad = parseInt(cantidadElement.textContent);
    const total = cantidad * precioUnitario;
    totalInputElement.value = `${total.toFixed(2)} €`; // Redondear a 2 decimales
}

// Event listener para el botón de disminuir cantidad
menosButton.addEventListener('click', function () {
    let cantidad = parseInt(cantidadElement.textContent);
    if (cantidad > 1) {
        cantidad--;
        cantidadElement.textContent = cantidad;
        actualizarTotal();
    }
});

// Event listener para el botón de aumentar cantidad
plusButton.addEventListener('click', function () {
    let cantidad = parseInt(cantidadElement.textContent);
    cantidad++;
    cantidadElement.textContent = cantidad;
    actualizarTotal();
});

// Calcular total inicial
actualizarTotal(); */


/* Carrito De Compras */
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
//productosEnCarrito = JSON.parse(productosEnCarrito);
productosEnCarrito = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];


/* CÓDIGO DEL ECOMMERCE DE ROPA - INICIO */

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#pajena_carrito");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("pajena_carrito");
            div.innerHTML = `

            <div class="product_imagen">
                <img src="${producto.imagen}" alt="${producto.titulo}" id="foto">
            </div>
            <div class="caja_carrito">
                <div class="precio">
                    <h2>${producto.titulo}</h2>
                    <h1>${producto.precio} €</h1>
                    <p class="iva">IVA INCLUIDO</p>
                </div>
                <div class="icons_cart">
                    <i class="bi bi-cart4"></i>
                    <button class="menos"><i class="bi bi-dash-lg"></i></button>
                    <span id="cantidad">1</span>
                    <button class="plus"><i class="bi bi-plus"></i></button>
                    <button class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i></button>
                </div>
                <div class="total">
                    <p>Subtotal:</p>
                    <p>0 €</p>
                </div> 
                
            </div>
                
            `

            /* <img src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Tìtulo</small>
                    <h3>${producto.titulo}</h3>
                </div> 
    
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div> 
    
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div> 
    
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div> 
    
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button> */
    
            contenedorCarritoProductos.append(div);
        })
    
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito()
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerHTML = `${totalCalculado}`;
}

botonComprar.addEventListener('click', comprarCarrito);

function comprarCarrito(){

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}

/* CÓDIGO DEL ECOMMERCE DE ROPA - FIN*/