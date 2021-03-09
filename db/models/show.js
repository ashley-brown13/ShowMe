'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    title: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    yearRealeased: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfSeasons: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Show.associate = function(models) {
    // associations can be defined here
    Show.hasMany(models.Rating, {foreignKey: 'showId'})
  };
  return Show;
};
