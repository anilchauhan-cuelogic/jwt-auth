var User = require('../../../model/user').User,
    userUtil = require('../../../utils/user');

module.exports = {

    add: function (request, reply) {

        userUtil.checkEmailExists(request)
        .then(function(){
            var user = new User(request.payload);
            user.saveAsync();
            reply(user);
        })
        .catch(function(err){
            reply(err);
        });
        
    },

    getUser: function(request, reply) {

        User.findById(request.params.id)
            .then(function(user){
                reply(user);
            })
            .catch(function(err){
                console.log(err);
            })
    },

    listUsers: function(request, reply) {
        User.find()
            .then(function(users){
                reply(users);
            })
            .catch(function(err){
                console.log(err);
            })
    }
};