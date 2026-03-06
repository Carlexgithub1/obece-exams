const sessions = [{session:2012}, {session:2013}, {session:2014}, {session:2015}];

const {getSessions} = require("../models/SessionsModels");


exports.renderHomepage = function(req, res){
    getSessions((err, sessions) => {
        if (err) throw err;
        // console.log("Sessions: ", sessions);
        return res.render("homepage", { sessions });
    })
}
exports.renderPagenotfound = function(req, res){
    res.render("pagenotfound");
}