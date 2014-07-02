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

exports.boot=function(req,res){
    res.render('bootstrap',
        {   siteInfo:config.siteInfo    }
    );
};

exports.mes=function(req,res){
    res.render('socket',
        {   siteInfo:config.siteInfo    }
    );
};

exports.get=function(req,res){
    res.render('socket',
        {   siteInfo:config.siteInfo    }
    );
};

