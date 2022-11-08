import {
  Entity,
  PrimaryGeneratedColumn,
  Column as column,
  ManyToOne,
  OneToMany
} from 'typeorm';
import Board from './Board';
import Task from './Task';

@Entity('columns')
class Column {
  @PrimaryGeneratedColumn()
  id?: number;

  @column()
  title!: string;

  @ManyToOne(() => Board, (board) => board.columns)
  @column({ name: 'board_id' })
  boardId!: number;

  @OneToMany(() => Task, (task) => task.columnId)
  tasks: Task[]
}

export default Column;
