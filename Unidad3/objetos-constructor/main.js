let nombre = 'Pedro';
nombre = 'Pablo';

let edad = 21;
let alumno = true;

let fruta = 'Manzana';
let frutas = ['Manzana', 'Pera', 'Plantano'];

let usuario = {
    nombre: 'Juan',
    edad: 15,
    estudiante: true,
    idiomas: {
        nativo: 'Español',
        extranjeros:{
            ingles: 'Avanzado',
            frances: 'Medio',
            aleman: 'basico'
        }
    }
}

console.log(nombre);
console.log(edad);
console.log(alumno);

console.log(fruta);
console.log(frutas);

console.log(usuario);
console.log(usuario.estudiante);
console.log(usuario.nombre);
console.log(usuario.edad);

// // Agregar al Objeto
usuario.carrera = 'Desarrollo web';
console.log(usuario);

// Eliminar
delete usuario.estudiante;
console.log(usuario);

console.log(usuario.idiomas.extranjeros)
console.log(usuario.idiomas);

//*********Crear 2 Objetos*********

let disco1 = {
    artista: 'Jesse y Joy',
    album: 'Exitos',
    año: 2012
}
console.log(disco1);

let disco2 = {
    artista: 'Bruno Mars',
    album: 'Magic',
    año: 2020
}
console.log(disco2);

// ==== Constructor ====
function Disco(artista, album, año){
    this._artista = artista;
    this._album = album;
    this._año = año;
}
// ====================
let disco3 = new Disco('Benito', 'abc',2022);
console.log(disco3);