import { Request, Response, NextFunction } from 'express';
import ILoginServices from '../services/interfaces/ILoginServices';
import ILoginControllers from './interfaces/ILoginControllers';

class LoginControllers implements ILoginControllers {
  private loginServices: ILoginServices;

  constructor(services: ILoginServices) {
    this.loginServices = services;
  }

  public async sigIn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const { email, password } = req.body;
      const token = await this.loginServices.sigIn(email, password);
      return res.status(200).json({ message: 'you are logged in!', token });
    } catch (e: unknown) {
      next(e);
    }
  }
}

export default LoginControllers;
