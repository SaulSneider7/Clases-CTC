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

  // Initialize Cloud Firestore and get a reference to the service
  const db = firebase.firestore();

  // Iniciar Google
  var provider = new firebase.auth.GoogleAuthProvider();

  // =========================
  // SESIONES CON FIREBASE
  // =========================

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
        //usamos la funcion creada para guardar el nombre
        addNombre(nombre);
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

  //INICIAR SESION CON GOOGLE
  $("#google").click(function () {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("iniciaste sesion con Google");
        window.location.href = "home.html";
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });

  // CERRAR SESION
  $("#cerrar_sesion").click(function () {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("cerraste sesion");
        location.href = "index.html";
      })
      .catch((error) => {
        // An error happened.
      });
  });

  // MANEJO DE SESIONES
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var email = user.email;
      var usuario = user.displayName;
      // console.log(email," - ", usuario," - ", uid);
      // console.log(user);
      console.log(email, " - ", usuario);
      // ...
    } else {
      // User is signed out
      // ..
    }
  });

  //AÑADIR NOMBRE
  function addNombre(nombre) {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: nombre,
      })
      .then(() => {
        console.log("se actualizo el nombre");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  // =========================
  // CRUD CON FIREBASE
  // =========================

  // CREAR PUBLICACIONES
  $("#publicar").click(function (e) {
    e.preventDefault();
    let post = $("#texto").val();
    const user = firebase.auth().currentUser;

    db.collection("posteos")
      .add({
        _publicacion: post,
        _idUser: user.uid,
        _nombreUser: user.displayName,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  });

  //MOSTRAR DATOS EN EL HTML
  function mostrarDatos(data) {
    const user = firebase.auth().currentUser;
    if (data.length > 0) {
      $("#post").empty();
      let html = "";
      data.forEach((doc) => {
        var post = doc.data();
        var div = ``;
        if (user.uid == post.idUser) {
          div = `
          <div class="card bg-dark text-white  mt-3 mx-auto" style="max-width: 800px;">
            <div class="card-body">
              <p>${post.mensaje}</p>
              <p>Publicado por ${post.userName}</p>
              <button data-id="${doc.id}" class="btn btn-success btn-edit-post bi bi-pencil">
                Editar
              </button>
              <button data-id="${doc.id}" class="btn btn-danger btn-delete-post bi bi-trash">
                Eliminar
              </button>
            </div>
          </div>
        `;
        } else {
          div = `
          <div class="card bg-dark text-white  mt-3 mx-auto" style="max-width: 800px;">
            <div class="card-body">
              <p>${post.mensaje}</p>
              <p>Publicado por ${post.userName}</p>
            </div>
          </div>
        `;
        }

        html += div;
      });
      $("#postList").append(html);
      // Agregar escucha a todos los botones edit
      var btnsEdit = document.querySelectorAll(".btn-edit-post");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          var id = e.target.dataset.id;
          // le paso el identificador a una funcion para actualizar dicho documento
          obtienePost(id);
        });
      });
      // Agregar escucha a todos los botones delete
      var btnsDelete = document.querySelectorAll(".btn-delete-post");
      btnsDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          var id = e.target.dataset.id;
          // le paso el identificador a una funcion para eliminar dicho documento
          deletePost(id);
        });
      });
    }
  }
});
