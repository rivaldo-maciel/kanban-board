import { Request, Response, NextFunction } from 'express';

interface ILoginControllers {
  sigIn(req: Request, res: Response, next: NextFunction): Promise<Response>;
}

export default ILoginControllers;
