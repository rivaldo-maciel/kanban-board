import { NextFunction, Request, Response, Router } from 'express';
import IControllers from '../controllers/interfaces/IControllers';

class EntityRouter {
  protected _router: Router;
  protected controller: IControllers;

  constructor(expressRouter: Router, controller: IControllers) {
    this._router = expressRouter;
    this.controller = controller;
    this.createRoutes();
  }

  public createRoutes(): void {
    this._router.post(
      '/',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.create(req, res, next);
      }
    );

    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      this.controller.getAll(req, res, next);
    });

    this._router.get(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.getOne(req, res, next);
      }
    );

    this._router.put(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.update(req, res, next);
      }
    );

    this._router.delete(
      '/:id',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.remove(req, res, next);
      }
    );
  }

  get router() {
    return this._router;
  }
}

export default EntityRouter;
