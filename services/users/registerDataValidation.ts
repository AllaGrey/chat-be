import Joi from 'joi';
import { RegisterData } from '../../types';

export const registerDataValidation = (registerData: RegisterData) => {
  return Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().required().messages({
        'any.required': 'name is required',
        'string.empty': 'name is required',
      }),
      surname: Joi.string().required().messages({
        'any.required': 'surname is required',
        'string.empty': 'surname is required',
      }),
      email: Joi.string().required().messages({
        'any.required': 'email is required',
        'string.empty': 'email is required',
      }),
      password: Joi.string().required().messages({
        'any.required': 'password is required',
        'string.empty': 'password is required',
      }),
    })
    .validate(registerData);
};
