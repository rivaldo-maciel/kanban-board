import { NextFunction, Request, Response, Router } from 'express';
import IBoardControllers from '../controllers/interfaces/IBoardControllers';
import IControllers from '../controllers/interfaces/IControllers';
import EntityRouter from './EntityRouter';

class BoardRouter extends EntityRouter {
  protected controller: IBoardControllers;

  constructor(expressRouter: Router, controller: IControllers) {
    super(expressRouter, controller);
    this.createGetBoardsByUserIdRoute();
  }

  public createGetBoardsByUserIdRoute(): void {
    this._router.get('/userBoards/:id', (req: Request, res: Response, next: NextFunction) => {
      this.controller.getBoardsByUserId(req, res, next);
    });
  }
}

export default BoardRouter;
