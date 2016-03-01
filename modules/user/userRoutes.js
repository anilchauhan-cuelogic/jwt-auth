var controller = require('./controller/user'),
    validator = require('../../validator/user');

module.exports = [
    {
        method: 'POST',
        path: '/add',
        config: {
            validate : validator.add,
            handler : controller.add
        }
    },
    {
        method: 'GET',
        path: '/user/{id}',
        config: {
            validate : validator.getUser,
            handler : controller.getUser
        }
    },
    {
        method: 'GET',
        path: '/users',
        config: {
            handler : controller.listUsers
        }
    }
];