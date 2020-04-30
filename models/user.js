'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    birth: DataTypes.DATE,
    card: DataTypes.INTEGER,
    role: DataTypes.ENUM('Admin', 'Guest')
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};