import { UpdateResult, DeleteResult, FindOneOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import User from '../database/models/User';
import DuplicateUserError from '../errors/DuplicateUserError';
import Services from './Services';

class UserServices extends Services<User> {

  public create(entity: User): Promise<User> {
    this.schema.parse(entity);
    this.checkUserExistence(entity.email);
    return this.repository.save(entity);
  }

  public async getAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<User> {
    this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public update(alteration: QueryDeepPartialEntity<User>, id: number): Promise<UpdateResult> {
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

}

export default UserServices;