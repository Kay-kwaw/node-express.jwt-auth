const mongoose = require('mongoose');
const { isEmail } = require('validator');

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

//Create a module based on the schema

const User = mongoose.model('user', userSchema);
module.exports = User;


