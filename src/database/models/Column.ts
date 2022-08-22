import { Entity, PrimaryGeneratedColumn, Column as column } from 'typeorm';

@Entity()
class Column {

  @PrimaryGeneratedColumn()
  id?: number;

  @column()
  title!: string;

  @column()
  boardId!: number;

  constructor(title: string, boardId: number) {
    this.title = title;
    this.boardId = boardId;
  }
}

export default Column;