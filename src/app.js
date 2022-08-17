const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("La página de Inicio.");
});

module.exports = app;