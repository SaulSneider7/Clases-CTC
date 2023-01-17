function mostrarNombre(){
    document.getElementById("dev").innerHTML += localStorage.getItem("abc");
}

mostrarNombre();


function encriptar() {

    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);
    document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;
}



function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
    // alert(mensajeDesencriptado);
    document.getElementById("msjReal").innerHTML = mensajeDesencriptado;

}