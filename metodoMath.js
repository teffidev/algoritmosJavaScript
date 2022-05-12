//ALGORITMOS

const numeros = [2, 15, 7, 48, 1, 1, 48, 16, 21];
// Introduccion al metodo Math

/*Para usar el Math con el max o el min en un arreglo, 
debo siempre usar los tres puntos (Spread Operator) */
console.log('---Math.max(...nameArray)= Encuentra el maximo numero en un array:---');
console.log(Math.max(...numeros));
console.log('---Math.max(5, 9, 12, 16)= Encuentra el maximo numero:---');
console.log(Math.max( 5, 9, 12, 16));
console.log('---Math.min(5, 9, 12, 16)= Encuentra el minimo numero:---');
console.log(Math.min( 5, 9, 12, 16));
console.log('---Math.floor(5.2)= Redondea el numero hacia el de abajo:---');
console.log(Math.floor(5.2));
console.log('---Math.ceil(5.2)= Redondea el numero hacia el de arriba:---');
console.log(Math.ceil(5.2));
console.log('---Math.round(5.4)= Redondea con la ley 0.5:---');
console.log(Math.round(5.4));
console.log('---Math.round(5.7)= Redondea con la ley 0.5:---');
console.log(Math.round(5.7));