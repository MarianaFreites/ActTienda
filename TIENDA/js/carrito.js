let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }

    mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(producto => producto.nombre !== nombre);
    mostrarCarrito();
}

// Función para mostrar el carrito en pantalla
function mostrarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ''; // Limpiar contenido del carrito

    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <p>${producto.nombre} (Cantidad: ${producto.cantidad}) - $${producto.precio * producto.cantidad}</p>
            <button onclick="eliminarDelCarrito('${producto.nombre}')" class="bg-pink-200">Eliminar</button>
        `;
        carritoDiv.appendChild(productoDiv);
    });

    // Actualizar el total
    actualizarTotal();
}

// Función para calcular el total
function actualizarTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    document.getElementById("total").innerText = total;
}

// Función para mostrar/ocultar el carrito
function toggleCarrito() {
    const carritoMenu = document.getElementById("carritoMenu");
    
    // Si el carrito está oculto, lo mostramos; si está visible, lo ocultamos
    if (carritoMenu.style.display === "none" || carritoMenu.style.display === "") {
        carritoMenu.style.display = "block";
    } else {
        carritoMenu.style.display = "none";
    }
}

