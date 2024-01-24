const express = require('express')
const axios = require('axios')
const router = express.Router()


const apiKey = "211158a74590af681a5f6a978c12427e"
const Url = "https://api.openweathermap.org/data/2.5/weather";

router.get("/user", function (req, res) {
    res.send("this is our user routes")
})

router.get("/weather", function (req, res) {
    res.render("index", { weatherData: null, error: null })
})

router.post("/weather", async (req, res) => {
    try {
        const body = req.body
        const response = await axios.get(Url, {
            params: {
                q: body.cityName,
                units: 'metric',
                APPID: apiKey
            }
        })
        const data = response.data
        console.log({ data })
        return res.status(200).render('index', { weatherData: data, error: null });
    } catch (error) {
        return res.status(404).render('index', { weatherData: null, error: "data not found" });
    }
})



module.exports = router

