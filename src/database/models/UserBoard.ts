import { Entity, Column } from 'typeorm';

@Entity()
class UserBoard {

  @Column()
  userId!: number;

  @Column()
  boardId!: number;

  constructor(userId: number, boardId: number) {
    this.userId = userId;
    this.boardId = boardId;
  }
}

export default UserBoard;