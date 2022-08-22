import { DataSource, EntityTarget, Repository, FindOneOptions, DeleteResult, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

class GenericServices<T> {
  private dataSource: DataSource;
  private repository: Repository<T>;

  constructor(dataSource: DataSource, model: EntityTarget<T>) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(model);
  }

  public async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  public async getOne(id: number): Promise<T> {
    return await this.repository.findOne({ where: { id } } as FindOneOptions)
  }

  public async update(alteration: QueryDeepPartialEntity<T>, id: number): Promise<UpdateResult> {
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}

