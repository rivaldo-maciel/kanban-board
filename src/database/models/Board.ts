import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Board {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

export default Board;