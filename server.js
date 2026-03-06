const express = require('express');
const app = express();
const router = require("./src/routes/router");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 3000;

// app.use(express.json);
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.static(path.join(__dirname, "./src/public")));

router.route(app);

app.listen(port, ()=>{
    console.log(`App listening on http://127.0.0.1:${port}`);
})