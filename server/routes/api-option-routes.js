var OptionController = require("../controllers/option.controller")

module.exports = function(app) {
  
  // GET route for options in specific event
  app.get("/api/events/:id/options", OptionController.getOptions);
  
  // POST route for a new option
  app.post("/api/events/:id/options", OptionController.postOptions);

  // PUT route for an specific option in an specific event
  app.put("/api/events/:id/options/:opId", OptionController.voteOption);

  }
