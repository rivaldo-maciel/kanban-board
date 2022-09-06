import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content!: string;

  @Column()
  createdDate!: Date;

  @Column()
  columnId!: number;
}

export default Task;
