import { NextFunction, Request, Response } from 'express';
import MissingTokenError from '../errors/MissingTokenError';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

class JwtMiddleware {
  public verifyToken(req: Request, _res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new MissingTokenError();
      }
      jwt.verify(token as string, process.env.JWT_SECRET, (err, _decoded) => {
        if (err) {
          throw err;
        }
      });
      next();
    } catch (e: unknown) {
      next(e);
    }
  }
}

export default JwtMiddleware;
