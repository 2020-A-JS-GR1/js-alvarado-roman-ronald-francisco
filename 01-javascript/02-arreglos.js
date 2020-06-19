const arreglo = [6,7,8,9,10];
//arreglo = 1;
let cualquierCosa = "ASD";
cualquierCosa = 1;
cualquierCosa = true;
//Podemos crear un arreglo de varios tipos
const arregloTodo = [
    true, 1, 1.2, "",undefined, null 
];


//Tenemos varios for
//for of
for (let numero of arreglo){  //Valores
    console.log('numero',numero)
}

//for in
for (let indice in arreglo){  // Indices
    arreglo[indice]
    console.log('numero',indice)
}

//Metodos del arreglo
arreglo.push(11);  //Aniadir al final un elemento

arreglo.pop(11);  //Eliminar un elemento

arreglo.unshift(5); //Aniadir alprincipio del arreglo

arreglo.splice(0,1); // Remueve e inserta nuevos elementos

arreglo.splice(0,0,3,4,5); // Remueve e inserta nuevos elementos

const indice = arreglo.indexOf(101);
console.log('indice', indice);
arreglo.splice(indice, 1);





