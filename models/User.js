const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[true, 'Please enter an email address'] ,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },

});

//A set of strings of characteres seperated from the password itself to is known as salt in hashing of a password
// We take the password attach a salt string to it and hash through hashing algorithm to
userSchema.pre('save', async function(next){
const salt = await bcrypt.genSalt();
this.password = await bcrypt.hash(this.password, salt)
    next();
});
// Static method to login a user;
userSchema.statics.login = async function(email, password){
    const users = await this.findOne({email: email,});
    if (users) {
        const auth = await bcrypt.compare(password, users.password);
      if (auth){
        return users;
      }
      throw Error('Invalid password');

    }
    throw Error('User not found');
}
//Create a module based on the schema

const User = mongoose.model('user', userSchema);
module.exports = User;


