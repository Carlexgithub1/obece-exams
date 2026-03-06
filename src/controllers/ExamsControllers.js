// const {getSeries} = require("../models/SeriesModels");
const {getExam} = require("../models/ExamsModels");



exports.renderExam = function(req, res){
    getExam({examid: req.params.id}, (err, exam) => {
        if (err) throw err;
        return res.render("exam", { exam });
    })

    // getSeries({examid: req.params.id}, (err, series) => {
    //     if (err) throw err;
    //     console.log("Papers: ", series);
    //     return res.render("exam", { series, examid: req.params.id});
    // })
}

exports.getExams = function(req, res){
    
}
