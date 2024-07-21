const joi = require("joi");
const { CONSTANT_CREATION } = require("../../Util/constance");

const creatUserSchema = joi.object({
    username:joi.string().alphanum().min(CONSTANT_CREATION.min).max(CONSTANT_CREATION.max).required() ,
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone:joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}),
});

module.exports = {creatUserSchema};