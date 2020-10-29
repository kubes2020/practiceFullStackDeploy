require('dotenv').config()

const express = require('express')
const server = express()


const port = process.env.PORT || 3300

server.use(express.json())

server.get('/api', (req, res)=> {
    res.json({ message: 'Api is up!'})
})

server.listen(port, ()=> {
    console.log(`\n*** listening on port ${port}***`)
})