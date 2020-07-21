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
    nombre: "Ronald", // llave: valor,
    apellido: "Alvarado",
    edad: 25,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '45'
    },
}; //object

//Acceder a las propiedades del objeto
ronald.apellido;
ronald.edad;

//Otra sintaxis para acceder a los valores
ronald["nombre"]; // Ronald

//sobrescribir
ronald.nombre = "";
console.log(ronald);

//se puede agregar nuevos atrobutos
ronald.sueldo; //undefined

ronald.sueldo = 1.2; // 1.2
ronald["gastos"] = 0.8; // 0.8

//Eliminar el valor de una llave
ronald.gastos = undefined;

delete ronald.gastos; // Elimina de verdad la variable gastos sin ubicar el undefined

// La clase objeto
//Para obtener las llaves de un objeto 
Object.keys(ronald);

//Para obtener los valores de un objeto 
Object.values(ronald);

//Variables por valor en JS
//number
//string
//boolean
//undefined
let edadRonald = 31;
let edadFrancisco = edadRonald;

console.log(edadRonald); // 31
console.log(edadFrancisco); // 31
edadRonald = edadRonald + 1;
console.log(edadRonald); // 32
console.log(edadFrancisco); // 32

//Variables por referencia em JS
let rafael = {
    nombre: "Rafael"
}

let lenin = rafael;

console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
console.log(rafael);
console.log(lenin);


delete rafael.nombre;
console.log(rafael);
console.log(lenin);

let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

//Arreglo de numeros
const arregloNumeros = []; // object

console.log(ronald);
console.log(arregloNumeros);


