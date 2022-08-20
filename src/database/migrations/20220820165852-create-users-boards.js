'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_boards', {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id'
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
    await queryInterface.dropTable('users_boards');
  }
};
