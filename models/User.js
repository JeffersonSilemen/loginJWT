const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {type: String, required: true, minlenght: 3, maxlength: 50},
    email: {type: String, required: true, minlenght: 6, maxlength: 50},
    password: {type: String, required: true, minlenght: 6, maxlength: 200},
    phone: {type: String, required: true, minlenght: 6, maxlength: 20},
    admin: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date},
    token: {type: String, minlenght: 10, maxlength: 11}
}); 

module.exports = mongoose.model('User', userSchema);