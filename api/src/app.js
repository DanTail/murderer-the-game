const express = require('express')
const app = express()
const port = 5050

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port)
