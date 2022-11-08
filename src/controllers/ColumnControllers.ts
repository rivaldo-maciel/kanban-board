import { Response, NextFunction } from 'express';
import Column from '../database/models/Column';
import { RequestWithUserId } from '../types/express';
import Controllers from './Controllers';

class ColumnControllers extends Controllers<Column> {
 /*  async getColumnsByBoardId(req: RequestWithUserId, res: Response, next: NextFunction): Promise<Response> {
    try {
      const userId = req.userId;
      const columns = 
      return res.status(201).json(createdEntity);
    } catch (e: unknown) {
      next(e);
    }
  } */
}

export default ColumnControllers;