var User = require('../../../model/user').User;

module.exports = {

    login: function (request, reply) {

        // User.findOne({ email: _.trim(request.payload.email) }, function(err, user) {

        //     if (err) throw err;

        //     if(user){

        //         user.comparePassword(_.trim(request.payload.password), function(err, isMatch) {

        //             if (err) throw err; 

        //             if(isMatch){

        //                 var token = auth.createToken({'id' : user._id, 'scope' : user.scope});
        //                 reply({'id':user._id, 'scope' : user.scope, 'token': token});
                        
        //             } else {
        //                 reply("Invalid password");
        //             }
        //         });
        //     } else {
        //         return reply("User with this email does not exist");
        //     }           
        // });
        
    }
};