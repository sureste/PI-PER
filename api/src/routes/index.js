const { Router } = require('express')

const {Sequelize , Model} = require('sequelize')

const {Tabla} = require('../db')

const axios = require('axios')
const router = Router()




router.get('/food', async(req,res) => {
    let results = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=f848239be8104dec8b35f16828b2aae0")
    res.status(200).send(results.data)
})


module.exports = router;