// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

import {
  getFirestore, //servicios de firestore
  collection, //se crea la base de datos
  addDoc, //añadir datos
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export const GuardarTarea = (titulo, descripcion) => {
  addDoc(collection(db, "tareas"), {
    _titulo: titulo,
    _descripcion: descripcion,
  });
  console.log("se agrego la tarea exitosamente");
};
