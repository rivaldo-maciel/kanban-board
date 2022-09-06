import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Column from '../database/models/Column';
import Services from './Services';

class ColumnServices extends Services<Column> {

  public async create(entity: Column): Promise<Column> {
    this.schema.parse(entity);
    return await this.repository.save(entity);
  }

  public async getAll(): Promise<Column[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<Column> {
    await this.checkExistence(id);
    return await this.repository.findOne({ where: { id }, relations: ['tasks'] });
  }

  public async update(id: number, alteration: QueryDeepPartialEntity<Column>): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
  }
}

export default ColumnServices;