const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: 'string',
        required: true,
        minLenght: 6,
    },

});

//Create a module based on the schema

const User = mongoose.model('user', userSchema);
module.exports = User;


