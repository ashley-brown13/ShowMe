'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShowShelvesShows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      showShelfId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'ShowShelves'}
      },
      showId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Shows'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ShowShelvesShows');
  }
};
