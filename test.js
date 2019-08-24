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
