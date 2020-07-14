class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreReferecnial = 'Humano';
class Usuario extends Persona {
    constructor(nombreParamentro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParamentro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const ronald = new Usuario("Ronald", "Apellido", "123456789", "con mosha");
console.log(ronald.nombre);
console.log(ronald.apellido);
console.log(ronald.cedula);
console.log(ronald.estadoCivil);
