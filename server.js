require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
//var exphbs = require("express-handlebars");

// Configure the Facebook strategy for use by Passport.
passport.use(new Strategy({
  //This ClientID and clientSecret keys  need to be moved to an env file. Left here for testing.
  clientID: "2143739542571707",
  clientSecret: "aa44df3bd62206a70b82da286fb3bf30",
  callbackURL: 'http://localhost:3000/login/facebook/return'
},
function(accessToken, refreshToken, profile, cb) {
//this profile needs to be associeted with the User object
  return cb(null, profile);
}));


// Configure Passport authenticated session persistence.
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
