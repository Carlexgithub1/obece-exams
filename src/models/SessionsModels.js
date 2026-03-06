const {readFile} = require("../data/Utils");

exports.getSessions = function(next){
    try {
        const sessions = readFile();
        next(null, sessions);
    } catch (err) {
        next(err);
    }
}