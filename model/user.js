/**
 * Created by wei.wang on 11/4/13.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: { type: String, index: true },
    loginname: { type: String, unique: true },
    pass: { type: String },
    email: { type: String, unique: true },
    limit: { type: String, default:"2" },
    account:[{type: Schema.Account.ObjectId, ref:'account'}]
});

mongoose.model('User',userSchema);