import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey
  } from 'typeorm';
  
  export class createColumnTable1667398219858 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'columns',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              isNullable: false
            },
            {
              name: 'title',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'board_id',
              type: 'int'
            }
          ]
        })
      );
      await queryRunner.createForeignKey(
        'columns',
        new TableForeignKey({
          columnNames: ['board_id'],
          referencedTableName: 'boards',
          referencedColumnNames: ['id']
        })
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('columns');
    }
  }
  