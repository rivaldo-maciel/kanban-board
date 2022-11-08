import { Entity, PrimaryGeneratedColumn, Column as column, ManyToOne } from 'typeorm';
import Column from './Column';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @column()
  content!: string;

  @column({ name: 'created_date' })
  createdDate!: Date;

  @ManyToOne(() => Column, (column) => column.tasks)
  @column({ name: 'column_id' })
  columnId!: number;

  @column()
  index!: number;
}

export default Task;
