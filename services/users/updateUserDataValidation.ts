import Joi from 'joi';
import { UpdateData } from '../../types';

export const updateUserDataValidation = (data: UpdateData) => {
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
      avatar: Joi.string().required().messages({
        'any.required': 'avatar is required',
        'string.empty': 'avatar is required',
      }),
    })
    .validate(data);
};
