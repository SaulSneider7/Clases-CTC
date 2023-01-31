class Player {
    constructor(nombre, color){
        this._nombre = nombre;
        this._color = color;
    }
    saltar(){

    }
    correr(){

    }
    saludar(){
        return `Hola mi nombre es ${this._nombre} y mi sobrero es de color ${this._color}`;
    }
}

let player1 = new Player('Mario', 'Rojo');
console.log(player1);

let player2 = new Player('Luigi', 'Verde');
console.log(player2);

console.log(player1.saludar());
console.log(player2.saludar());



// let nombre = "Pedro";
// let edad = 15;

// console.log('Hola tu nombre es ' + nombre + ' y tienes ' + edad + ' años');
// console.log(`Hola tu nombre es ${nombre} y tienes ${edad} años`);


