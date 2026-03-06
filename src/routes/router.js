const router = require("express").Router();

const {renderHomepage, renderPagenotfound} = require("../controllers/HomeControllers");
const {renderExam, getExams} = require("../controllers/ExamsControllers");
const {getSerie, getSeries} = require("../controllers/SeriesControllers");

// ui
router.get("/", renderHomepage);
router.get("/exam/:id", renderExam);
router.use(renderPagenotfound);

// api
// router.get("/api/get-exams", getExams);
// router.get("/api/get-serie/:id", getSerie);
// router.post("/api/get-series", getSeries);

function route(app){
    app.use(router);
}

exports.route = route;