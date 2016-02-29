var joi = require("joi");

exports.add = {
    'payload' : {
        'email' : joi.string().email().required(),
        'password' : joi.string().required()
    }
};