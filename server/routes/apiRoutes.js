var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/event", function(req, res) {
    console.log("Get Event");

  });

  app.get("/api/:event_id/location", function(req, res) {
    db.User.findAll({
      //search for the location and return
    }).then(function(createdEvent) {
      console.log(createdEvent.id);
      res.json(createdEvent.id);
    });
  });

  app.post("/api/event", function(req, res) {
    console.log("Create Event");
    console.log(req.body.description);
    db.Event.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

 // Modify the event --> this will close the option
  app.put("/api/modifyEvent/:id/:option", function(req, res) {
    console.log("Modify Event" + req.params.id);
  });

    // Vote for an option
  app.post("/api/vote/:id/:option", function(req, res) {
    console.log("Vote: event " + req.params.id + " Option " + req.params.option);
  });

  // Delete an event by id
  app.delete("/api/event/:id", function(req, res) {
    console.log("Delete an event");
  });

  //Login in routes using facebook
    app.get('/',
      function(req, res) {
      res.render('index', { user: req.user });
    });

    /*
    app.get('/login',
      function(req, res){
        res.render('login');
    });

    app.get('/login/facebook',
     // passport.authenticate('facebook')
    );

    app.get('/login/facebook/return', 
     // passport.authenticate('facebook', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
    });

    app.get('/profile',
      //require('connect-ensure-login').ensureLoggedIn(),
      function(req, res){
        //in our case it will probably call the create event html
      res.render('profile', { user: req.user });
    });
*/
  }
