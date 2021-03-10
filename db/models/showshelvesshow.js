'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShowShelvesShow = sequelize.define('ShowShelvesShow', {
    showShelfId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  ShowShelvesShow.associate = function(models) {

  };
  return ShowShelvesShow;
};
