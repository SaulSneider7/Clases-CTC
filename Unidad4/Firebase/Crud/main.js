import { GuardarTarea, ListarTareas } from "./app/firebase.js";

let contenedor = document.getElementById("contenedor");

window.addEventListener("DOMContentLoaded", async () => {
  let lista = await ListarTareas();
  // console.log(lista);
  lista.forEach((doc) => {
    console.log(doc.data()._titulo);

    let tarea = doc.data()._titulo;
    let html = `
      <div>
        <h3 id='aaa'></h3>
      </div>
    `

    
    contenedor.innerHTML = tarea;
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


