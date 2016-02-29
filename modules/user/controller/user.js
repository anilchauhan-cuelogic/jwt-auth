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
        
    }
};