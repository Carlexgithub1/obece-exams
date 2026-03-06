const fs = require("fs");
const path = require("path");
require("dotenv").config();
const HOST = process.env.HOST;

exports.readFile = function(){
    try {
        const data = JSON.parse(fs.readFileSync(path.join(__dirname,`./exams-${HOST}.json`)), "utf8");
        return data;
    } catch (err) {
        throw err;
    }
}