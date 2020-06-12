// Tipos de variables (Mutables e Inmutables)
//Mutables
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";

// Tipos de variables
const numero = 1; //Number
const sueldo = 1.2; //Number
const text = "Ronald"; //String
const booleanooo = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

console.log(typeof numero)
console.log(typeof sueldo)
console.log(typeof text)
console.log(typeof booleanooo)
console.log(typeof hijos)
console.log(typeof zapatos)

//Truty and Falsy

if(""){
    console.log("Es verdadero")
}else{
    console.log("Es Falsy")
}

if("Ronald"){
    console.log("Es Truty")
}else{
    console.log("Es Falso")
}


if(-1){
    console.log("Es Truty")
}else{
    console.log("Es Falsy")
}

if(0){
    console.log("Es Truty")
}else{
    console.log("Es Falsy")
}

if(1){
    console.log("Es Truty")
}else{
    console.log("Es Falsy")
}

if(null){
    console.log("Es Truty")
}else{
    console.log("Es Falsy")
}

if(undefined){
    console.log("Es Truty")
}else{
    console.log("Es Falsy")
}


// orden de impoertancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos JS (JSON) - Arreglos
//Un objeto javascript tiene la siguiente sintaxis

const ronald = {
    nombre: "Adrian", // llave: valor,
    apellido: "Alvarado",
    edad: 25,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '45'
    }
}; //object

ronald.apellido;

//Arreglo de numeros
const arregloNumeros = []; // object

console.log(ronald);
console.log(arregloNumeros);


