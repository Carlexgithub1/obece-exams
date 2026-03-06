const {readFile} = require("../data/Utils");

exports.getExams = function(next){
    try {
        const exams = readFile();
        next(null, exams);
    } catch (err) {
        next(err);
    }
}

exports.getExam = function({examid}, next){
    try {
        console.log("Exam id: ", examid);
        const exams = readFile();
        const exam = exams.find(exam => exam.id == examid);
        
        next(null, exam);
        } catch (err) {
        next(err);
    }
}