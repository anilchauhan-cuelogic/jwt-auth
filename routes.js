var user = require('./modules/user/userRoutes.js'),
	auth = require('./modules/auth/authRoutes.js');

module.exports = [].concat(user, auth);