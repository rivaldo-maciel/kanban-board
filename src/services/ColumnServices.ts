import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Column from '../database/models/Column';
import Services from './Services';

class ColumnServices extends Services<Column> {

  public create(entity: Column): Promise<Column> {
    this.schema.parse(entity);
    return this.repository.save(entity);
  }

  public async getAll(): Promise<Column[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<Column> {
    this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public update(alteration: QueryDeepPartialEntity<Column>, id: number): Promise<UpdateResult> {
    this.checkExistence(id);
    return this.repository.update(id, alteration);
  }

  public remove(id: number): Promise<DeleteResult> {
    this.checkExistence(id);
    return this.repository.delete(id);
  }
}

export default ColumnServices;