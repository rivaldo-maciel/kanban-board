import { Request, Response, NextFunction } from 'express';

interface IBoardControllers {
  create(req: Request, res: Response, next: NextFunction): Promise<Response>

  getAll(_req: Request, res: Response, next: NextFunction): Promise<Response> 

  getOne(req: Request, res: Response, next: NextFunction): Promise<Response>

  update(req: Request, res: Response, next: NextFunction): Promise<Response>
 
  remove(req: Request, res: Response, next: NextFunction): Promise<Response>

  getBoardsByUserId(req: Request, res: Response, next: NextFunction): Promise<Response> 
}

export default IBoardControllers;