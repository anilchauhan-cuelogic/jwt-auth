var User = require('../model/user').User,
    Promise = require('bluebird'),
    mongoose = Promise.promisifyAll(require('mongoose'));

exports.checkEmailExists = function (request){

    return new Promise(function (resolve, reject){
        
        var email = request.payload.email;

        User.findOne({'email' : email})
            .execAsync()
            .then(function(user) {
                if(user) {
                    reject('User with this email already exists');
                }
                resolve();
            });
    });
}