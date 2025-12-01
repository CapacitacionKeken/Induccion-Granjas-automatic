// firebase.js - pega aquí tu configuración de Firebase si la usarás.
// Si no deseas/puedes usar Firebase, el sistema caerá en un 'modo demo' con localStorage.
(function(){

  window.useFirebase = true;
  const firebaseConfig = {
  apiKey: "AIzaSyDpYfb5HkFvdo-obK0Cju7Xwkda1TFpKPs",
  authDomain: "usuarios-da6ee.firebaseapp.com",
  projectId: "usuarios-da6ee",
  storageBucket: "usuarios-da6ee.firebasestorage.app",
  messagingSenderId: "587797793570",
  appId: "1:587797793570:web:ddb3696b13398b728b337b",
  measurementId: "G-MMPPGM6H40"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  window.db = db;
  
})();
