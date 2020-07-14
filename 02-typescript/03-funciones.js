function sumarNumeros(numeroInicial) {
    var numeroASumarse = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numeroASumarse[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}

sumarNumeros(1, 2, 3, 4, 5);
//funciones que no devuelven nada
function imprimir(mensaje) {
    console.log('Hola ' + mensaje);
}
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumerosTres = [1, "a", true];
var arregloNumerosCuatro = [1, "a", true];
var arregloNumerosOTexto = ['1', '2'];
arregloNumerosOTexto = [1, 2, 3];
