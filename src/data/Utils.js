const fs = require("fs");

exports.readFile = function(){
    try {
        const data = JSON.parse(fs.readFileSync("./src/data/exams.json", "utf8"));
        return data;
    } catch (err) {
        throw err;
    }
}