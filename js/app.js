let stock = [];
let carrito = [];
let tabla = [];
const total = document.getElementById('total');
const bodyTabla = document.getElementById('items');

function traerItems() {
    stock = JSON.parse(localStorage.getItem('stock')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}


function agregarCarrito(i) {
    const indexCarrito = carrito.findIndex((item) => item.nombre === stock[i-1].nombre);
    let n;
    if (indexCarrito !== -1) {
        carrito[indexCarrito].cantidad++;
        n = indexCarrito;
    }
    else {
        n = carrito.push(stock[i-1]);
        n--;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function allEventListeners() {
    document.addEventListener('DOMContentLoaded', traerItems);

    document.getElementById("btn_1").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(1);
        dibujarTabla();
    });
    document.getElementById("btn_2").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(2);
        dibujarTabla();
    });
    document.getElementById("btn_3").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(3);
        dibujarTabla();
    });
    document.getElementById("btn_4").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(4);
        dibujarTabla();
    });
    document.getElementById("btn_5").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(5);
        dibujarTabla();
    });
    document.getElementById("btn_6").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(6);
        dibujarTabla();
    });
    document.getElementById("btn_7").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(7);
        dibujarTabla();
    });
    document.getElementById("btn_8").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(8);
        dibujarTabla();
    });
}


function dibujarTabla() {
    bodyTabla.innerHTML = ``; //me aseguro que la tabla no contenga datos
    total.innerText = 0;
    carrito.forEach((item,index) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML + 
                    `<tr>
                        <th scope="row">${index+1}</th>
                        <td>${item.nombre}</td>
                        <td>${item.precio}</td>
                        <td>${item.cantidad}</td>
                    </tr>
        `;
    });
    total.textContent = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0); 
}

allEventListeners();