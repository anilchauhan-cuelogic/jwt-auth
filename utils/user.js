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
            })
            .catch(function(err){
                reject(err);
            });
    });
}

exports.getUserByEmail = function(email) {
    return new Promise(function(resolve, reject){

        User.findOne({'email' : email})
            .execAsync()
            .then(function(user) {

                if(user) {
                    resolve(user);
                } else {
                    reject("Invalid email or password");
                }
            })
            .catch(function(err){
                reject(err);
            });
    });
}

exports.updateUserToken = function(userDetails) {
    return new Promise(function(resolve, reject){

        User.update({'_id': userDetails.id},{ '$set': { 'authToken': userDetails.authToken }})
            .execAsync()
            .then(function(user){
                resolve(userDetails);
            })
            .catch(function(err){
                reply(err);
            });
    });
}