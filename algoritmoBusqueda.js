/*Crear una función que te permita imprimir 
por consola el nombre correspondiente a la 
siguientes edades: 25 - 76 - 16 - 15 */

const edad = 25

const buscarEdades = (array, elemento) => {
    let izquierda = 0
    let derecha = array.length - 1

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2)
        if (array[medio].edad === elemento) {
            return medio            
        }

        if (array[medio].edad < elemento) {
            izquierda = medio + 1
        }else {
            derecha = - 1
        }
    }
    return "El elemento buscado no se encontró"
}
buscarEdades(personas, edad)
console.log(buscarEdades(personas, edad));

// console.log(personas.edad[i].indexOf(25));