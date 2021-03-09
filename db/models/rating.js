'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false}
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
    Rating.belongsTo(models.Show, {foreignKey: 'showId'}),
    Rating.belongsTo(models.User, {foreignKey: 'userId'})

  };
  return Rating;
};