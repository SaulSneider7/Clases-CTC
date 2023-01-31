//Ejemplo Pila
class Pila{
    //Creamos constructor
    constructor(){
        this.Pila = [];
    }
    //agregar un elemento al final del array
    push(item){
        this.Pila.push(item);
        return this.Pila;
    }
    //Metodo para eliminar elemento
    pop(){
        return this.Pila.pop();
    }
    //Metodo que retorne el ultimo valor ingresado
    ultimoValor(){
        return this.Pila[this.Pila.length -1];
    }
    //Metodo que retorna el cantidad de elementos del array
    longitud(){
        return this.Pila.length;
    }
    //Muestre el contenido del array en la consola
    mostrar(){
        console.log(this.Pila);
    }
}


let abc = new Pila();
console.log(abc);
console.log(abc.longitud());
console.log(abc.push('Naranja'));
console.log(abc.push('Manzana'));
console.log(abc.longitud());
abc.mostrar();
