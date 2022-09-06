import { Entity, PrimaryGeneratedColumn, Column as column, ManyToOne } from 'typeorm';
import Column from './Column';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @column()
  content!: string;

  @column()
  createdDate!: Date;

  @ManyToOne(() => Column, (column) => column.tasks)
  @column()
  columnId!: number;
}

export default Task;
