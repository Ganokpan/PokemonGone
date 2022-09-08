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

// Get a list of Pokemon from database เรียกใช้ข้อมูลโปเกม่อนทั้งหมดจากดาต้าเบส
/*console.log("******List of Pokemon******");
async function getpokemon(db) {
  const pokemon = collection(db, 'pokemon');
  const pokemonSnapshot = await getDocs(pokemon);
  const pokemonList = pokemonSnapshot.docs.map(doc => doc.data());
  return pokemonList;
}
const pokemon = await getpokemon(db);
console.log(pokemon); //พิมพ์ข้อมูลของธาตุGroundทั้งหมด

// Get a list of ground from database เรียกใช้ข้อมูลธาตุดินจากดาต้าเบส
console.log("******List of Pokemon ground type******");
async function getground(db) {
  const ground = collection(db, 'ground');
  const groundSnapshot = await getDocs(ground);
  const groundList = groundSnapshot.docs.map(doc => doc.data());
  return groundList;
}
const ground = await getground(db);
console.log(ground); //พิมพ์ข้อมูลของธาตุGroundทั้งหมด

//Get a list of fire from database เรียกใช้ข้อมูลธาตุไฟจากดาต้าเบส
console.log("******List of Pokemon fire type******");
async function getfire(db) {
  const fire = collection(db, 'fire');
  const fireSnapshot = await getDocs(fire);
  const fireList = fireSnapshot.docs.map(doc => doc.data());
  return fireList;
}
const fire = await getfire(db);
console.log(fire);//พิมพ์ข้อมูลของธาตุFireทั้งหมด

//Get a list of dark from database เรียกใช้ข้อมูลธาตุมืดจากดาต้าเบส
console.log("******List of Pokemon dark type******");
async function getdark(db) {
  const dark = collection(db, 'dark');
  const darkSnapshot = await getDocs(dark);
  const darkList = darkSnapshot.docs.map(doc => doc.data());
  return darkList;
}
const dark = await getdark(db);
console.log(dark);//พิมพ์ข้อมูลของธาตุมืดทั้งหมด

//Get a list of psychic from database เรียกใช้ข้อมูลธาตุpsychicจากดาต้าเบส
console.log("******List of Pokemon psychic type******");
async function getpsychic(db) {
  const psychic = collection(db, 'psychic');
  const psychicSnapshot = await getDocs(psychic);
  const psychicList = psychicSnapshot.docs.map(doc => doc.data());
  return psychicList;
}
const psychic = await getpsychic(db);
console.log(psychic);//พิมพ์ข้อมูลของธาตุpsychicทั้งหมด

//Get a list of water from database เรียกใช้ข้อมูลธาตุน้ำจากดาต้าเบส
console.log("******List of Pokemon water type******");
async function getwater(db) {
  const water = collection(db, 'water');
  const waterSnapshot = await getDocs(water);
  const waterList = waterSnapshot.docs.map(doc => doc.data());
  return waterList;
}
const water = await getwater(db);
console.log(water);//พิมพ์ข้อมูลของธาตุน้ำทั้งหมด*/


/*ยังทำไม่ได้ 
//Add a new document in collection เพิ่มข้อมูลลงในDatabase 
const data = {
  name: 'Zangoose',
  abilities: 'Cat Ferret Pokémon',
  types: 'Normal',
  species: 'Immunity',
  id: '335',
  types2: 'None'
};
console.log("*****Add data to database****");
console.log(data);

import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
console.log("******List of Pokemon dark type******");
async function getdark(db) {
  const dark = collection(db, 'dark');
  const darkSnapshot = await getDocs(dark);
  const darkList = darkSnapshot.docs.map(doc => doc.data());
  return darkList;
}
const dark = await getdark(db);
var i = 0;
console.log(dark);//พิมพ์ข้อมูลของธาตุมืดทั้งหมด

/*const docRef = collection(db, 'dark');

await docRef.set({
  name: 'Zangoose',
  abilities: 'Cat Ferret Pokémon',
  types: 'Normal',
  species: 'Immunity',
  id: '335',
  types2: 'None'
});*/

//คำสั่งแสดงคำบนหน้าเว็บ local host port 8080
import http from 'http'
import fs from 'fs'

const PORT=8080; 

fs.readFile('index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});