class Usuario {
    ///generar atributos/caracteristicas/propiedades del objeto
    nombre;
    apellido;
    email;
    contrasenia;
    dirreccion;
    celular;
    ciudad;
    departamento;

    constructor(nombre, apellido, email, contrasenia, dirreccion, celular, ciudad, departamento) {
        this.nombre       = nombre;
        this.apellido     = apellido;
        this.celular      = celular;
        this.email        = email;
        this.contrasenia  = contrasenia;
        this.dirreccion   = dirreccion;
        this.ciudad       = ciudad;
        this.departamento = departamento
    }
}