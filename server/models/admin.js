// ./models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    passwordSalt: String
});

module.exports = mongoose.model('Admin', AdminSchema);