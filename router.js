//所有路由映射配置
var site = require('./controllers/site');

var auth = function (req, res, next) {
    if (!req.session || !req.session.user) {
        return {err:"no auth"};
    }
};

module.exports=function(app){
    app.get('/', site.index);
    app.get('/boot', site.boot);
    app.get('/mes', site.mes);

}
