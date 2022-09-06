import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Board from '../database/models/Board';
import Services from './Services';

class BoardServices extends Services<Board> {

  public async create(entity: Board): Promise<Board> {
    this.schema.parse(entity);
    return await this.repository.save(entity);
  }

  public async getAll(): Promise<Board[]> {
    return await this.repository.find({ relations: ['columns'] });
  }

  public async getOne(id: number): Promise<Board> {
    await this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public async update(id: number, alteration: QueryDeepPartialEntity<Board>): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
  }

}

export default BoardServices;