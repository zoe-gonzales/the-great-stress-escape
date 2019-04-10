var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/images/:id", function(req, res) {
    db.Image.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      // need to change handlebars reference
      res.render("index", {
        images: dbImages
      });
    });
  });

  app.get("/quotes/:id", function(req, res) {
    db.Quote.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      // need to change handlebars reference
      // add func. to pass results through iquotes package
      // https://www.npmjs.com/package/iquotes
      res.render("index", {
        quotes: dbquotes
      });
    });
  });

  app.get("/quotes/", function(req, res) {
    //readme for iquotes: https://github.com/banminkyoz/iquotes
    const iquotes = require('iquotes');

    iquotes.random();

    //Get random quote for a category
    //Categories: life, love, dev (development), and all
    iquotes.random('life');

    console.log(iquotes.random());
      // need to change handlebars reference
      // add func. to pass results through iquotes package
      // https://www.npmjs.com/package/iquotes
    res.render("index", {
      quotes: iquotes.random()
    });
  });

  app.get("/sounds/:id", function(req, res) {
    db.Sound.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      // need to change handlebars reference
      // add functionality to pass results through spotify
      res.render("index", {
        sounds: dbSounds
      });
    });
  });

  app.get("/add", function(req, res) {
    res.render("add");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
