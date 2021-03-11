'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false,}
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Show, {foreignKey: 'showId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};
