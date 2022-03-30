const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    /** Objeto */
    const items = [
        {
            title: "D",
            message: "ado"
        },
        {
            title: "E",
            message: "lefante"
        },
        {
            title: "M",
            message: "uito"
        },
        {
            title: "A",
            message: "moroso"
        },
        {
            title: "I",
            message: "nteligente"
        },
        {
            title: "S",
            message: "entiu paz em seu coração."
        }
    ];

    const subtitle = "EJS, uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript.";

    res.render("pages/index", {
        qualidades: items,
        subtitle: subtitle
    });
});

app.get("/sobre", function (req, res) {
    res.render("pages/about");
});

app.listen(8080);

console.log("Servidor Rodando...");