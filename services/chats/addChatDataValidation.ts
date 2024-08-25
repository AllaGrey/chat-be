import Joi from 'joi';

export const addChatDataValidation = (users: string[]) => {
  return Joi.object({
    users: Joi.array()
      .items(
        Joi.string().required().messages({
          'string.empty': 'User ID cannot be empty',
        })
      )
      .length(2)
      .unique()
      .required()
      .messages({
        'array.base': 'Users must be an array of user IDs',
        'array.length': 'Exactly two users are required',
        'array.unique': 'Users must be unique',
        'any.required': 'Users are required',
      }),
  })
    .options({ abortEarly: false })
    .validate({ users });
};
