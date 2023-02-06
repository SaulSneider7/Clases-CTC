// Mostrar y Ocultar utilizando JavaScript

//Buscar o ubicar elemento por su Id
let boton1 = document.querySelector("#btnOcultar");
let boton2 = document.getElementById("btnMostrar");

boton1.onclick = OcultaTexto;
boton2.onclick = MostrarTexto;

function OcultaTexto() {
    document.getElementById("parrafo").style.display = 'none';
}

function MostrarTexto() {
    document.getElementById("parrafo").style.display = 'block';
}

// Mostrar y Ocultar utilizando Jquery

$(document).ready(function(){
    
    $("#btnOcultar2").on("click", function(evento){
        $("#parrafo").hide('slow');
    });

    $("#btnMostrar2").click(function(evento){
        $("#parrafo").show('slow');
    });

});
