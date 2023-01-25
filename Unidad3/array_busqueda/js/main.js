// Aplicando lo aprendido1
// =========IndexOf===========

// let array = [2, 9, 5, 2];

// console.log(array.indexOf(5)); //devuelve la posicion

// //cuando no se encuentra el valor devuelve -1
// console.log(array.indexOf(0))


// Aplicando lo aprendido2
// =========LastIndexOf===========

// let array = [2, 5, 9, 2];

// console.log(array.lastIndexOf(2, 2));
// console.log(array.lastIndexOf(2, 3));
// console.log(array.lastIndexOf(2, -1));




// Aplicando lo aprendido3
// =========Includes===========

// console.log([1, 2, 3].includes(2));
// console.log([1, 2, 3].includes(4));
// console.log([1, 2, 3].includes(3, 3));
// console.log([1, 2, 3].includes(3, -1));
// console.log([1, 2, NaN].includes(NaN));

// Aplicando lo aprendido4
// =========Find===========

let array = [5, 8, 13, 21, 34];

// function buscar(item) {
//     return item > 20;
// }

let item = array.find(a => a>20)
console.log(item);



// Aplicando lo aprendido5
// =========Filter===========

function mayor(a) {
    return a >= 10;
}

let filtrado = [12, 5, 8, 130, 44].filter(mayor);
console.log(filtrado);