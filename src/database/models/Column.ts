import { Entity, PrimaryGeneratedColumn, Column as column } from 'typeorm';

@Entity()
class Column {

  @PrimaryGeneratedColumn()
  id?: number;

  @column()
  title!: string;

  @column()
  boardId!: number;
}

export default Column;