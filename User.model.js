'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:{ type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: String,
    last_name: String,
    phone_no: String,
    balance:  { type: Number, default:0 },
    last_login: { type: Date, default: Date.now },
    modified_by: String
},{
    timestamps: true
});

module.exports = mongoose.model('User',UserSchema);