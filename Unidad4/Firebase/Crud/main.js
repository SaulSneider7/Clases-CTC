import { GuardarTarea } from "./app/firebase.js";
window.addEventListener("DOMContentLoaded", () => {});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Evita que recargue la pagina
  let titulo = formulario["titulo"].value;
  let descripcion = formulario["descripcion"].value;
  // console.log(titulo, descripcion);

  GuardarTarea(titulo, descripcion);
});
