import { GuardarTarea, ListarTareas, OnListarTareas } from "./app/firebase.js";

let contenedor = document.getElementById("contenedor");

window.addEventListener("DOMContentLoaded", async () => {
  // let lista = await ListarTareas();
  // console.log(lista);
  OnListarTareas((lista) => {
    let html = "";

    lista.forEach((doc) => {
      // console.log(doc.data();

      let tarea = doc.data();

      html += `
      <div>
        <h3 class="text-primary mt-3">${tarea._titulo}</h3>
        <p>${tarea._descripcion}</p>
      </div>
    `;

      contenedor.innerHTML = html;
    });
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
