const db = firebase.firestore();
var stat = db.collection("ground").doc("baytoy");

stat.get().then((doc) => {
    if (doc.exists) {
        document.getElementById('bay').innerHTML = doc.data().name;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


