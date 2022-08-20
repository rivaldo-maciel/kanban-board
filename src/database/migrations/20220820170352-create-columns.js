'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('columns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      boardId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'boards', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'board_id'
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('columns');
  }
};
