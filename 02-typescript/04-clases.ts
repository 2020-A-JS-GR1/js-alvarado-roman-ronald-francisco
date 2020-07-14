class Persona{
    public nombre:string;
    public apellido:string;
    static nombreReferecnial:string = 'Humano';
    protected nombreYApellido: string = '';


    constructor(nombreParametro: string,
                apellidoParametro: string,) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre+ ' '+this.apellido;
    }

    private mostrarNombreApellido(){
        return this.nombreYApellido;
    }

}

class Usuario extends Persona{
    constructor(
        nombreParamentro: string,
        apellidoParametro: string,
        public cedula:string,
        public estadoCivil: string,
    ) {
        super(nombreParamentro, apellidoParametro);
    }


}

const ronald = new Usuario(
    "Ronald",
    "Apellido",
    "123456789",
    "con mosha");

console.log(ronald.nombre);
console.log(ronald.apellido);
console.log(ronald.cedula);
console.log(ronald.estadoCivil);