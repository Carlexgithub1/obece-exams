const {readFile} = require("../data/Utils");

exports.getSeries = function({examid}, next){
    try {
        console.log("Exam id: ", examid);
        const exams = readFile();
        const papers = exams.find(exam => exam.id == examid).series;
        
        next(null, series);
        } catch (err) {
        next(err);
    }
}