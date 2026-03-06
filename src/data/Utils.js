const fs = require("fs");

exports.readFile = function(){
    try {
        const data = JSON.parse(fs.readFileSync("./src/data/sessions.json", "utf8"));
        return data;
    } catch (err) {
        throw err;
    }
}