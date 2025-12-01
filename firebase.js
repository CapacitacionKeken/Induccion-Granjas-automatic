// firebase.js - pega aquí tu configuración de Firebase si la usarás.
// Si no deseas/puedes usar Firebase, el sistema caerá en un 'modo demo' con localStorage.
(function(){
  window.useFirebase = false; // Cambia a true si configuras Firebase
  // Si quieres usar Firebase, pega aquí tu configuración y coloca useFirebase = true
  // Ejemplo:
  
  window.useFirebase = true;
  const firebaseConfig = {
    apiKey: "AIzaSyDK4tg6FCdfcDN9BLEc2VqnHg_MRM1-SUo",
    authDomain: "enero-5d9ea.firebaseapp.com",
    projectId: "enero-5d9ea",
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  window.db = db;
  
})();
