import { UpdateResult, DeleteResult, FindOneOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import User from '../database/models/User';
import DuplicateUserError from '../errors/DuplicateUserError';
import Services from './Services';
import * as bcrypt from 'bcrypt';

class UserServices extends Services<User> {

  public async create(entity: User): Promise<User> {
    this.schema.parse(entity);
    this.checkUserExistence(entity.email);
    const newUser = { ... entity };
    newUser.password = await this.hashPassword(entity.password);
    return this.repository.save(newUser);
  }

  public async getAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<User> {
    this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public update(id: number, alteration: QueryDeepPartialEntity<User>): Promise<UpdateResult> {
    this.checkExistence(id);
    return this.repository.update(id, alteration);
  }

  public remove(id: number): Promise<DeleteResult> {
    this.checkExistence(id);
    return this.repository.delete(id);
  }

  private async checkUserExistence(email: string): Promise<void> {
    const user = await this.repository.findOne({ where: { email } });
    if (user) throw new DuplicateUserError();
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

}

export default UserServices;