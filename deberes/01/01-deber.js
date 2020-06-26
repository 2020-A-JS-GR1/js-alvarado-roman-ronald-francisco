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

//Vocales
const vocales = ['a','e','i','o','u'];
//MAP
//devolver Nuevo Elemento
const arregloMap = arreglo
    .map((valorActual) =>{
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota,
            };
            return nuevoElemento;
        }
    );

const respuestaForEach = arregloMap
    .forEach((valorActual) => {
        valorActual.nombre.split("")
            .forEach(valor=>{
                if(vocales.includes(valor)){
                    valorActual.nota += 0.1;
                }else {
                    valorActual.nota += 0.05;
                }

            })
        console.log("Notas", valorActual.nota);
        }
    );

const EstudiantesPasaron = arregloMap
    .filter((valorActual)=> valorActual.nota>9);
console.log("Estudiante ", EstudiantesPasaron);