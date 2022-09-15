require('dotenv').config()
const express = require('express')
const router = require('../routes')
const app = express()

const API_PORT = process.env.API_PORT
const HOST_NAME = '127.0.0.1'

router(app)

app.listen(API_PORT, HOST_NAME, () => {
  console.log(`Server is listening at http://${HOST_NAME}:${API_PORT}`)
})
