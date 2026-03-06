const {readFile} = require("../data/Utils");

exports.getPapers = function({session: sessionid}, next){
    try {
        console.log("Session: ", sessionid);
        const sessions = readFile();     
        const papers = sessions.find(s => s.session == sessionid).papers;
        
        next(null, papers);
        } catch (err) {
        next(err);
    }
}