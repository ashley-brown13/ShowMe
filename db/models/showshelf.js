'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShowShelf = sequelize.define('ShowShelf', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
      },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      }
  }, {});
  ShowShelf.associate = function(models) {
    ShowShelf.belongsTo(models.User, { foreignKey: 'userId' })
    ShowShelf.belongsToMany(models.Show, {foreignKey: 'showShelveId', through: "ShowShelvesShow", otherKey: 'showId' })
  };
  return ShowShelf;
};
