

//npm i
// npm init -y      package.json  dependancy

//npm i express   

const express = require("express");
const port = 3500;
const app = express();
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
})

app.get("/", (req, res) => {
    res.sendFile("./public/home.html", { root: __dirname })
});

app.get("/about", (req, res) => {
    res.sendFile("./public/about.html", { root: __dirname })
});
app.get("/contact", (req, res) => {
    res.sendFile("./public/contact.html", { root: __dirname })
});