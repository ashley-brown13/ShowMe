'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
     type: DataTypes.STRING(50),
     allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.ShowShelf, {foreignKey: 'userId'})
    // associations can be defined here
    User.hasMany(models.Rating, {foreignKey: 'userId'})
    User.hasMany(models.Review, {foreignKey: 'userId'})

  };
  return User;
};