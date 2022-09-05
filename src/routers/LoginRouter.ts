import { Request, Response, NextFunction, Router } from 'express';
import ILoginControllers from '../controllers/interfaces/ILoginControllers';

class LoginRouter {
  protected _router: Router;
  protected controller: ILoginControllers;

  constructor(expressRouter: Router, controller: ILoginControllers) {
    this._router = expressRouter;
    this.controller = controller;
    this.createRoutes();
  }

  createRoutes(): void {
    this._router.post(
      '/login',
      (req: Request, res: Response, next: NextFunction) => {
        this.controller.sign(req, res, next);
      }
    );
  }

  get router() {
    return this._router;
  }
}

export default LoginRouter;
