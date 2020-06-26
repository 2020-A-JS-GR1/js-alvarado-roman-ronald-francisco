const adrian = {
    nombre: "Adrian"
};
const carolina = {
    apellido: "Eguez"
};

const adrianCarolina = {
    ...adrian,
    ...carolina,
};

adrianCarolina.nombre = "Carolina";

console.log('AdrianCarolina', adrianCarolina);
console.log('adrain', adrian);

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo=[
    ...arregloUno,
    ...arregloDos
];
superArreglo[0]=100;
console.log('superArreglo',superArreglo);
console.log('arregloUno',arregloUno);