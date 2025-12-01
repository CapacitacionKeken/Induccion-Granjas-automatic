// firebase.js - pega aquí tu configuración de Firebase si la usarás.
// Si no deseas/puedes usar Firebase, el sistema caerá en un 'modo demo' con localStorage.
(function(){
  window.useFirebase = false; // Cambia a true si configuras Firebase
  // Si quieres usar Firebase, pega aquí tu configuración y coloca useFirebase = true
  // Ejemplo:
  
  window.useFirebase = true;
  const firebaseConfig = {
    apiKey: "AIzaSyDpYfb5HkFvdo-obK0Cju7Xwkda1TFpKPs",
    authDomain: "usuarios-da6ee.firebaseapp.com",
    projectId: "usuarios-da6ee",
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  window.db = db;
  
})();
