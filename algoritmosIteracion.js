//ALGORITMOS DE ITERACIÓN Y TOMA DE DECISIONES
//INGRESANDO AL MODULO 3 !ALGORITMOS¡

//Ejercicio 1 . Playground
//Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

let numMayorDeTres = (num1, num2, num3) => {
    let resultado = 0
    for(let i = 0; i < num1; i++){
        if(num1 > num2){
            resultado = num1
        }else if(num2 > num3){
            resultado = num2
        }else{
            resultado= num3
        }
    }
    return resultado
}
let resNumMayorDeTres = numMayorDeTres(43, 78, 14)
console.log('---Soy el mayor de los tres:---');
console.log(resNumMayorDeTres);

//Ejercicio 2 - Playground

let number1 = 13;
let number2 = 1663;
let number3 = 3363;
let number4 = 580;
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.

let numMayorDeLosCuatro = (number1, number2, number3, number4) => {
    let elMayorDeLosCuatro = 0
    for(let i = 0; i < number1; i++){
        if(number1 > number2){
            elMayorDeLosCuatro = number1
        }else if(number2 > number3){
            elMayorDeLosCuatro = number2
        }else if(number3 > number4){
            elMayorDeLosCuatro = number3
        }else{
            elMayorDeLosCuatro = number4 
        }
    }
    return elMayorDeLosCuatro  
}
let resNumMayorDeLosCuatro = numMayorDeLosCuatro(13, 1663, 3363, 580)
console.log('---Soy el mayor de los cuatro:---');
console.log(resNumMayorDeLosCuatro);


//Ejercicio 3 - Playground

/*Extra: que puedes hacer para identificar
el numero mayor de una lista de numeros,
como la siguiente? Utiliza Javascript.

Tip: es valido buscar en google :)

Adicional: al terminar tu algoritmo,
cambia los valores de la lista, bien sea
agregando o removiendo, y asegurate
que tu algoritmo funcione con cualquier lista
de numeros*/

const numeros = [5, 12, 2, 40, 33, 2, 8];

let numeroMayor = (array) => {
    let elMayor = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > elMayor){
            elMayor = array[i]
        }
    }
    return elMayor
}
let resElMayor = numeroMayor(numeros)
console.log('---El mayor del array numeros es:-----');
console.log(resElMayor);