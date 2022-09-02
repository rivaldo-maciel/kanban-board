import { DataSource, EntityTarget, Repository, FindOneOptions, DeleteResult, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import NotFoundError from '../errors/NotFoundError';

abstract class Services<T> {
  private dataSource: DataSource;
  protected repository: Repository<T>;

  constructor(dataSource: DataSource, model: EntityTarget<T>) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(model);
  }

  public abstract create(entity: T): Promise<T>

  public abstract getAll(): Promise<T[]>

  public abstract getOne(id: number): Promise<T>

  public abstract update(alteration: QueryDeepPartialEntity<T>, id: number): Promise<UpdateResult>

  public abstract remove(id: number): Promise<DeleteResult>

  public async checkExistence(id: number): Promise<void> {
    const user = await this.repository.findOne(id as FindOneOptions);
    if (!user) throw new NotFoundError();
  }
}

export default Services;

