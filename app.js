// Load environment variables
require("dotenv").config();

const express = require("express");
const app = express();
// INITIALIZE THE GIPHY-API LIBRARY
const giphy = require("giphy-api")({
    https: true,
    apiKey: process.env.GIPHY_API_KEY,
});

app.get("/hello-gif", function (req, res) {
    const gifUrl = "http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif";
    res.render("hello-gif", { gifUrl: gifUrl });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/greetings/:name", function (req, res) {
    const name = req.params.name;
    res.render("greetings", { name: name });
});

// REQUIRE HTTP MODULE
const http = require("http");

app.get("/", function (req, res) {
    // If the term is null, undefined, NaN, "", 0, or false
    if (!req.query.term) {
        giphy.trending(function (err, response) {
            res.render("home", { gifs: response.data });
        });
    } else {
        giphy.search(req.query.term, function (err, response) {
            res.render("home", { gifs: response.data });
        });
    }
});

app.use(express.static("public"));
