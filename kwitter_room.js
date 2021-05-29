 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCGR-ckyVUhVl6cF69sKugKGRKdP5dgn0c",
      authDomain: "kwitter-project-d0c65.firebaseapp.com",
      projectId: "kwitter-project-d0c65",
      storageBucket: "kwitter-project-d0c65.appspot.com",
      messagingSenderId: "43268421131",
      appId: "1:43268421131:web:e5882321b691113bd0b90e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
