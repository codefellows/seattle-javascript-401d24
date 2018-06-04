'use strict';

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

// Before we save, hash the plain text password
userSchema.pre('save', function(next) {
});

// If we got a user/password, compare them to the hashed password
// If we got a token, validate it and then pull the user id
// In both cases, return the user instance or an error
userSchema.statics.authenticate = function(auth) {
};

// Compare a plain text password against the hashed one we have saved
userSchema.methods.comparePassword = function(password) {
};

// Generate a JWT from the user id and a secret
userSchema.methods.generateToken = function() {
};

export default mongoose.model('users', userSchema);
