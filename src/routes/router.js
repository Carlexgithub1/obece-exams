const router = require("express").Router();

const {renderHomepage, renderPagenotfound} = require("../controllers/HomeController");
const {renderSession, getSessions} = require("../controllers/SessionsController");
const {getPaper, getPapers} = require("../controllers/PapersController");

// ui
router.get("/", renderHomepage);
router.get("/session/:id", renderSession);
router.use(renderPagenotfound);

// api
router.get("/api/get-sessions", getSessions);
router.get("/api/get-paper/:id", getPaper);
router.post("/api/get-papers", getPapers);

function route(app){
    app.use(router);
}

exports.route = route;