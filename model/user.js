var mongoose = require('../database').mongoose;

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
	createdOn : {
		type : Date,
		default: Date.now
	},
};

var userSchema = new mongoose.Schema(schema);

exports.User = mongoose.model('User', userSchema);



