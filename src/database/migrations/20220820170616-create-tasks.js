'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'created_date'
      },
      columnId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'columns', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'column_id'
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
