// ====End of Example jQuery & start of functionality for add.handlebars===== //
$(document).ready(function(){

  $("#add-quote").on("submit", function(event){
    event.preventDefault();

    // Grabbing user input from form
    var newQuote = {
      quote: $("#add-quote [name=text]").val().trim(),
      category: $("#add-quote [name=category]").val().trim()
    };
    
    // Clearing form fields for appearance
    $("#add-quote [name=text]").val("");
    $("#add-quote [name=category]").val("");

    // Post request with newQuote data
    $.ajax('/api/quotes', {
      method: "POST",
      data: newQuote
    }).then(function(){
      location.reload();
    });
  });


  // When user clicks image button
  $("#get-image").on("click", function(){
    var id = Math.round(Math.random() * 20);

    $.ajax("/images/" + id, {
      method: "GET"
    }).then(function(data){
      console.log(data);
    });
  });

  // When user clicks random quote button
  $("#get-random-quote").on("click", function(){
    $.ajax("/quotes/", {
      method: "GET"
    }).then(function(data){
      console.log(data);
    });
  });

  // When user clicks user submitted quote
  $("#get-user-quote").on("click", function(){
    $.ajax("/quotes/user", {
      method: "GET"
    }).then(function(data){
      console.log(data);
      var index = Math.round(Math.random() * data.length);
      var selectedQuote = data[index];
      console.log(selectedQuote);
    });
  });

  // When user clicks sound button
  $("#get-sound").on("click", function(){
    $.ajax("/sounds/", {
      method: "GET"
    }).then(function(data){
      console.log(data);
      var index = Math.round(Math.random() * data.length);
      var selectedSound = data[index];
      console.log(selectedSound);
    });
  });
});
