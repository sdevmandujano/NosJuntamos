'use strict';
module.exports = (sequelize, DataTypes) => {
  var Option = sequelize.define('Option', {
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    place: DataTypes.STRING,
    votes: DataTypes.INTEGER
  }, {});
  Option.associate = function(models) {
    Option.belongsTo(models.Event)
  };
  return Option;
};