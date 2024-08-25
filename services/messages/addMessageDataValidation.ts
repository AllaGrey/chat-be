import Joi from 'joi';
import { IMessage } from '../../types';

export const addMessageDataValidation = (message: IMessage) => {
  return Joi.object()
    .options({ abortEarly: false })
    .keys({
      text: Joi.string().required().messages({
        'any.required': 'text is required',
        'string.empty': 'text is required',
      }),
      chat: Joi.string().required().messages({
        'string.base': 'chat must be a string',
        'any.required': 'chat is required',
        'string.empty': 'chat is required',
      }),
      user: Joi.string().messages({
        'string.base': 'user must be a string',
        'any.required': 'user is required',
        'string.empty': 'user is required',
      }),
    })
    .validate(message);
};
