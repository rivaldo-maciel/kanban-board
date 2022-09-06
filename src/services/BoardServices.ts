import { DeleteResult, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { UserBoard } from '../database/models';
import Board from '../database/models/Board';
import Services from './Services';

class BoardServices extends Services<Board, UserBoard> {
  public async create(entity: Board, userId: number): Promise<Board> {
    this.schema.parse(entity);
    const newBoard = await this.repository.save(entity);
    console.log({ userId, boardId: newBoard.id });
    await this.repositorySupport.save({ userId, boardId: newBoard.id });
    return newBoard;
  }

  public async getAll(): Promise<Board[]> {
    return await this.repository.find({ relations: ['columns'] });
  }

  public async getOne(id: number): Promise<Board> {
    await this.checkExistence(id);
    return await this.repository.findOne({
      where: { id },
      relations: ['columns']
    });
  }

  public async update(
    id: number,
    alteration: QueryDeepPartialEntity<Board>
  ): Promise<UpdateResult> {
    await this.checkExistence(id);
    return await this.repository.update(id, alteration);
  }

  public async remove(id: number): Promise<DeleteResult> {
    await this.checkExistence(id);
    return await this.repository.delete(id);
  }
}

export default BoardServices;
