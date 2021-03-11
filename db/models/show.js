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
    yearReleased: {
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
    },
    youtubeVideoURL: DataTypes.STRING,
  }, {});
  Show.associate = function(models) {
    Show.hasMany(models.Rating, {foreignKey: 'showId'})
    Show.hasMany(models.Review, {foreignKey: 'showId'})
    Show.belongsToMany(models.ShowShelf, {foreignKey: 'showId', through: "ShowShelvesShow", otherKey:'showShelfId'})
  };
  return Show;
};
