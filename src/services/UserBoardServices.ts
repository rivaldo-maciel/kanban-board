import { UpdateResult, DeleteResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import UserBoard from '../database/models/UserBoard';
import Services from './Services';

class UserBoardServices extends Services<UserBoard> {
  public async create(entity: UserBoard): Promise<UserBoard> {
    this.schema.parse(entity);
    return this.repository.save(entity);
  }

  public async getAll(): Promise<UserBoard[]> {
    return await this.repository.find();
  }

  public async update(
    id: number,
    alteration: QueryDeepPartialEntity<UserBoard>
  ): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
  }
}

export default UserBoardServices;
