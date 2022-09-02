import { FindOneOptions, UpdateResult, DeleteResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import UserBoard from '../database/models/UserBoard';
import GenericServices from './Services';

class UserBoardServices extends GenericServices<UserBoard> {

  public create(entity: UserBoard): Promise<UserBoard> {
    return this.repository.save(entity);
  }

  public async getAll(): Promise<UserBoard[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<UserBoard> {
    this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public update(alteration: QueryDeepPartialEntity<UserBoard>, id: number): Promise<UpdateResult> {
    this.checkExistence(id);
    return this.repository.update(id, alteration);
  }

  public remove(id: number): Promise<DeleteResult> {
    this.checkExistence(id);
    return this.repository.delete(id);
  }
}

export default UserBoardServices;