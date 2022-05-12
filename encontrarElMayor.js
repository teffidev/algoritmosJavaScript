/*ALGORITMOS
Encontrar el mayor entre 2 numeros: */

let encontrarMayor = (num1, num2) => {
    // if(num1 > num2){
    //     return num1
    // }else{
    //     return num2
    // }
    //ternario, siempre ponemos el return antes de la condición
    return num1 > num2 ? num1 : num2; //ternario
};
console.log("---El mayor de 2 numeros:---");
console.log(encontrarMayor(15,25));

/*¿Cómo harian para que con esa funcion sacar 
el mayor entre 3 numeros*/

console.log("---El mayor de 3 numeros:---");
console.log(encontrarMayor(encontrarMayor(250, 85), 110));

/*¿Cómo harian para que con esa funcion sacar 
el mayor entre 4 numeros*/

/*Si lo quiero guardar en una variable*/
let resultado = encontrarMayor(
    encontrarMayor(250, 85), 
    encontrarMayor(350, 650));
console.log("---El mayor de 4 numeros:---");
console.log(resultado);

/*¿Cómo harian para que con esa funcion sacar 
el mayor entre 5 numeros*/

console.log("---El mayor de 5 numeros:---");
console.log(
    encontrarMayor(
    87,
    encontrarMayor(encontrarMayor(35, 15), encontrarMayor(48, 65)))
);

/*Hagamos lo anterior con variables:*/

let res1 = encontrarMayor(35, 15);
let res2 = encontrarMayor(48, 65);

console.log("---El mayor de 5 numeros con variables:---");
console.log(encontrarMayor(25, encontrarMayor(res1, res2)));