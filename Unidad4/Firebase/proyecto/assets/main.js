$(document).ready(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyCZkD-wjeZ0rZ1lPr4dWNb5jNhyyooiIuo",
    authDomain: "unidad4-84750.firebaseapp.com",
    projectId: "unidad4-84750",
    storageBucket: "unidad4-84750.appspot.com",
    messagingSenderId: "1011799768835",
    appId: "1:1011799768835:web:18620ddacb570b3265f336",
    measurementId: "G-Y4VC4BSMFX",
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  console.log(app);

  // Initialize Firebase Authentication
  const auth = firebase.auth();

  //REGISTRAR CUENTA CON CORRREO Y PASSWORD
  $("#registrarse").click(function () {
    let nombre = $("#reg_nombre").val();
    let email = $("#correo").val();
    let password = $("#password").val();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log("se creo tu cuenta correctamente");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  });

  //INCIAR SESION CON CORREO Y PASSWORD

  $("#ingresar").click(function () {
    let email = $("#ini_correo").val();
    let password = $("#ini_pass").val();

    // console.log(email, password);

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("ingresaste correctamente");
            location.href = "home.html";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    });

    // CERRAR SESION
    $("#cerrar_sesion").click(function(){
        firebase.auth().signOut().then(() => {
           console.log("cerraste sesion");
           location.href = "index.html";
          }).catch((error) => {
            // An error happened.
          });
    })
});
