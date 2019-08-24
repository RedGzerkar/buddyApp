const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: 'AIzaSyBZWlfdtbjcQhYLIPJw_JAlVY9oKa7BWiw',
    authDomain: 'teamwalk-b716d.firebaseapp.com',
    projectId: 'teamwalk-b716d',
  });
  
  var db = firebase.firestore();


// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
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
db.collection("booking").doc("k95gHfg5cbSNdLFusRXB").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         var userObj=doc.data().formObj
//         var userName=userObj.uName
//         var userSurname = userObj.lname
//         var photo=userObj.photo
//         var userid=userObj.sId
//         var degree = userObj.deg
//         console.log(userName+" "+userSurname+" "+photo+" "+userid)
//     });
// });


// var userObj=doc.data().formObj
        
// var user=userObj.uName
// var pswd=userObj.inPassword
// console.log("");
// if (user==x.elements[0].value && pswd==x.elements[1].value) {
//     console.log("Login Successfull")
// } else { 
//     console.log("Invalid username or password")
// } 



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



// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });