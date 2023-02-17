function linkgenerado(){
    //Generar un numero aleatorio
    let id =Math.round(Math.random() * 100);
    return`https://pokeapi.co/api/v2/pokemon/${id}`; 
}

//Manipulacion al DOM = HTML
function abc(data){
    let div = $("<div></div>");
    //Agregar clase addClass
    div.addClass("card");
    
    let img = $("<img></img>");
    //Agregar clase addClass
    img.addClass("card-img");

    img.attr("src",data.sprites.other.home.front_default);

    div.append(img);

    let autor = $("<h3></h3>");
    //Agregar clase addClass
    autor.addClass("card-title")
    autor.append(data.name);

    div.append(autor);

    let p = $("<p></p>");
    p.append(data.id);
    div.append(p);

    $('#imagenes-contenedor').append(div);
}

function getPic(){
    //Consumir API
    $.ajax({
        type: 'GET',
        url: linkgenerado(),
        dataType: "json",
        async: true,
        success: function(data){abc(data)},
    });
}

$(document).ready( function(){
    //Bucle que imprima en la consola un texto 9 veces
    for (let i = 0; i < 200; i++) {
        getPic();
    }
});