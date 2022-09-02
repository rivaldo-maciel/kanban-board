import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Board from '../database/models/Board';
import Services from './Services';

class BoardServices extends Services<Board> {

  public create(entity: Board): Promise<Board> {
    return this.repository.save(entity);
  }

  public async getAll(): Promise<Board[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<Board> {
    this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public update(alteration: QueryDeepPartialEntity<Board>, id: number): Promise<UpdateResult> {
    this.checkExistence(id);
    return this.repository.update(id, alteration);
  }

  public remove(id: number): Promise<DeleteResult> {
    this.checkExistence(id);
    return this.repository.delete(id);
  }

}

export default BoardServices;