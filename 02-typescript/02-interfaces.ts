interface Usuario {
    nombre: string ;
    apellido : string;
    edad?: number; //opcional
    sueldo?: number; //opcional
    casado : boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;
    // parametro numero impuesto, sueldo +suelldo * impuesto
    calcularImpuesto: (impuesto: number) => number;
    // no reciba parametros , 'AP' 'AF 'AT'
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

const ronald: Usuario | number = {
    nombre: 'Ronald',
    apellido: 'Alvarado',
    casado: false,
    sueldo: 396,
    estado: "BN",
    imprimirUsuario: (mensaje) =>{
        return 'El mensaje es: '+ mensaje;
    },

    calcularImpuesto: (impuesto) =>{
        return this.sueldo + this.sueldo * impuesto;
    },

    estadoActual: () =>{
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    },
};
