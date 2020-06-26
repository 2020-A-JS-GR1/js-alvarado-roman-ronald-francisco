

function soloNumeros(a,b,c) {
    return a -b +c;
}

function soloLetras(a,b,c) { //undefined
    console.log(a,b,c);
}

soloNumeros('a', true, [1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,);
soloLetras();

//Funciones nombradas
function funcionNombrada() {};
funcionNombrada();

const funcionNombradaDos = function () {}; // funciones ANONIMAS
var funcionNombradaTres = function () {}; // funciones SIN NOMBRE
let funcionNombradaaCuatro = function opcional() {}; // funciones ANONIMAS
funcionNombrada();
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaaCuatro();
//opcional () NO EXISTO

const funcionNombradaCinco = ()=>{}; //FAT ARROW FUNCTIONS
const funcionNombradaSeis = (x) => {
    return x +1
};//FAT ARROW FUNCTIONS
const funcionNombradaSiete = (x) => x+1;//FAT ARROW FUNCTIONS
                                        // Una sola linea
                                        //Omito Return
                                        //Omito llaves

const funcionNombradaSiete = x => x+1; //TENGO SOLO UN PARAMETRO
                                        //Omito los parentesis
const funcionNombradaSiete = (x,y,z) =>  x +y +z;

function sumarNumeros(numeroInicial, ...otrosNumeros){ //Parametros Infinitos
    return numeroInicial + otrosNumeros.reduce((a, v) => a +v,0);
};

sumarNumeros(1,2,3,4,5,6,9,8,7);

