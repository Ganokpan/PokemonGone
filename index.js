// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsWfIvzOJOUNj5BibRyHM-0SUwI0DL9cM",
    authDomain: "pokemonlist-f1088.firebaseapp.com",
    databaseURL: "https://pokemonlist-f1088-default-rtdb.firebaseio.com",
    projectId: "pokemonlist-f1088",
    storageBucket: "pokemonlist-f1088.appspot.com",
    messagingSenderId: "638235310865",
    appId: "1:638235310865:web:c0a795e9fcde657354eab0",
    measurementId: "G-X16NNFT75F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of ground from your database เรียกใช้ข้อมูลธาตุดินจากดาต้าเบส
async function getground(db) {
    const ground = collection(db, 'ground');
    const groundSnapshot = await getDocs(ground);
    const groundList = groundSnapshot.docs.map(doc => doc.data());
    return groundList;
  }
const ground = await getground(db);
var i = 0;
console.log(ground[i]);
//document.getElementById("bay").innerHTML = ground[0];
