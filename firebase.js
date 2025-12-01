
// Importar funciones de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpYfb5HkFvdo-obK0Cju7Xwkda1TFpKPs",
  authDomain: "usuarios-da6ee.firebaseapp.com",
  projectId: "usuarios-da6ee",
  storageBucket: "usuarios-da6ee.firebasestorage.app",
  messagingSenderId: "587797793570",
  appId: "1:587797793570:web:ddb3696b13398b728b337b",
  measurementId: "G-MMPPGM6H40"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore (base de datos donde se guardan las CURP)
const db = getFirestore(app);

// Inicializar Analytics (opcional)
const analytics = getAnalytics(app);

// Exportar base de datos
export { db };
