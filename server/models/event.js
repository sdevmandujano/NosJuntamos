'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Option);
  };
  return Event;
};