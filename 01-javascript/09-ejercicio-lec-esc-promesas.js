const fs = require('fs');
//
/*
Hacer una funcion que me acepte como parametro una variable con el path
del archivo y el contenido a agregar al contenido
del archivo. La fucnion debe tomar estos dos parametros y leer el archivo
y aniadir el texto al final del archivo.Al final
vamos a leer el archivo nuevamente e imprmirlo en consola.
TODOO esto debe ser realizado con promesas
 */

function promesaReadFile(path, contenidoI) {
    const miPrimerPromesaReadFile = new Promise( //Definicion de la promesa
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',
                (error, contenido)=>{
                    if(error){
                        reject('Hubo error');
                    }else{
                        console.log(contenido);
                        resolve(contenidoI);
                    }
                }

            )
        }
    );
    return miPrimerPromesaReadFile
}


function promesaWriteFile(path, contenidoNuevo){
    const miPrimerPromesaWriteFile = new Promise( //Definicion de la promesa
        (resolve, reject)=>{
            fs.writeFile(path,'\n'+contenidoNuevo,{
                    encoding: "utf-8",
                    flag: "a"
                },
                (error)=>{
                    if (error) {
                        reject('Hubo error');
                    }else{
                        resolve(contenidoNuevo);
                        console.log('El archivo ah sido guardado');
                    }

                }
            )
        }
    );
    return miPrimerPromesaWriteFile

}
promesaReadFile('06-ejemplo.txt', 'Y')
    .then(
        (c)=>{
            console.log('Contenido then',c);
            return promesaWriteFile('06-ejemplo.txt',c); // promesa!
        }
    )
    .then(
        (co)=>{
            return promesaReadFile('06-ejemplo.txt', co);
        }
    )
    .catch(
        (error)=>{
            console.error('Conteido catch', error);
        }
    )

