import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_ku4jTPcRqciPFCu1WuKqpVwUbBzovhs",
  authDomain: "scholarship-portal-2b11n.firebaseapp.com",
  projectId: "scholarship-portal-2b11n",
  storageBucket: "scholarship-portal-2b11n.firebasestorage.app",
  messagingSenderId: "699096637426",
  appId: "1:699096637426:web:25cad7592ccfa82f6d956b",
  measurementId: "G-8D9XGX436S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
};
