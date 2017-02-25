const express = require('express')
const methodFilter = require('./middleware/method-filter')
const root = require('./routes/root')
const slash = require('express-slash')

const app = express()
app.use(methodFilter)

app.use(express.static('./public/'))

app.use('/', root)
app.use(slash())

app.listen(1337, () => { console.log('Listening on port 1337') })