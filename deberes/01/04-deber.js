const fs = require('fs');
const inquirer = require('inquirer');


async function main (){
    try{
        console.log('CASA MUSICAL PARRA');
        console.log('----------------------------------------------');
        console.log('CRUD');
        console.log('1. Crear instrumento');
        console.log('2. Eliminar instrumento');
        console.log('3. Actualizar instrumento: ');
        console.log('4. Buscar instrumento');
        console.log('');
        const opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'op',
                    message: 'Seleccione una de las opciones: '
                }
            ]);

        await accion(opcion);
    }catch (e) {
        console.log(e);
    }
}

async function accion(opcion){
    switch (opcion.op) {
        case 1:
            const inst = await crearInstrumento();
            let jsonData = JSON.stringify(inst);
            crear('instrumentos.txt', jsonData);
            break;
        case 2:
            await eliminarInstrumento();

            break;
        case 3:
            const insRead = await ReadFile('instrumentos.txt');
            const codigo = await actualizar();
            const insObject = await JSON.parse(insRead);
            await update(insObject, codigo);
            break;
        case 4:
            const instRead = await ReadFile('instrumentos.txt');
            const cod = await buscar();
            const instObject = await JSON.parse(instRead);
            await search(instObject, cod)
            break;
        default:
            return opcion;
    }

}

async function crearInstrumento() {
    try{
        return  c = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo: '
                },
                {
                    type: 'number',
                    name: 'tipo',
                    message: 'Tipos de instrumentos: \n ' +
                        '1. Viento \n' +
                        '2. Cuerda \n' +
                        '3. Percusion \n' +
                        '4. Intrumentos electricos \n' +
                        'Ingrese el codigo del tipo de instrumento: '
                },
                {
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingrese el nombre: '
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingrese el precio: '
                },
                {
                    type: 'confirm',
                    name: 'material',
                    message: 'Es de madera'
                }
        ]);
    }
    catch (e) {
        console.log(e);
    }
};

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

const WriteFile = (path, contenidoActual, contenidoNuevo ) =>{
    return new Promise(
        (res, rej)=>{
            if(contenidoActual===""){
                fs.writeFile(path,"["+contenidoActual+",\n"+contenidoNuevo+']',"utf-8",

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
            }else{
                fs.writeFile(path,contenidoActual.replace("]","")+",\n"+contenidoNuevo+']',"utf-8",
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

        }
    );
}

async function crear(path, nuevoContenido) {
    try {
        const contenidoArchivoActual = await ReadFile(path);
        console.log(contenidoArchivoActual);
        await WriteFile(path, contenidoArchivoActual, nuevoContenido);
        const nuevoCont = await ReadFile(path, nuevoContenido);
        console.log(nuevoCont);
    }catch (e) {
        console.log(e);
    }

}

async function eliminar () {
    try{
        return opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo a eliminar: '
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}

async function eliminarInstrumento() {
    const instRead = await ReadFile('instrumentos.txt');
    const cod = await eliminar();
    const instObject = await JSON.parse(instRead);
    const valorOb = cod.codigo;

    const respuestaMapNuevo = instObject.map(
        (valorActual,indiceActual,arregloCompleto) =>{

            if(valorActual.codigo === valorOb){
                console.log("indiceActual",indiceActual);
                arregloCompleto.splice(indiceActual, 1);
                console.log(arregloCompleto);
                let jsonData = JSON.stringify(arregloCompleto);
                WriteFileActualizado('instrumentos.txt',jsonData);
            }


        });


};

const WriteFileActualizado = (path, contenidoNuevo) =>{
    return new Promise(
        (res, rej)=>{
            fs.writeFile(path,contenidoNuevo+'\n',{
                    encoding: "utf-8",
                    flag: "w"
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

async function buscar() {
    try{
        return opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo a buscar: '
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}

async function search(arreglo, index) {
    const indice = index.codigo;

    const resp = arreglo.find(
        (v)=>{
            return v.codigo === indice;
        });

    if (resp!==undefined){
        console.log(resp);
    }else{
        console.log("No hay ningun instrumento con ese codigo");
    }
};

async function actualizar() {
    try{
        return opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo a actualizar: '
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}

async function update(arreglo, index) {
    const indice = index.codigo;

    const resp = arreglo.find(
        (v)=>{
            return v.codigo === indice;
        });

    if (resp!==undefined){
        console.log(resp);
        try{
            const elementoEditar = await inquirer
                .prompt([
                    {
                        type: 'number',
                        name: 'opciones',
                        message: 'seleccione la opcion que va a editar: \n' +
                            '1. nombre \n' +
                            '2. precio \n' +
                            '3. material \n' +
                            'Ingrese la opcion: '
                    }
                ]);

            await opcionesActualizar(elementoEditar, indice, arreglo);
        }catch (e) {
            console.log(e);
        }

    }else{
        console.log("No hay ningun instrumento con ese codigo");
    }
};

async function opcionesActualizar(arr, codigoActualizar, arreglo){
    switch (arr.opciones) {
        case 1:
            const nombre = await actualizarNombreInstrumento();
            const arregloModficadoNombre = arreglo.map(
                (v, i, a) => {
                    if(v.codigo === codigoActualizar){
                        v.nombre = nombre.nombre;
                        console.log(a);
                        let jsonData = JSON.stringify(a);
                        WriteFileActualizado('instrumentos.txt',jsonData);
                    }
                }
            );
            break;
        case 2:
            const precio = await actualizarPrecioIntrumento();
            const arregloModficadoPrecio = arreglo.map(
                (v, i, a) => {
                    if(v.codigo === codigoActualizar){
                        v.precio = precio.precio;
                        console.log(a);
                        let jsonData = JSON.stringify(a);
                        WriteFileActualizado('instrumentos.txt',jsonData);
                    }
                }
            );
            break;
        case 3:
            const material = await actualizarMaterialIntrumento();
            const arregloModficadoMaterial = arreglo.map(
                (v, i, a) => {
                    if(v.codigo === codigoActualizar){
                        v.material = material.material;
                        console.log(a);
                        let jsonData = JSON.stringify(a);
                        WriteFileActualizado('instrumentos.txt',jsonData);
                    }
                }
            );
            break;
        default:
            return  arr;

    }
}

async function actualizarNombreInstrumento() {
    try{
        return  c = await inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingrese el nombre: '
                }
            ]);
    }
    catch (e) {
        console.log(e);
    }
};

async function actualizarPrecioIntrumento() {
    try{
        return  c = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingrese el precio: '
                }
            ]);
    }
    catch (e) {
        console.log(e);
    }
};

async function actualizarMaterialIntrumento() {
    try{
        return  c = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'material',
                    message: 'Es de madera'
                }
            ]);
    }
    catch (e) {
        console.log(e);
    }
};


main();