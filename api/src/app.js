const express = require('express')
const dotenv = require('dotenv').config()
const db = require('./models/db')

const app = express()
const port = 5000

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, (err) => {
    if (err) {
        return console.error(err)
    }

    db.connect()
        .then( () => {
            return console.log(`Server is listening on ${port}`)
        })
})
