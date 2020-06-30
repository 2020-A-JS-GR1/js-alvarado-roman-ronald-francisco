const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y aniadir el texto al final del archivo.
*/

function escribirArchivo(path, contenidoNuevo) {

    //fs.readFile (path,codificaion, callback(error, contenido));
    //fs.writeFile(path, contenido, codificacion, callback(error));
    fs.readFile(
        path,
        'utf-8',
        (error, contenido)=>{
            if(error){
                console.error('Hubo error', error);
            }else{
                console.error(contenido);
                fs.writeFile(path,'\n'+contenidoNuevo,{
                        encoding: "utf-8",
                        flag: "a"
                    },
                    (error)=>{
                        if (error) throw error;
                        console.log('El archivo ah sido guardado');
                    }
                )
            }
        }
    )



}
escribirArchivo('./06-ejemplo.txt', 'Nuevo contenido 5');