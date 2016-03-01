var joi = require("joi"),
    pattern = require("../utils/pattern");

exports.add = {
    'payload' : {
        'name' : joi.object().keys({
            'firstname' : joi.string().required(),
            'lastname' : joi.string().required()
        }),
        'email' : joi.string().email().required(),
        'password' : joi.string().min(6).max(15).required(),
        'scope' : joi.array().required()
    }
};

exports.getUser = {
    params: {
        id: joi.string().regex(pattern.isObjectId).required()
    }
};