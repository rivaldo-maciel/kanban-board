import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import GenericError from '../errors/GenericError';

class ErrorMiddleware {
  public async errorMiddleware(
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<Response> {
    if (err instanceof GenericError) {
      return res.status(err.status).json({ message: err.message });
    }
    if (err instanceof ZodError) {
      return res
        .status(400)
        .json({ type: 'data type error', message: err.issues });
    }
    return res.status(500).json({ message: 'internal error' });
  }
}

export default ErrorMiddleware;
