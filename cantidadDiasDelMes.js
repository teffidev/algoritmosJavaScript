/*Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—.*/

const cantidadDiasMes = mes => {
    let veintiOcho = 28
    let treinta = 30
    let treintaYUno = 31
    
    if(mes > 1 && mes <= 12){
        if(mes === 2){
            return `El mes # ${mes} tiene ${veintiOcho} días`
        }else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
            return `El mes # ${mes} tiene ${treinta} días`
        }else{
            return `El mes # ${mes} tiene ${treintaYUno} días`
        }
    }else{
        return `Por favor ingrese un valor valido`
    }
}
console.log('----Usando If----');
console.log(cantidadDiasMes(10));

//OTRA FROMA CON SWITCH=
let diasEnUnMes = (mes) => {
    switch (mes) {
        case 2:
            return 28
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        default:
            return 31
    }
}
console.log('-----Usando switch------');
console.log(diasEnUnMes(2));