const { Router } = require('express')

const {Sequelize , Model} = require('sequelize')

const {Tabla} = require('../db')

const axios = require('axios')
const router = Router()




router.get('/food', async(req,res) => {
    console.log("exito a medias")
    res.status(200).send("estamos bien")
})


module.exports = router;