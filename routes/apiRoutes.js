var db = require("../models");
var Spotify = require("../apis/spotify");
var spotify = new Spotify();

module.exports = function(app) {
  // Get all examples
  app.get("/api/quotes", function(req, res) {
    db.Quote.findAll({}).then(function(dbQuotes) {
      console.log(dbQuotes);
      res.json(dbQuotes);
    });
  });

  app.get("/api/sounds", function(req, res) {
    db.Sounds.findAll({}).then(function(dbSounds) {
      res.json(dbSounds);
    });
  });

  app.get("/api/images", function(req, res) {
    db.Image.findAll({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  // Sends user input from add.handlebars to db
  app.post("/api/quotes", function(req, res) {
    db.Quote.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Posting user selections of playlist category
  app.post("/api/sounds", function(req, res) {
    var category = req.body.category;
    spotify.searchSpotify(category, addSound, res);
  });

  function addSound(source, category, res){
    db.Sounds.create({
      playlisturl: source,
      category: category
    }).then(function(result) {
      res.json(result);
    });
  }
};
