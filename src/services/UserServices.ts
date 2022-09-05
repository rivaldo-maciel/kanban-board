import { UpdateResult, DeleteResult, FindOneOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import User from '../database/models/User';
import Services from './Services';
import * as bcrypt from 'bcrypt';
import IUserServices from './interfaces/IUserServices';
import NonExistentUserError from '../errors/NonExistentUserError';
import DuplicateUserError from '../errors/DuplicateUserError';

class UserServices extends Services<User> implements IUserServices {

  public async create(entity: User): Promise<User> {
    this.schema.parse(entity);
    await this.checkUserExistence(entity.email);
    const newUser = { ... entity };
    newUser.password = await this.hashPassword(entity.password);
    return await this.repository.save(newUser);
  }

  public async getAll(): Promise<User[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<User> {
    await this.checkExistence(id);
    return await this.repository.findOne({ where: { id } });
  }

  public async update(id: number, alteration: QueryDeepPartialEntity<User>): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
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