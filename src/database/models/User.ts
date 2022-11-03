import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Board from './Board';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'first_name' })
  firstName!: string;

  @Column({ name: 'last_name' })
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @ManyToMany(() => Board, (board) => board.users)
  @JoinTable({
    name: 'users_boards',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'board_id',
      referencedColumnName: 'id'
    }
  })
  boards: Board[];
}

export default User;
