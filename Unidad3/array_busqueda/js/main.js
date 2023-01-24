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

console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(3, 3));
console.log([1, 2, 3].includes(3, -1));
console.log([1, 2, NaN].includes(NaN));

// Aplicando lo aprendido4
// =========Find===========


function dev(element, index, array) {
    let i = 2;
    while(i <= Math.sqrt(element)){
        if (element % i++ <1){
            return false;
        }
    }
    return element > 1;
}

console.log([4, 5, 8, 12].find(dev)); 




