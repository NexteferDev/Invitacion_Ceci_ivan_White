// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 IMPORTANTE

const firebaseConfig = {
  apiKey: "AIzaSyAlcOdf2_hS60Qmjp8z2Pj8YlszJHdPQxU",
  authDomain: "invitacion-3f389.firebaseapp.com",
  projectId: "invitacion-3f389",
  storageBucket: "invitacion-3f389.firebasestorage.app",
  messagingSenderId: "897801103112",
  appId: "1:897801103112:web:5ef8b1a426cd42969a2ebd"
};

const app = initializeApp(firebaseConfig);

// 🔥 ESTA ES LA LÍNEA QUE TE FALTABA
export const db = getFirestore(app);