import { DeleteResult, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Task from '../database/models/Task';
import GenericServices from './Services';

class TaskServices extends GenericServices<Task> {

  public async create(entity: Task): Promise<Task> {
    this.schema.parse(entity);
    return await this.repository.save(entity);
  }

  public async getAll(): Promise<Task[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<Task> {
    await this.checkExistence(id);
    return await this.repository.findOne(id as FindOneOptions);
  }

  public async update(id: number, alteration: QueryDeepPartialEntity<Task>): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
  }
}

export default TaskServices;