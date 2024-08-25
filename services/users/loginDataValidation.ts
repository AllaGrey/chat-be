import Joi from 'joi';
import { LoginData } from '../../types';

export const loginDataValidation = (loginData: LoginData) => {
  return Joi.object()
    .options({ abortEarly: false })
    .keys({
      email: Joi.string().required().messages({
        'any.required': 'email is required',
        'string.empty': 'email is required',
      }),
      password: Joi.string().required().messages({
        'any.required': 'password is required',
        'string.empty': 'password is required',
      }),
    })
    .validate(loginData);
};
