/*Crear una función que reciba dos parámetros: 
un array y un índice. 
La función deberá mostrar por consola el valor del elemento según el 
índice dado.*/

const numArray = [3, 6, 67, 6, 23, 11, 100, 8, 93]

const encontrarIndice = (x, y) => {
    for(let i = 0; i < x.length; i++){
        return `Tu indice es igual a ${x[y]}` 
    }
}
console.log(encontrarIndice(numArray, 5))