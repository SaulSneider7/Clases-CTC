$(document).ready(function () {



    const firebaseConfig = {
        apiKey: "AIzaSyCZkD-wjeZ0rZ1lPr4dWNb5jNhyyooiIuo",
        authDomain: "unidad4-84750.firebaseapp.com",
        projectId: "unidad4-84750",
        storageBucket: "unidad4-84750.appspot.com",
        messagingSenderId: "1011799768835",
        appId: "1:1011799768835:web:18620ddacb570b3265f336",
        measurementId: "G-Y4VC4BSMFX"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.log(app);


    //==============================
    //Registrar Usuarios 
    //============================== 
    //Seleccionando el boton registrar
    $("#btn-registrar").click(function () {
        //Capturar el email y el password
        let email = $("#email").val();
        let password = $("#password").val();

        // console.log(email, pass); //comprobamos si captura los datos


        //Metodo de firebase que registra usuarios
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                Swal.fire(
                    'Se logro!!',
                    'Creaste una cuenta exitosamente!',
                    'success'
                  )
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocurrio un error!',
                  })
            });
    });

    //=========================================
    // Ingresar con nuestro Correo Registrado
    //=========================================

   
    $("#btn-iniciar").click(function () {
        //Capturar el email y el password
        let correo = $("#email").val();
        let pass = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(correo, pass)
            .then((userCredential) => {
                // Signed in
                Swal.fire({
                    title: '¡Alerta!',
                    text: '¿Está seguro de que desea ir a la página siguiente?',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    allowOutsideClick: true // permite cerrar la alerta haciendo clic fuera del modal
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = "home.html"; // redirecciona a otra página
                    }
                  });
                  
                // window.location.href = 'home.html';
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                alert("No se pudo iniciar Sesion");
            });
    });

    //==============================
    //Cerrar Sesion
    //============================== 
    
    $("#salir").click(function () {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.href = "index.html";
        })
    });




});

