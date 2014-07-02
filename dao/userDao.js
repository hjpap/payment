/**
 * Created by wei.wang on 11/4/13.
 */
var models = require('../model');
var User = models.User;

exports.getUserByLoginName = function(loginName , callback ){
    User.findOne({'loginname': loginName}, callback);
};

exports.newUser = function(newUser , callback){
    var user=new User();
    user.name = newUser.name;
    user.loginname = newUser.loginname;
    user.pass = newUser.pass;
    user.email = newUser.email;
    user.limit = newUser.limit;
    user.save(callback);
};

exports.setName = function(id, newName, callback){
    User.findById(id, function(err, user){
        if(err){
            callback({err:"Could not find."});
            return;
        }
        user.name = newName;
        user.save(callback);
    });
}

exports.setPass = function(id, newPass, callback){
    User.findById(id, function(err, user){
        if(err){
            callback({err:"Could not find."});
            return;
        }
        user.pass = newPass;
        user.save(callback);
    });
}

exports.setLimit = function(id, newLimit, callback){
    User.findById(id, function(err, user){
        if(err){
            callback({err:"Could not find."});
            return;
        }
        user.limit = newLimit;
        user.save(callback);
    });
}