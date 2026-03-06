const Exams = [{session:2012}, {session:2013}, {session:2014}, {session:2015}];

const {getExams} = require("../models/ExamsModels");


exports.renderHomepage = function(req, res){
    getExams((err, exams) => {
        if (err) throw err;
        // console.log("Exams: ", exams);
        return res.render("homepage", { exams });
    })
}
exports.renderPagenotfound = function(req, res){
    res.render("pagenotfound");
}