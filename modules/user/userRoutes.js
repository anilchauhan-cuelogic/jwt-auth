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
    }
];