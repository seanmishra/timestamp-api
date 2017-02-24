const express = require('express')
const methodFilter = require('./middleware/method-filter')
const root = require('./routes/root')

const app = express()
app.use(methodFilter)
app.use(express.static('./public'))
app.use('/', root)

app.listen(1337, () => { console.log('Listening on port 1337') })