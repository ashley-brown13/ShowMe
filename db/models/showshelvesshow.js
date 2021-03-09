'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShowShelvesShow = sequelize.define('ShowShelvesShow', {
    showShelveId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  ShowShelvesShow.associate = function(models) {
    // associations can be defined here
  };
  return ShowShelvesShow;
};
