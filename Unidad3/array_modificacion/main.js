// Metodo MAP
let numbers = [2,3,4,5,6,7,8,9,10];

let square = numbers.map(a => a * a);

console.log(square);

// Metodo REDUCE
let numbers2 = [1, 2, 3, 4, 5];
let reducer = numbers2.reduce(function(a,b){
    return a + b;
})

console.log(reducer);



// Metodo Sort
let array = ['Karina', 'Andy', 'David', 'Gianela', 'Milagros', 'Ana'];
array.sort();
console.log(array);

let array2 = [22, 301, 15, 100 ,20, 33];
array2.sort(function(a, b){
    return a - b;
});
console.log(array2);


// Metodo Reverse
let array3 = [1,2,3,4,5];
console.log(array3);

array3.reverse();
console.log(array3);

//Metodo Split
 let cadena = 'David Cesar, Martines Sedano';
 console.log(cadena);

 let cadena2 = cadena.split(" ", 2);
 console.log(cadena2);


 //Metodo Join

 let a = ['Viento', 'Lluvia', 'Fuego'];
 console.log(a);

 let b = a.join();
 console.log(b);

 let c = a.join(' + ');
 console.log(c);

 let d = a.join('');
 console.log(d);

 let e = a.join(', ');
 console.log(e);