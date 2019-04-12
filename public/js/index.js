// ====End of Example jQuery & start of functionality for add.handlebars===== //
$(document).ready(function(){
  // Adding a quote
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
      $("#quote-result").text("Quote added.");
    });
  });
  
  // Adding a playlist
  $("#add-playlist").on("submit",function(event){
    event.preventDefault();

    var newData = {
      category:$("#playlist").val()
    }

    $.ajax("/api/sounds", {
      method: "POST",
      data: newData
    }).then(function(){
      $("#playlist-result").text("Playlist added.");
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
      $("#quote-image").hide();
      var quote = $("<p>");
      var author = $("<p>");
      var category = $("<p>");
      quote.text(`Quote: ${data.quote}`);
      author.text(`Author: ${data.author}`);
      category.text(`Category: ${data.category}`);
      $("#quote").append(quote, author, category);
    });
  });

  // When user clicks user submitted quote
  $("#get-user-quote").on("click", function(){
    $.ajax("/quotes/user", {
      method: "GET"
    }).then(function(data){
      console.log(data);
      var index = Math.floor(Math.random() * data.length);
      var selectedQuote = data[index];
      console.log(selectedQuote);
    });
  });

  // When user clicks sound button
  $("#get-sound").on("click", function(){
    console.log("REQEUST");
    $.ajax("/sounds", {
    // $.ajax("/api/sounds/", {
      method: "GET"
    }).then(function(data){
      console.log(data);
      var index = Math.floor(Math.random() * data.length);
      console.log("INDEX: " + index);
      var selectedSound = data[index];
      console.log(selectedSound);
      var playlisturl = selectedSound.playlisturl;
      $("#playlist-div").html('<iframe src="'+playlisturl+'" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');

    });
  });

/*
  $(function () {
    var i = Image.imageurl;
    for (i=0; i < Math.floor(Math.random() * 21); i++){
        var curImg = i;
        var img = new Image();         
        $(img).load(function () {                                 
            $('#imageLoad').removeClass('loading')
                        .append($('<img src="'+this.curImg+'">').append(this));
        }).error(function () {})                            
    }
  });
  */
});
