const { checkConn, syncModels } = require("./database")
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const setRelations = require("./database/model")

const app = express()


async function connectDB() {

    await checkConn()
     setRelations() 
    await syncModels()

}


function launchServer() {

    app.use(cors()) //permite piticiones de todas las direcciones
        .use(morgan('dev')) //nos muestra las peticiones en consola
        .use(express.json()) // permite leer formato json en el body
        /* .use('/api', require('./api/routes/index')) */

        .listen(process.env.EXPRESS_PORT, () => console.log('Server listening on port 3000')) //server listening requests
}

async function startAPI() {

    launchServer()
    connectDB()
}


startAPI()