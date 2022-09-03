import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Task from '../database/models/Task';
import GenericServices from './Services';

class TaskServices extends GenericServices<Task> {

  public create(entity: Task): Promise<Task> {
    this.schema.parse(entity);
    return this.repository.save(entity);
  }

  public async getAll(): Promise<Task[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<Task> {
    this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public update(alteration: QueryDeepPartialEntity<Task>, id: number): Promise<UpdateResult> {
    this.checkExistence(id);
    return this.repository.update(id, alteration);
  }

  public remove(id: number): Promise<DeleteResult> {
    this.checkExistence(id);
    return this.repository.delete(id);
  }
}

export default TaskServices;