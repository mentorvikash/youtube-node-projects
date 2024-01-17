const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("welcome to hello world update")
})

app.listen(4000, () => {
    console.log("our app is listening  at 4000")
})
