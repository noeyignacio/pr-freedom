import Joi from '@hapi/joi'

export const createPostValidator = Joi.object({
    authorName: Joi.string()
        .required()
        .min(6)
        .max(30),

    postContent: Joi.string()
        .required()
        .min(1)
        .max(300),

    isPosted: Joi.boolean()
        .default(true),

    isUpdated: Joi.boolean()
        .default(false)
})

export const updatePostValidator = Joi.object({
    postContent: Joi.string()
        .required()
        .min(6)
        .max(300),

    isPosted: Joi.boolean()
        .default(true),

    isUpdated: Joi.boolean()
        .default(true)
})