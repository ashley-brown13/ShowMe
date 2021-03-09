'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(70),
        unique: true
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      yearReleased: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      numberOfSeasons: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      genre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageURL: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Shows');
  }
};
