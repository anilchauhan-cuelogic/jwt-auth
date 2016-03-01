var mongoose = require('../database').mongoose,
	bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;

var schema = {
	name : {
		firstname: {
			type : String,
			required : true
		},
		lastname : {
			type : String,
			required : true
		}
	},
	email : {
    	type : String,
    	unique : true,
    	index: { unique: true }
  	},
  	password : {
		type : String,
		required : true
	},
	scope : {
		type: String,
        enum: ['Admin', 'User'],
        required: true
	},
	authToken : {
		type: String
	},
	createdOn : {
		type : Date,
		default: Date.now
	},
};

var userSchema = new mongoose.Schema(schema);

// Encrypt password before it is saved in satabase
userSchema.pre('save', function(next) {

	var user = this;

  	// only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });

});

userSchema.methods.comparePassword = function(password) {

	var user = this;
	return new Promise(function(resolve, reject){

		bcrypt.compare(password, user.password, function(err, isMatch) {

	        if (err) return reject(err);

	        if(isMatch) {
	        	resolve(user.authenticationResponse);
	        } else {
	        	reject('Password is incorrect.');
	        }
		});
	});
};

userSchema.virtual('authenticationResponse').get(function () {

  var response = {
    id: this._id,
    scope: this.scope,
    name: this.email
  };

  return response;
});

exports.User = mongoose.model('User', userSchema);

