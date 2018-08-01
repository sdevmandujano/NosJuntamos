'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    Description: DataTypes.TEXT,
    Invites:DataTypes.number,
    Date1: DataTypes.DATE,
    //google maps
    Location1: DataTypes.STRING,
    Time1: DataTypes.DATE,
    Date2: DataTypes.DATE,
    Location2: DataTypes.STRING,
    Time2: DataTypes.DATE,
    Date3: DataTypes.DATE,
    Location3: DataTypes.STRING,
    Time3: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};