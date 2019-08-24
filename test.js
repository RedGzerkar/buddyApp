const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: 'AIzaSyBZWlfdtbjcQhYLIPJw_JAlVY9oKa7BWiw',
    authDomain: 'teamwalk-b716d.firebaseapp.com',
    projectId: 'teamwalk-b716d'
  });
  
  var db = firebase.firestore();
  db.collection("users").add({
    email: "test@kek.kek",
    name: "ara",
    surname: "ara"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
// var docRef = db.collection("users").doc("skOITcpR8amiVwAXPoJs");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});