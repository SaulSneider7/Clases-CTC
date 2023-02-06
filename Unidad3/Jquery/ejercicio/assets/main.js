

//Iniciar JQuery
$(document).ready(function(){

    //.CSS
    $("#primero").css({"background":"blue"});

    //.hide
    $("h3").hide();

    $("button").click(function(evento){
        alert("hola");
    });

    //.click
    $("#btnOcultar").click(function(evento){
        $("h2").hide();
    });
    //.dblclick
    $("#btnMostrar").dblclick(function(evento){
        $("h2").show();
    });

    //mouseenter - mouseleave  -> :Hover
    $("#primero").mouseenter(function(evento){
        $("#tercero").hide('slow');
    });
    $("#primero").mouseleave(function(evento){
        $("#tercero").show("slow");
    });

    $("#primero").mouseenter(function(evento){
        $("#tercero").fadeOut();
    });
    $("#primero").mouseleave(function(evento){
        $("#tercero").fadeIn();
    });


    $("#primero").mouseenter(function(evento){
        $("#tercero").slideDown();
    });
    $("#primero").mouseleave(function(evento){
        $("#tercero").slideUp();
    });
});