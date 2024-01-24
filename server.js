const express = require('express');
const app = express();
const port = 4000;
// const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

// creating our routes
const indexRoutes = require("./routes/index")
app.use("/", indexRoutes)

app.get("/", (req, res) => {
    res.send("welcome to nodejs project list")
})

app.listen(port, () => {
    console.log("server is running at " + port);
})

