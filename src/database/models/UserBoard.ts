import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
class UserBoard {

  @PrimaryColumn()
  userId!: number;

  @PrimaryColumn()
  boardId!: number;
}

export default UserBoard;