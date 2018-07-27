module.exports = function(sequelize, DataTypes) { 

  var Event = sequelize.define("Event", {
      name: Sequelize.STRING,
      date: Sequelize.DATE,
      guests: Sequelize.INTEGER
  });
  
  var User = sequelize.define("User", {
      name: Sequelize.STRING,
      email: Sequelize.STRING
  
  });
  
  