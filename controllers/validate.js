const joi = require('@hapi/joi');

const registerValidate = (data) => {
    const Schema = joi.object({
        name: joi.string().required().min(3).max(100),
        email: joi.string().required().min(3).max(200),
        password: joi.string().required().min(6).max(50),
        phone: joi.string().required().min(6).max(50)
    });

    return Schema.validate(data);
}

const loginValidate = (data) => {
    const Schema = joi.object({
        email: joi.string().required().min(3).max(200),
        password: joi.string().required().min(6).max(50)
    });

    return Schema.validate(data);
}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;