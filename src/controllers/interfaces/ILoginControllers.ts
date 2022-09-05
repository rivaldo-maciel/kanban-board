import { Request, Response, NextFunction } from 'express';

interface ILoginControllers {
  sign(req: Request, res: Response, next: NextFunction): Promise<Response>;
}

export default ILoginControllers;
