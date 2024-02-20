// Obtener elementos del DOM
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
actualizarTotal();


/* Carrito De Compras */
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
