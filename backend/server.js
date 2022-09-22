const express = require("express");
const dotenv = require("dotenv");
const fetchNewsFunction = require('./fetchNews')
const path = require("path");

dotenv.config();
const app = express();

app.use(express.json()); // to accept json data

app.get("/fetchNews", async (req, res) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=${req.query.category}&apiKey=${process.env.API_KEY}&page=${req.query.page}&pageSize=${req.query.pageSize}`
    fetchNewsFunction.fetchNews(url)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        });
});

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "frontend/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    );
}
else {
    app.get("/", (req, res) => {
        res.send("API is running")
    })
}

// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
);