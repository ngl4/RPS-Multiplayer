  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDehVTK8bKydeja68w3D1UaMgoMtJJ73Ck",
    authDomain: "test-5e833.firebaseapp.com",
    databaseURL: "https://test-5e833.firebaseio.com",
    projectId: "test-5e833",
    storageBucket: "test-5e833.appspot.com",
    messagingSenderId: "635088554189"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#player-1").on("click", function() {

    $("#player-1").hide();

    var form = $("<form>");
    var form_group = $("<div>");
    form_group.addClass("form-group mt-3");
    var form_label = $("<label>");
    form_label.attr("for", "player-1-nameInput");
    form_label.text("Enter Your Name:");
    var form_input = $("<input>");
    form_input.addClass("form-control w-50 m-auto");
    form_input.attr("type", "text");
    form_input.attr("id", "InputName");
    form_input.attr("placeholder", "Enter Name");

    form_group.append(form_label);
    form_group.append(form_input);
    form.append(form_group);

    $("#player-1-div").append(form);


  });


  //Once player 1 is clicked, SHOW input option for name then click submit
  //HIDE: the player 1 
  //the name data is stored in firebase database
  //HIDE: the player 1 input option and submit button 
  //SHOW: the name info is displayed back to the page from the database 
  //SHOW: rock, paper, and scissors buttons
  //Once one of the option is clicked, the option is saved to the database 
  //HIDE: all three buttons
  //Use JQuery Show and hide() for displaying purposes 
  
  //Results 
  //compare player 1 and player 2 options 
  //pull data from the database
  //if else statement logic for win and lose 
  //display win or lose 


  //Player 2 follow the above instructions!!!

  //Chat Box 
  //same thing for message



  
  