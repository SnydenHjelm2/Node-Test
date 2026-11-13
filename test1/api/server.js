const express = require('express');
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/script.js", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../client/script.js"));
});

app.get("/test", (req, resp) => {
    let a = ["Cool!", "Awesome!", "Splendid!", "Wonderful!"];

    resp.json(a[Math.floor(Math.random() * a.length)]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});