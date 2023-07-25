let nom = '';
let ape = '';
let email = '';
let password = '';
let dirreccion = '';
let celular = '';
let departamento = '';
let ciudad = '';

const btnRegistrarUsuario = document.querySelector('#btnRegistrarUsuario');
let sessionUsuario = document.getElementById('sessionUsuario'); // Obtengo el menu enlace en acceder.html para agregarle texto según corresponda
const btnFinalizarCompra = document.getElementById('btnFinalizarCompra');

function traerItems() { // Se llama esta función cada vez que se recarga la página
    sessionUsuario = JSON.parse(localStorage.getItem('btnSessionUsuario')) || '';
    //btnRegistrarUsuario = localStorage.getItem('btnRegistrarUsuario') || [];
    nom = localStorage.getItem('nombre') || '';
    ape = localStorage.getItem('apellido') || '';
    email = localStorage.getItem('email') || '';
    password = localStorage.getItem('password') || '';
    dirreccion = localStorage.getItem('direccion') || '';
    celular = localStorage.getItem('celular') || '';
    departamento = localStorage.getItem('departamento') || '';
    ciudad = localStorage.getItem('ciudad') || ''; 
}


function allEventListeners() {
    document.addEventListener('DOMContentLoaded', traerItems);

    btnRegistrarUsuario.addEventListener('click', (e) => {
        e.preventDefault();
        guardarDatosRegistro();
    });
    
    document.querySelector('#inputEmail').addEventListener('change', () => {
    
    });

    sessionUsuario.onclick = () => {
        if (sessionUsuario.innerText === 'Cerrar Sessión') {
            sessionUsuario.innerText = 'Acceder';
            localStorage.setItem('btnSessionUsuario', JSON.stringify(sessionUsuario));
        }
    }
}


function guardarDatosRegistro() {
    email = document.querySelector('#inputEmail').value
    localStorage.setItem("email", email);
    localStorage.setItem("apellido", document.querySelector('#inputApeUsu').value);
    localStorage.setItem("nombre", document.querySelector('#inputNomUsu').value);
    localStorage.setItem("password", document.querySelector('#inputPassword').value);
    localStorage.setItem("dirreccion", document.querySelector('#inputDireccion').value);
    localStorage.setItem("celular", document.querySelector('#inputCelular').value);
    localStorage.setItem("ciudad", document.querySelector('#inputCity').value);
    localStorage.setItem("departamento", document.querySelector('#inputDepartamento').value);
}

allEventListeners();