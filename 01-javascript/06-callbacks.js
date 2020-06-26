
const fs = require('fs');

console.log('Primero'); //SINCRONA

fs.readFile( //ASINCRONA
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido)=>{ // CALLBACK
        console.error('Segundo');
        if (error){
            console.error('Hubo error', error);
        }else{
            console.error(contenido);
        }
    }
)

const  suma = 5+3; //SINCRONA
console.log('Suma', suma); //SINCRONA
console.log('Final'); //SINCRONA