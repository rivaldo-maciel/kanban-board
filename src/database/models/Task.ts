import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Task {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content!: string;

  @Column()
  createdDate!: Date;

  @Column()
  columnId!: number;

  constructor(content: string, columnId: number) {
    this.content = content;
    this.columnId = columnId;
  }
}

export default Task;