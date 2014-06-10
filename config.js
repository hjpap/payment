/**
 * Created by wei.wang on 11/4/13.
 */
exports.config = {
    siteInfo:{
        siteURL:"http://localhost:3002",
        siteStaticURL:"http://localhost:3002",
        title:"PayMent.",
        description:"PayMent",
        keywords:"PayMent"
    },
    session_secret:"ricw",
    session_maxAge:30000,

    db: 'mongodb://localhost/PayMent'

}
