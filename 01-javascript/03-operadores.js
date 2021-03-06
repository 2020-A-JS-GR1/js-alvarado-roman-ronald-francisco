const arreglo = [
    {
        id:1,
        nombre: 'Ronald',
        nota:1
    },
    {
        id:2,
        nombre: 'Juan',
        nota:5
    },
    {
        id:3,
        nombre: 'Roger',
        nota:7
    },
    {
        id:4,
        nombre: 'Jose',
        nota:12
    },
    {
        id:5,
        nombre: 'Daniel',
        nota:10
    },
    {
        id:6,
        nombre: 'Loca',
        nota:2
    },
    {
        id:7,
        nombre: 'Katt',
        nota:14
    },
    {
        id:8,
        nombre: 'Estefy',
        nota:20
    },
    {
        id:9,
        nombre: 'Ana',
        nota:19
    },
    {
        id:10,
        nombre: 'Francisco',
        nota:12
    }
]

//Funciones como parametros

//FIND
// devolcer una expresion -> Truty Falsy
 const respuestaFind = arreglo
     .find(
         function (valorActual,indiceActual,arregloCompleto) {
             console.log('valorActual', valorActual);
             console.log('indiceActual', indiceActual);
             console.log('arregloCompleto', arregloCompleto);
             return valorActual.nombre === "Ronald";
         }
     );
console.log('respuestaFind', respuestaFind);  // undefined

//FINDINDEX
// devolcer una expresion -> Truty Falsy
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Ronald";
        }
    );
console.log('respuestaIndex', respuestaIndex);  // undefined

//FOREACH
const respuestaForEach= arreglo
    .forEach(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
        }
    );
console.log('respuestaForEach', respuestaForEach);  // undefined

//MAP
//devolver Nuevo Elemento
const respuestaMap = arreglo
    .map(
        (valorActual,indiceActual,arregloCompleto) =>{
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };

            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);
console.log('arreglo',arreglo);

const respuestaMapNuevo = arreglo
    .map(
        //Funcion Anonima - > No tiene nombre
        // Funcion de felca gorda
        (valorActual,indiceActual,arregloCompleto) =>{
            return valorActual.nota;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo',arreglo);

//Filter
// devolver Expresion TRUTY FALSY
const respuestaFilter = arreglo
    .filter(
        (valorActual,indiceActual,arregloCompleto) =>{
            return valorActual.nota >=14;
        }
    );

console.log('respuestaFilter', respuestaFilter);
console.log('arreglo',arreglo);

//Deber
//Revisar Teams  nota >= 14


//Hay alguna nota menor a 9

//OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);


//EVERY
// DEVUELVE BOOLEANO
// Todas LAS NOTAS SON MAYORES ? SI NO
// AND

const respuestaAny = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota > 14;
        }
    );
console.log('respuestaAny', respuestaSome);


//Reduce izq ->der
// ReduceRight der -> izq
const respuestaReduce = arreglo
    .reduce(
        (valorAcumulador, valorActual, indice, arreglo) =>{
            return valorAcumulador + valorActual.nota;
        },
        0 //Acumulador
    );
console.log('RespuestaReduce', respuestaReduce)


const  arregloEstudiantesMenoresANueve = arreglo
.map((v)=>v.nota*1.3) //aniadiendo el 30%
.filter((nota)=> nota<9); // Busco a los < 9
const totalPuntosEstudantes = arregloEstudiantesMenoresANueve
    .reduce((acumuldao, actual)=> acumuldao+actual,0); //total
const notaPromedio = totalPuntosEstudantes / arregloEstudiantesMenoresANueve.length;

console.log('RespuestaPromedio', notaPromedio);