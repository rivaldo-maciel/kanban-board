import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class UserBoard {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column()
  boardId!: number;

  constructor(title: string, boardId: number) {
    this.title = title;
    this.boardId = boardId;
  }
}

export default UserBoard;