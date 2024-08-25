import { IHttpError } from '../types';

export const HttpError = (status: number, message: string): IHttpError => {
  const error: IHttpError = new Error(message);
  error.status = status;

  return error;
};
