import {
  Entity,
  PrimaryGeneratedColumn,
  Column as column,
  ManyToMany,
  OneToMany
} from 'typeorm';
import Column from './Column';
import User from './User';

@Entity('boards')
class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @column()
  title: string;

  @ManyToMany(() => User, (user) => user.boards)
  users: User[];

  @OneToMany(() => Column, (column) => column.boardId)
  columns: Column[];
}

export default Board;
