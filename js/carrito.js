/* Carrito De Compras */
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
//productosEnCarrito = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];


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
            div.classList.add("contenedor-carrito-producto");
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
                    <span id="cantidad">${producto.cantidad}</span>
                    <button class="carrito-producto-eliminar" id="${producto.id}"> <i class="bi bi-trash-fill"></i></button>
                </div>
                <div class="total">
                    <p>Subtotal:</p>
                    <p>${producto.precio * producto.cantidad} €</p>
                </div> 
                
            </div>
                
            `
            /* <button class="menos"><i class="bi bi-dash-lg"></i></button>
            <button class="plus"><i class="bi bi-plus"></i></button> */
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
    if (productosEnCarrito.length === 0) {
        // Si no hay más productos en el carrito, eliminar elementos visuales del carrito.
        contenedorCarritoProductos.innerHTML = "";
    }
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    console.log(productosEnCarrito)
}

botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    // Comprobar que se vació el carrito
    contenedorCarritoProductos.innerHTML = "";
    console.log(productosEnCarrito)
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
    
    /* contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
    contenedorCarritoProductos.innerHTML = "";
    console.log(contenedorCarritoProductos) */
    window.location.href = 'checkout.html';
}