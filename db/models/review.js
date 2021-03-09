'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: true,}
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Show, {foreignKey: 'showId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};