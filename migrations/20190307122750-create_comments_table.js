'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      comment: {
          type: Sequelize.TEXT
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments')
  }
};
