/*const usuarios = [];
const btnRegistrar = document.querySelector('#registrarUsuario');
let portada;
const menu = document.getElementById('inicio');
console.log(menu);
/*
///1 obtengo los elementos del documento, los convierto a JSON y los guardo en localstorage




function guardarDatos() {
    const nom = document.querySelector('#inputNomUsu');
    localStorage.setItem('nombre', JSON.stringify(nom));
    const ape = document.querySelector('#inputApeUsu');
    localStorage.setItem('apellido', JSON.stringify(ape));
    const email = document.querySelector('#inputEmail');
    localStorage.setItem('email', JSON.stringify(email));
    const contrasenia = document.querySelector('#inputPassword');
    localStorage.setItem('password', JSON.stringify(contrasenia));
    const dirreccion = document.querySelector('#inputDireccion');
    localStorage.setItem('direccion', JSON.stringify(dirreccion));
    const celular = document.querySelector('#inputCelular');
    localStorage.setItem('celular', JSON.stringify(celular));
    const city = document.querySelector('#inputCity');
    localStorage.setItem('ciudad', JSON.stringify(city));
    const departamento = document.querySelector('#inputDepartamento');
    localStorage.setItem('departamento', JSON.stringify(departamento));
}



//2 Agregamos los eventos necesarios
//  <p>${localStorage.getItem('nombre')} ${localStorage.getItem('apellido')}</p>
btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();
    guardarDatos();
    //registrarUsuario();
    const nomJSON = JSON.parse(localStorage.getItem('nombre'));
    portada.innerHTML = `<p>${nomJSON} ${JSON.parse(localStorage.getItem('apellido'))}</p> ` + portada.innerHTML;
    //localStorage.setItem('portada', JSON.stringify(portada));
    //portada.innerHTML = JSON.parse(localStorage.getItem('portada'));
    alert("Usuario REggistrado");
});

function registrarUsuario() {

    const nuevoUsuario = new Usuario(nom.value, ape.value, email.value, contrasenia.value, dirreccion.value, celular.value, city.value, departamento.value);
    usuarios.push(nuevoUsuario);
}









function modificarPortada() {    
    portada = document.querySelector('#header');
    portada.innerHTML = `<p class="nomUsuario">${localStorage.getItem('nombre')} ${localStorage.getItem('apellido')}</p> ` + portada.innerHTML;
    localStorage.setItem('portada', JSON.stringify(portada.innerHTML));
}




btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();
    const nom = document.querySelector('#inputNomUsu').value;
    const ape = document.querySelector('#inputApeUsu').value;
    localStorage.setItem("apellido", ape);
    localStorage.setItem("nombre", nom);
    modificarPortada();
    
    
    //registrarUsuario();
    alert("Usuario REggistrado");
});


portada = document.querySelector('#header');
portada = JSON.parse(localStorage.getItem('portada'));
console.log("Holaaaaaaaaaaaaaaa");
console.log(portada);
*/

//localStorage.clear();

const productos = [];
productos.push(new Producto("Ración Pedigree Adultos", 329, 1));
productos.push(new Producto("Pretal Doris Ajustable", 350, 1));
productos.push(new Producto("Ración Maxine Adultos", 480, 1));
productos.push(new Producto("Transportador para felino", 1209, 1));
productos.push(new Producto("Cama pet afelpada", 699, 1));
productos.push(new Producto("Piedra aglomerantes", 580, 1));
productos.push(new Producto("Prednisolona", 120, 1));
productos.push(new Producto("Shampoo Dominal", 280, 1));

localStorage.setItem('stock', JSON.stringify(productos));

let stock = [];
let carrito = [];
let tabla = [];
const total = document.getElementById('total'); // fila que va registrar el total de carrito
const bodyTabla = document.getElementById('items'); // cuerpo de la tabla que se va agregar filas del carrrito
/*const btnRegistrar = document.getElementById('registrarUsuario') // obtengo boton de registro usuario
let portada = document.getElementById('header');
localStorage.setItem('portada', portada);*/


function traerItems() {
    stock = JSON.parse(localStorage.getItem('stock')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    //portada = JSON.parse(localStorage.getItem('portada')) || [];
}


function agregarCarrito(i) {
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
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function allEventListeners() {
    document.addEventListener('DOMContentLoaded', traerItems);

    document.getElementById("btn_1").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(1);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_2").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(2);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_3").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(3);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_4").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(4);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_5").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(5);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_6").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(6);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_7").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(7);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });
    document.getElementById("btn_8").addEventListener('click', (e) => {
        e.preventDefault();
        agregarCarrito(8);
        dibujarTabla();
        alert("Producto agregado al carrito");
    });

    /*btnRegistrar.addEventListener('click', (e) => {
        e.preventDefault();
        const nom = document.querySelector('#inputNomUsu').value;
        const ape = document.querySelector('#inputApeUsu').value;
        localStorage.setItem("apellido", ape);
        localStorage.setItem("nombre", nom);
        modificarPortada();
        alert("Usuario Registrado");
    });*/
}


function dibujarTabla() {
    bodyTabla.innerHTML = ``; //me aseguro que la tabla no contenga datos
    total.innerText = 0;
    carrito.forEach((item, index) => {
        nuevaFila(item, index);
    });
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

    ///cuando hace click se debe eliminar del CARRITO el elemento
    // actualizar el localstorage y actualizar la tabla
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

// regex