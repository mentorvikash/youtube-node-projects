const express = require('express');
const router = express.Router()

const toDoItems = [
    { id: 1, task: "buy milk" }
]

router.get("/", (_, res) => {
    res.render("index", { toDoItems })
})

router.get("/new", (req, res) => {
    res.render("new")
})

module.exports = router