var User = require('../../../model/user').User,
    userUtil = require('../../../utils/user'),
    authUtil = require('../../../utils/auth');

module.exports = {

    login: function (request, reply) {

        userUtil.getUserByEmail(request.payload.email)
            .then(function(user) {

                return user.comparePassword(request.payload.password);
            })
            .then(function(userDetails){

                userDetails.authToken = authUtil.createToken({'id' : userDetails._id, 'scope' : userDetails.scope});
                
                return userUtil.updateUserToken(userDetails);

            })
            .then(function(userDetails){
                reply(userDetails);
            })
            .catch(function(err){
                reply(err);
            });
    }
};