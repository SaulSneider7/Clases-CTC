

//Iniciar JQuery
$(document).ready(function(){

    //.CSS
    $("#primero").css({"background":"blue"});

    //.hide
    $("h3").hide();

    $("button").click(function(){
        alert("hola");
    });

    //.click
    $("#btnOcultar").click(function(){
        $("h2").hide();
    });
    //.dblclick
    $("#btnMostrar").dblclick(function(){
        $("h2").show();
    });

    //mouseenter - mouseleave  -> :Hover
    $("#primero").mouseenter(function(){
        $("#tercero").hide('slow');
    });
    $("#primero").mouseleave(function(){
        $("#tercero").show("slow");
    });

    $("#primero").mouseenter(function(){
        $("#tercero").fadeOut();
    });
    $("#primero").mouseleave(function(){
        $("#tercero").fadeIn();
    });


    $("#primero").mouseenter(function(){
        $("#tercero").slideDown();
    });
    $("#primero").mouseleave(function(){
        $("#tercero").slideUp();
    });
});