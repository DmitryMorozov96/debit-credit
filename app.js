const express = require('express')
const path = require('path')
const config = require('./config/default.json').serverCfg
const app = express()
const transactionRoutes = require('./router/transactionRouter.js')

app.use(express.static(path.resolve(__dirname, 'client')))
app.use(express.json())
app.use('/', transactionRoutes)

//default onload file
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(config.port, config.domain, () => {
    console.log(`Server is listening on port ${config.port}`)
})