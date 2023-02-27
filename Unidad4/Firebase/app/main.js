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
});

//****** Registrar Usuarios ******
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
            var user = userCredential.user;
            console.log('Creaste una cuenta exitosamente');
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
        });
})
