import { GuardarTarea, ListarTareas } from "./app/firebase.js";


window.addEventListener("DOMContentLoaded", async () => {
    let lista = await ListarTareas();
    // console.log(lista);
    lista.forEach((doc) => {
        console.log(doc.data()._descripcion);
    });
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Evita que recargue la pagina
  let titulo = formulario["titulo"].value;
  let descripcion = formulario["descripcion"].value;
  // console.log(titulo, descripcion);

  GuardarTarea(titulo, descripcion);

  formulario.reset(); //limpiamos el formulario
});
