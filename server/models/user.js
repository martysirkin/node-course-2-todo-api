var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        trim: true,
        type: String,
        minLength: 1,
        required: true
    }
});

module.exports = {User};