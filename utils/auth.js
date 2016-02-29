var Promise = require('bluebird'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    privateKey = config.key.privateKey;

module.exports = {
	createToken : createToken,
	clearToken : clearToken,
	validate : validate,
	invalidate : invalidate
};

function createToken(userObj) {
  
	var authObj = {'userId' : userObj.id, 'scope' : userObj.scope},
		token1 = jwt.sign(authObj, privateKey);
	// 	token2;

	// authObj.token = token1;
	// token2 = jwt.sign(authObj, privateKey);
	// client.HMSET(token1,authObj);
	return token1;
}

function clearToken(token) {
  
	return new Promise(function(resolve, reject) {

		jwt.verify(token,privateKey,function(err,decoded) {

			if(err) {
				return;
			}

			client.del(decoded.coreToken);

			resolve();

		});

	});

}

function validate(decodedToken, callback) {

    return callback(null, true, decodedToken)
   
};

function invalidate(decodedToken,callback) {

    client.EXISTS(decodedToken.token,function(err,credentials) {

        if (!credentials || err) {
            return callback(null,true,{});
        }

        client.del(decodedToken.token);
        callback(null,true,{});

    });
};