'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    description: DataTypes.TEXT,
    Invites:DataTypes.INTEGER,
    Date1: DataTypes.DATE,
    Location1: DataTypes.STRING,
    Time1: DataTypes.DATE,
    Votes1: DataTypes.INTEGER,
    Date2: DataTypes.DATE,
    Location2: DataTypes.STRING,
    Time2: DataTypes.DATE,
    Votes2: DataTypes.INTEGER,
    Date3: DataTypes.DATE,
    Location3: DataTypes.STRING,
    Time3: DataTypes.DATE,
    Votes3: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};