const express = require('express')
const methodFilter = require('./middleware/method-filter')
const root = require('./routes/root')
const slash = require('express-slash')
const port = process.env.PORT || 5000

const app = express()
app.use(methodFilter)

app.use(express.static('./public/'))

app.use('/', root)
app.use(slash())

app.listen(port, () => { console.log('Listening on port 1337') })
