// DEclaro variables globales
let stock = [];
let carrito = [];
let tabla = [];
const total = document.getElementById('total'); // fila que va registrar el total de carrito
total.innerText = 0;
const bodyTabla = document.getElementById('items'); // cuerpo de la tabla que se va agregar filas del carrrito
const btnCarrito = document.getElementById('btnCarrito'); 
const itemGato = document.getElementById('productoGato'); // opción de filtrar por Gatos
const itemPerro = document.getElementById('productoPerro');
const sectionProd = document.getElementById('idProductos');


function traerItems() { // Se llama esta función cada vez que se recarga la página
    fetch('../js/stock.json')
        .then((response) => {
            if (response.ok) {
                return response.json(); ///convierto los objetos de json a javascript
            } else {
               console.log('No se pudo traer los productos en stock del archivo JSON');
            }
        })
        .then((productos) => {
            stock = productos;
        })
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

function agregarCarrito(i) { // Se agrega el producto (si no existe) seleccionado de la Tienda en el array "carrito"
    const indexCarrito = carrito.findIndex((item) => item.nombre === stock[i - 1].nombre);
    let n;
    if (indexCarrito !== -1) {
        carrito[indexCarrito].cantidad++;
        n = indexCarrito;
    }
    else {
        n = carrito.push(stock[i - 1]);
        n--;
    }
    alertProductoAgregado(carrito[n].nombre);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    dibujarTabla();
}

function allEventListenersBtnAgregarProdGato() { // Para escuchar los eventos después de filtrar por productos
    document.getElementById("btn_3").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(3);
    });
    document.getElementById("btn_4").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(4);
    });
    document.getElementById("btn_5").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(5);
    });
    document.getElementById("btn_6").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(6);
    });
    document.getElementById("btn_7").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(7);
    });
    document.getElementById("btn_8").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(8);
    });
}

function allEventListenersBtnAgregarProdPerro() {
    document.getElementById("btn_1").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(1);
    });
    document.getElementById("btn_2").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(2);
    });
    document.getElementById("btn_4").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(4);
    });
    document.getElementById("btn_5").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(5);
    });
    document.getElementById("btn_7").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(7);
    });
    document.getElementById("btn_8").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(8);
    });
}


function allEventListeners() { // Todos los eventos de escucha
    document.addEventListener('DOMContentLoaded', traerItems);

    document.getElementById("btn_1").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(1);
    });
    document.getElementById("btn_2").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(2);
    });
    document.getElementById("btn_3").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(3);
    });
    document.getElementById("btn_4").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(4);
    });
    document.getElementById("btn_5").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(5);
    });
    document.getElementById("btn_6").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(6);
    });
    document.getElementById("btn_7").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(7);
    });
    document.getElementById("btn_8").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(8);
    });

    btnFinalizarCompra.onclick = () => {
        Swal.fire({
            title: 'Compra realizada',
            html: '<h5>El total de su compra es $<strong> ' + total.innerText + '</strong>. Muchas gracias por su compra</h5>',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });
        carrito = []; ///le envio el indice y la cantidad de 1 (porque voy a borrar solo 1)
        dibujarTabla();
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    itemGato.addEventListener('click', (e) => {
        e.preventDefault();
        filtrarProductos('Gato');
        allEventListenersBtnAgregarProdGato();
    });

    itemPerro.addEventListener('click', (e) => {
        e.preventDefault();
        filtrarProductos('Perro');
        allEventListenersBtnAgregarProdPerro()
    });




}

function filtrarProductos(tipoMascota) {
    sectionProd.innerHTML = ``; //me aseguro que la tabla no contenga datos
        stock.forEach((item, index) => {
            if (item.tipo === tipoMascota || item.tipo === 'Perro o Gato') {
                let articulo = document.createElement('article');
                let imagen = document.createElement('img');
                imagen.src = item.urlImagen;
                imagen.alt = item.nombre;
                imagen.classList.add('fotoprod');
                articulo.appendChild(imagen);
                let p = document.createElement('p');
                p.classList.add('infoProducto');
                let negrita = document.createElement('strong');
                negrita.innerText = item.nombre;
                p.appendChild(negrita);
                articulo.appendChild(p);
                let div = document.createElement('div');
                div.classList.add('comprarProducto');
                let boton = document.createElement('button');
                boton.id = 'btn_' + (index + 1);
                boton.classList.add('btn');
                boton.classList.add('btn-primary');
                boton.type = "button";
                boton.innerText = "Agregar Carrito";
                div.appendChild(boton);
                let p2 = document.createElement('p');
                p2.classList.add('precio');
                p2.innerText = '$' + item.precio;
                div.appendChild(p2);
                articulo.appendChild(div);
                sectionProd.appendChild(articulo);
            };
        });
}

function alertProductoAgregado(nomProducto) {
    Swal.fire({
        title: 'Producto Agregado',
        html: '<h5>Se agrego el producto "<strong>' + nomProducto + '"</strong> al carrito de compras.</h5>',
        icon: 'info',
        confirmButtonText: 'Cerrar'
    })
}

function dibujarTabla() {
    bodyTabla.innerHTML = ``; //me aseguro que la tabla no contenga datos
    total.innerText = 0;
    carrito.forEach((item, index) => {
        nuevaFila(item, index);
    });
    let contador = document.getElementById('notificacionCarrito'); // Notificacion para indicar nuevo elemento al carrito
    if (carrito.length !== 0){
        contador.classList.remove('d-none');
        contador.innerText = `${carrito.length}`
    }else{
        contador.classList.add('d-none');
    }
}

function nuevaFila(item, index) {
    const row = document.createElement('tr'); ///creo la fila

    let td = document.createElement('td');
    td.textContent = index + 1;
    row.appendChild(td);

    td = document.createElement('td');
    td.textContent = item.nombre;
    row.appendChild(td);

    td = document.createElement('td');
    td.textContent = item.precio;
    row.appendChild(td);


    td = document.createElement('td');
    td.textContent = item.cantidad;
    row.appendChild(td);
    ///agrego una nueva celda con el boton eliminar
    td = document.createElement('td');
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger');
    btnEliminar.textContent = 'Borrar';
    ///cuando hace click se debe eliminar del CARRITO el elemento, actualizar el localstorage y actualizar la tabla
    btnEliminar.onclick = () => {
        carrito.splice(index, 1); ///le envio el indice y la cantidad de 1 (porque voy a borrar solo 1)
        dibujarTabla();
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    td.appendChild(btnEliminar);
    row.appendChild(td);
    bodyTabla.appendChild(row);

    ////calculo el total que tengo ahora
    total.textContent = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

allEventListeners();



