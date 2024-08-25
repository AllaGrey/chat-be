import { Request, Response, NextFunction } from 'express';
import { IHttpError } from '../types';
import { HttpError } from './httpError';

export const ctrlWrapper = (
  ctrl: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await ctrl(req, res, next);
    } catch (err) {
      const error = err as IHttpError;
      if (error.status) {
        next(error);
      } else {
        next(HttpError(500, 'Internal Server Error'));
      }
    }
  };
};
