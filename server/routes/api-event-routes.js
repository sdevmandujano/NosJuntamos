var EventController = require("../controllers/event.controller")

module.exports = function(app) {
  
  // GET route for specific event
  app.get("/api/events/:id", EventController.getEvent);
  
  // POST route for a new Event
  app.post("/api/event", EventController.postEvent);

  }
