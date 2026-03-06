const {getPapers} = require("../models/PappersModel");


exports.renderSession = function(req, res){
    getPapers({session: req.params.id}, (err, papers) => {
        if (err) throw err;
        console.log("Papers: ", papers);
        return res.render("session", { papers, session: req.params.id});
    })
}

exports.getSessions = function(req, res){

}
