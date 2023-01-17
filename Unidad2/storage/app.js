
function dev() {
    var nombreUsser = document.getElementById("a").value;

    localStorage.setItem("abc",nombreUsser);

    // Ir a otra pagina
    location.href = "index2.html";
}


function muestra(){
    document.getElementById("b").innerHTML += localStorage.getItem("abc");
}

muestra();



