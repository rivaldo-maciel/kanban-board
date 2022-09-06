import { NextFunction, Request, Response } from 'express';
import MissingTokenError from '../errors/MissingTokenError';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { User } from '../database/models';
import { RequestWithUserId } from '../types/express';

class JwtMiddleware {
  public verifyToken(req: RequestWithUserId, _res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new MissingTokenError();
      }
      jwt.verify(token as string, process.env.JWT_SECRET, (err, decoded: User) => {
        if (err) {
          throw err;
        }
        req.userId = decoded.id;
      });
      next();
    } catch (e: unknown) {
      next(e);
    }
  }
}

export default JwtMiddleware;
