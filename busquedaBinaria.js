// Binary search
/*Si yo veo que la lista no esta ordenada, la debemos ordenar...
En este caso nos la dan ordenada: */

/*Busqueda lineal es que coge una lista y empieza a comparar si
el numero que sigue es menor al que busco y sigue iterando.*/

/*Busqueda binaria, la lista si debe estar ordenada y siempre parte a la
mitad la lista para evaluar y si no vuelve y lo parte a la mita, hasta
saber cual es la parte en la que va a trabajar*/

let lista = [2, 5, 7, 12, 15, 21]

let buscar = 15

/*De ahora en más y para buenas practicas, las funciones siempre 
las vamos a declarar con const:*/

/*Busqueda binaria*/
const busqueda = (array, elemento) => {
    /*Vamos a trabajar siempre con los extremos*/
    let izquierda = 0
    let derecha = array.length - 1

    while (izquierda <= derecha) { 
        //Cuando esto no se cumpla, sale del ciclo While y nos da el return que pusimos por fuera...
        const medio = Math.floor((izquierda + derecha) / 2)

        if (array[medio] === elemento) { // 7 === 15 : Como es False, continua con la condición...
            return medio
        }

        if (array[medio] > elemento) { // 7 > 15 : Tambien es false
            derecha = - 1
        } else {
            izquierda = medio + 1 // 7 < 15 : true
        }
    }
    return "El elemento buscado no se encontro"
}

busqueda(lista, buscar)
console.log(busqueda(lista, buscar));

// console.log(lista.indexOf(15));