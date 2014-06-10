/**
 * Created by wei.wang on 11/4/13.
 */
var config = require('../config').config;
var EventProxy = require('eventproxy');

exports.index=function(req,res){
    res.render('index',
        {   siteInfo:config.siteInfo    }
    );
};

