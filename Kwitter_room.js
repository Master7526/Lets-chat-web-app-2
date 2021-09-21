const firebaseConfig = {
    apiKey: "AIzaSyDvJ5h_4Y7VCEuzCtzug2MejGlDhp9jZ9M",
    authDomain: "lets-chat-7977e.firebaseapp.com",
    projectId: "lets-chat-7977e",
    storageBucket: "lets-chat-7977e.appspot.com",
    messagingSenderId: "643623976048",
    appId: "1:643623976048:web:846c942c391686b9fb88b5",
    measurementId: "G-DFPS76B19Y"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
     
      window.location = "kwitter_page.html";
  }
     
     
     function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
         });
       });
     
     }
     
     getData();
     
     function redirectToRoomName(name)
     {
       console.log(name);
       localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
     }
     
     function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
         window.location = "index.html";
     }