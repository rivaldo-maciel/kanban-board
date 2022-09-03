import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Board {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}

export default Board;