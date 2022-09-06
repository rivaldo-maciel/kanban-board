import { Entity, PrimaryColumn } from 'typeorm';

@Entity('users_boards')
class UserBoard {
  @PrimaryColumn({ name: 'user_id' })
  userId!: number;

  @PrimaryColumn({ name: 'board_id' })
  boardId!: number;
}

export default UserBoard;
