import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import User from './User';

@Entity('boards')
class Board {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => User, user => user.boards)
  users: User[];
}

export default Board;