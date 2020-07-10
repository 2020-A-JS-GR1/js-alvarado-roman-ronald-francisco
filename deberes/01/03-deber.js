const fs = require('fs');

const ReadFile = (path) =>{
    return new Promise(
        (res, rej)=>{
            fs.readFile(
                path,
                'utf-8',
                (error, contenido)=>{
                    if(error){
                        console.log('Hubo error');
                        rej(error);
                    }else{
                        res(contenido);
                    }
                }
            )
        }
    );
}


const WriteFile = (path, contenidoNuevo) =>{
    return new Promise(
        (res, rej)=>{
            fs.writeFile(path,'\n'+contenidoNuevo,{
                    encoding: "utf-8",
                    flag: "a"
                },
                (error)=>{
                    if (error) {
                        console.log('Hubo error');
                        rej(error);
                    }else{
                        res(contenidoNuevo);
                        console.log('El archivo ah sido guardado');
                    }
                }
            )
        }
    );
}

async function deber(path, nuevoContenido) {
    try {
        const contenidoArchivoActual = await ReadFile(path);
        console.log(contenidoArchivoActual);
        await WriteFile(path, nuevoContenido);
        const nuevoCont = await ReadFile(path, nuevoContenido);
        console.log(nuevoCont);
    }catch (e) {
        console.log(e);
    }

}

deber('./03-deber.txt', 'Plantom??')