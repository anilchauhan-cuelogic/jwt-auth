var controller = require('./controller/auth'),
    validator = require('../../validator/auth');

module.exports = [
    {
        method: 'POST',
        path: '/login',
        config: {
            validate : validator.login,
            handler : controller.login
        }
    }
];