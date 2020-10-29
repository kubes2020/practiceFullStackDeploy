require('dotenv').config()

const express = require('express')
const server = express()
const path = require('path')

const port = process.env.PORT || 3300

server.use(express.json())

server.get('/api', (req, res)=> {
    res.json({ message: 'Api is up!'})
})

server.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.use(express.static(path.join(__dirname, 'client/build')))

server.listen(port, ()=> {
    console.log(`\n*** listening on port ${port}***`)
})