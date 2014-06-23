/**
 * Created by wei.wang on 11/4/13.
 */
exports.config = {
    siteInfo:{
        siteURL:"http://10.20.3.51:3002",
        siteStaticURL:"http://10.20.3.51:3002",
        title:"PayMent.",
        description:"PayMent",
        keywords:"PayMent"
    },
    session_secret:"ricw",
    session_maxAge:30000,

    db: 'mongodb://localhost/PayMent'

}
