import { Response, NextFunction } from 'express';
import Board from '../database/models/Board';
import IBoardServices from '../services/interfaces/IBoardServices';
import { RequestWithUserId } from '../types/express';
import Controllers from './Controllers';
import IBoardControllers from './interfaces/IBoardControllers';

class BoardControllers extends Controllers<Board> implements IBoardControllers {
  protected services: IBoardServices;

  public async getBoardsByUserId(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id: userId } = req.params;
      const userBoards = await this.services.getBoardsByUserId(Number(userId));
      return res.status(200).json(userBoards);
    } catch (e: unknown) {
      next(e);
    }
  }
}

export default BoardControllers;