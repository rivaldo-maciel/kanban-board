import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey
  } from 'typeorm';
  
  export class createUserBoardTable1667398240542 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users_boards',
          columns: [
            {
              name: 'user_id',
              type: 'int'
            },
            {
              name: 'board_id',
              type: 'int'
            }
          ]
        })
      );
      await queryRunner.createForeignKey(
        'users_boards',
        new TableForeignKey({
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onDelete: 'cascade'
        })
      );
      await queryRunner.createForeignKey(
        'users_boards',
        new TableForeignKey({
          columnNames: ['board_id'],
          referencedTableName: 'boards',
          referencedColumnNames: ['id'],
          onDelete: 'cascade'
        })
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users_boards');
    }
  }
  