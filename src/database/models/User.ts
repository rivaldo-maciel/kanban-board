import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class User {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}

export default User;