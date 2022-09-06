import {
  Entity,
  PrimaryGeneratedColumn,
  Column as column,
  ManyToOne
} from 'typeorm';
import Board from './Board';

@Entity('columns')
class Column {
  @PrimaryGeneratedColumn()
  id?: number;

  @column()
  title!: string;

  @ManyToOne(() => Board, (board) => board.columns)
  @column()
  boardId!: number;
}

export default Column;
