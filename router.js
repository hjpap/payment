//所有路由映射配置
var site = require('./controllers/site');

var auth = function (req, res, next) {
    if (!req.session || !req.session.user) {
        return res.render("sigin",{error:"请先登录"});
    }
    next();
};

module.exports=function(app){
    app.get('/', site.index);

}
