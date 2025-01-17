'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const cors = require('cors')
const errorHandler = require('./helpers/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('NSAW - No stress apps!')
})

app.use('/', router)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Listening on port:' , port);
})