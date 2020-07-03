const fs = require('fs');


function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject)=>{
            if(numero%2==0){
                resolve(numero);
            }else {
                reject('No es par =(');
            }
        }
    );
    return miPrimerPromesa
}

promesaEsPar(1)
    .then(
        (contenido)=>{
            console.log('Conteido then', contenido);
        }
    )
    .catch(
        (error)=>{
            console.error('Conteido catch', error);
        }
    )

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject)=>{
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa;
}

promesaEsPar(2)
    .then(
        (numeroPar)=>{
            console.log('Conteido then', numeroPar);

            /* NO HACER ESTO
            promesaEsPar(1)

                .then(
                    (contenido)=>{
                        console.log('Conteido then', contenido);
                    }
                )
                .catch(
                    (error)=>{
                        console.error('Conteido catch', error);
                    }
                )
            */
            return promesaElevarAlCuadrado(numeroPar); // promesa!
        }
    )
    .then(
        (numeroParAlCuadrado)=>{
            console.log('Numero par al cuadrado: ', numeroParAlCuadrado);
        }
    )
    .catch(
        (error)=>{
            console.error('Conteido catch', error);
        }
    )