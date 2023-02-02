// =======================
// **** Crear Objetos *****
// =======================
//Forma1 de crear objeto
let persona1 = {};
//Forma2 de crear objeto
let persona2 = new Object();


// =======================
// *** Añadir Atributos ***
// =======================
//Forma1
persona1.nombre = 'Pepito';
persona1.apellido = 'Reyes';
// Forma2
persona1["edad"] = 12;
console.log(persona1);


// =======================
// *** Mostrar Datos ***
// =======================
//Forma1
console.log(persona1.nombre);
//Forma2
console.log(persona1["nombre"]);


// ===========================
// *** Actualizar Datos ***
// ===========================
//Forma1
persona1.nombre='Juan';
console.log(persona1);
//Forma2
persona1["nombre"] = 'Maria';
console.log(persona1);

// *************************