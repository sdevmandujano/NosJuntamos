var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
    });
  });

  //Login in routes using facebook
    app.get('/',
      function(req, res) {
      res.render('index', { user: req.user });
    });

    app.get('/login',
      function(req, res){
        res.render('login');
    });

    app.get('/login/facebook',
      passport.authenticate('facebook'));

    app.get('/login/facebook/return', 
      passport.authenticate('facebook', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
    });

    app.get('/profile',
      require('connect-ensure-login').ensureLoggedIn(),
      function(req, res){
      res.render('profile', { user: req.user });
    });

  }